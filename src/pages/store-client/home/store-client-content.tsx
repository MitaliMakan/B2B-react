import {
  Deals,
  FeaturedProducts,
  Info,
  NewArrivals,
  PopularCategories,
  Search,
  SpecialOffers,
} from './components';

export function StoreClientContent() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Search />
      {/* <FeaturedProducts /> */}
      {/* <SpecialOffers /> */}
      {/* <NewArrivals /> */}
    <PopularCategories storeId={1} />
      {/* <Deals /> */}
      <Info />
    </div>
  );
}
