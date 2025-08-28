import { ShoppingCart } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useStoreClient } from '../../components/context';

interface ICard2Props {
  bgColor: string;
  borderColor: string;
  title: string;
  total: string;
  logo: string;
  id: string;
}

export function Card2({
  bgColor,
  borderColor,
  title,
  total,
  logo,
  id,
}: ICard2Props) {
const { showCartSheet, showProductDetailsSheet } = useStoreClient();

  return (
    <Card className={`h-full ${bgColor} ${borderColor}`}>
      <CardContent className="flex flex-col items-center justify-center px-5 pb-0">
        <div className="mb-3.5">
          <Badge size="sm" variant="destructive" className="uppercase">
            save 20%
          </Badge>
        </div>

        <span className="uppercase text-base font-medium text-mono mb-3">{title}</span>
        <Button
          size="sm"
          variant="outline"
          className="mb-2.5"
          onClick={() => showProductDetailsSheet(id !== undefined ? String(id) : 'productid')}
        >
          <ShoppingCart /> View
        </Button>
        <span className="text-sm font-medium text-mono">{total}</span>

        <img
          src={logo}
          className="size-48"
          alt="image"
        />
      </CardContent>
    </Card>
  );
}
