import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Card, CardContent } from '@/components/ui/card';
import { useStoreClient } from '../context';

interface ICard1Item {
  id: number;
  logo: string;
  brand: string;
}
type ICard1Items = Array<ICard1Item>;

export function Card1(categories: any) {
  console.log('categories in card1', categories?.categories?.category
);
  const { showProductDetailsSheet } = useStoreClient();

  const items = categories?.categories?.category.map((cat: any) => ({
    id: cat.id,
    logo: cat.icon,
    brand: cat.category_name
,
  })) as ICard1Items;

  const renderItem = (item: ICard1Item, index: number) => (
    <Card key={index}>
      <CardContent className="flex flex-col items-center justify-center pb-0">
        <a href={'#cat'+item.id}>
        <div
          // onClick={() => showProductDetailsSheet('productid')}
          className="hover:text-primary text-sm font-medium text-mono cursor-pointer"
        >
          {item.brand}
        </div>

        <img
          // onClick={() => showProductDetailsSheet('productid')}
          src={item.logo}
          className="cursor-pointer h-[100px] shrink-0"
          alt="image"
        />
        </a>
      </CardContent>
    </Card>
  );

  return (
    <Fragment>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
}
