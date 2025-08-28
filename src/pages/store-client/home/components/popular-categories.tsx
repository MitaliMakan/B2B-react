import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card2 } from "../../components/common/card2";

interface Category {
  id: number;
  category_name: string;
}

interface Product {
  short_description: string | undefined;
  mrp: string;
  logo: string;
  title: string;
  total: string;
  star: string;
  product_name: string;
  discount_price: string;
  product_image: string;
  product_id: number;
}

export function PopularCategories({ storeId }: { storeId: number }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<
    Record<number, Product[]>
  >({});
  const [loading, setLoading] = useState(true);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `https://grimanisystems.salesleader.in/api/v1/store_wise_cat_list?store_id=${storeId}`
        );
        const catList = res.data?.data?.[0]?.catlist || [];
        setCategories(catList);

        // Fetch products for each category
        const productsMap: Record<number, Product[]> = {};
        await Promise.all(
          catList.map(async (cat: Category) => {
            const prodRes = await axios.post(
              "https://grimanisystems.salesleader.in/api/v1/category-productlist",
              { category_id: cat.id },
              {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`, // example auth token
      "Content-Type": "application/json",
      
    },
  }
            );
            productsMap[cat.id] = prodRes?.data?.ItemResponse?.category_products?.data || [];
           
          })
        );
        setProductsByCategory(productsMap);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [storeId]);

  if (loading) return <div>Loading categories...</div>;


  return (
    <div className="space-y-6">
      {categories.map((cat) => (
        <div key={cat.id} className="space-y-4" id={'cat'+cat.id}>
          <div className="flex items-center justify-between gap-4">
            <span className="text-lg font-medium text-mono">{cat?.category_name}</span>
            <Button mode="link" asChild>
              {/* <Link to={`/category/${cat.id}`} className="text-xs">
                See All <ChevronRight />
              </Link> */}
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-2">
            {productsByCategory[cat.id]?.map((item, index) => (
              <Card2
                key={index}
                id={item.product_id}
                shortDesc={item.short_description}
                logo={item.product_image}
                star={item.star}
                title={item?.product_name}
                mrp={item.mrp}
                total={item.discount_price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
