import { ShoppingCart } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useStoreClient } from '../../components/context';

export function Card1() {
const { showCartSheet, showProductDetailsSheet } = useStoreClient();
let id=3;
  return (
    <Card className="bg-violet-50 border-violet-200 dark:bg-violet-950/30 dark:border-violet-950 h-full">
      <CardContent className="flex items-center flex-wrap sm:flex-nowrap justify-between gap-5 lg:gap-9 px-7.5 pb-0">
        <div className="flex flex-col">
          <div className="mb-3">
            <Badge size="sm" variant="destructive" className="uppercase">
              save 16%
            </Badge>
          </div>

          <h3 className="uppercase text-[26px] font-semibold text-mono mb-1">
            Rixos-l
          </h3>

          <span className="text-sm font-normal text-foreground mb-5 leading-5.5">
            2.5-way Active Tri-Amplified DSP Shallow Speaker
          </span>

          <div className="flex items-center gap-4">
            <Button size="sm" variant="mono" 
            onClick={() => showProductDetailsSheet(id !== undefined ? String(id) : 'productid')}
            >
              <ShoppingCart /> View
            </Button>
            <span className="text-base font-semibold text-mono">$8000.00</span>
          </div>
        </div>

        <img
          src={'https://grimanisystems.salesleader.in/public/assets/images/item-images/main68ae878b0ac4f.png'}
          className="h-[250px]"
          alt="image"
        />
      </CardContent>
    </Card>
  );
}
