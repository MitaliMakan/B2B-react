import { Card1 } from '../../components/common/card1';

export function FeaturedProducts(categories: any) {
  return (
    <div className="flex sm:grid-cols-4 xl:grid-cols-7 gap-5 mb-2 justify-center">
      <Card1 categories = {categories}/>
    </div>
  );
}
