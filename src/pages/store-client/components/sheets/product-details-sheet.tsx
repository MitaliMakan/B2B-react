import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingCart, Star } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const items = [
  {
    text: 'Availability',
    info: (
      <Badge size="sm" variant="success">
        In Stock
      </Badge>
    ),
  },
  
  {
    text: 'Category',
    info: <span className="text-xs font-medium text-foreground">Speaker</span>,
  },
  {
    text: 'Rating',
    info: null, // rating uchun alohida component bor
  },
  
];

interface StoreClientProductDetailsSheetProps {
  open: boolean;
  onOpenChange: () => void;
  productId: string | null;
  addToCart: ({ productId }: { productId: string }) => void;
}

interface RatingProps {
  rating: number;
  outOf?: number;
}

export function Rating({ rating, outOf = 5 }: RatingProps) {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-input'}`}
        fill={i <= rating ? 'currentColor' : 'none'}
      />,
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
}
interface ProductDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  original_price?: number;
  rating: number;
  stock: string;
  sku: string;
  category: string;
  image: string;
  brand_logo: string;
}


export function StoreClientProductDetailsSheet({
  open,
  onOpenChange,
  productId,
  addToCart,
}: StoreClientProductDetailsSheetProps) {
    const [product, setProduct] = useState<ProductDetails | null>(null);
   const [loading, setLoading] = useState(false);
     useEffect(() => {
    const fetchProductDetails = async () => {
      if (!productId) return;

      setLoading(true);
      try {
        const res = await axios.post(
          'https://grimanisystems.salesleader.in/api/v1/product-details',
          { product_id: Number(productId) },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
              'Content-Type': 'application/json',
            },
          }
        );
        const data = res.data?.Response?.details;
        console.log('Fetched product details:', data);
        setProduct({
          id: data.id,
          title: data.product_name,

          description: data.long_description,
          price: data.price,
          original_price: data.discount_price,
          rating: data.rating,
          stock: data.stock,
          sku: data.sku,
          category: data.category_name,
          image: data.product_image,
          brand_logo: data.brand_logo,
        });
      } catch (err) {
        console.error('Failed to fetch product details:', err);
      } finally {
        setLoading(false);
      }
    };
    if (open) {
      fetchProductDetails();
    }
  }, [productId, open]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:w-[520px] sm:max-w-none inset-5 start-auto h-auto rounded-lg p-0 [&_[data-slot=sheet-close]]:top-4.5 [&_[data-slot=sheet-close]]:end-5">
        <SheetHeader className="border-b py-3.5 px-5 border-border">
          <SheetTitle>Product Details</SheetTitle>
        </SheetHeader>
        <SheetBody className="px-5 py-0">
          <ScrollArea className="h-[calc(100dvh-11.75rem)] pe-3 -me-3">
            <CardContent className="flex flex-col space-y-3 p-5 p-0">
              <Card className="relative items-center justify-center bg-accent/50 mb-6.5 h-[280px]">
                <Badge
                  size="sm"
                  variant="destructive"
                  className="absolute top-4 right-4 uppercase"
                >
                  save 40%
                </Badge>
                <img
                  src={product?.image}
                  className="size-48"
                  alt="image"
                />
                <Card className="absolute items-center justify-center bg-light w-[75px] h-[45px] overflow-hidden rounded-sm bottom-4 right-4">
                  <img
                    src="https://grimanisystems.com/wp-content/uploads/2025/05/GS_2-scaled.png"
                    className="dark:hidden"
                    alt="image"
                  />
                  <img
                    src="https://grimanisystems.com/wp-content/uploads/2025/05/GS_2-scaled.png"
                    className="hidden dark:block"
                    alt="image"
                  />
                </Card>
              </Card>

              <span className="text-base font-medium text-mono">
               {product?.title}
              </span>
              <div dangerouslySetInnerHTML={{ __html: product?.description ?? '' }} className="text-sm font-normal text-foreground block mb-7"/>    
           
              

              <div className="flex flex-col gap-2.5 lg:mb-11">
                {items.map((item, index) => (
                  <div className="flex items-center gap-2.5" key={index}>
                    <span className="text-xs font-normal text-foreground min-w-14 xl:min-w-24 shrink-0">
                      {item.text}
                    </span>
                    <div>
                      {item.text === 'Rating' ? (
                        <Rating rating={5} />
                      ) : (
                        item.info
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2">
                <span className="text-base font-normal text-secondary-foreground line-through">
                  {product?.price}
                </span>

                <span className="text-lg font-medium text-mono">${product?.original_price}</span>
              </div>
            </CardContent>
          </ScrollArea>
        </SheetBody>
        {/* <SheetFooter className="border-t py-3.5 px-5 border-border">
          <Button
            onClick={() => {
              if (productId) {
                addToCart({ productId });
              }
            }}
            disabled={!productId}
            className="grow"
          >
            <ShoppingCart />
            Add to Cart
          </Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
