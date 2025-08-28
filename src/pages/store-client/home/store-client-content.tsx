import { useEffect, useState } from "react";
import axios from "axios";
import {
  Deals,
  FeaturedProducts,
  Info,
  NewArrivals,
  PopularCategories,
  Search,
  SpecialOffers,
  
} from './components';
interface Category {
  id: number;
  category_name: string;
}

export function StoreClientContent() {
    const [categories, setCategories] = useState<Category[]>([]);
    let storeId = 1;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `https://grimanisystems.salesleader.in/api/v1/store_wise_cat_list?store_id=${storeId}`
        );
        const catList = res.data?.data?.[0]?.catlist || [];
        setCategories(catList);
        } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [storeId]);
  return (
    <div className="grid grid-cols-1 gap-6">
      <Search />
      <FeaturedProducts category = {categories}/>
      <SpecialOffers />
      {/* <NewArrivals /> */}
    <PopularCategories storeId={1} />
      {/* <Deals /> */}
      <Info />
    </div>
  );
}
