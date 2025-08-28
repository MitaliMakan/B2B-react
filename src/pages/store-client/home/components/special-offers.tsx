import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card1, Card2 } from '../special-offers';

export function SpecialOffers() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <span className="text-lg font-medium text-mono">Special Offers</span>

        {/* <Button mode="link" asChild>
          <Link to="/account/home/get-started" className="text-xs">
            See All <ChevronRight />
          </Link>
        </Button> */}
      </div>

      <div className="grid xl:grid-cols-2 gap-5 mb-2">
        <div className="lg:col-span-1">
          <Card1 />
        </div>

        <div className="lg:col-span-1">
          <div className="grid sm:grid-cols-2 gap-5 items-stretch">
            <Card2
              id = "5"
              logo='https://grimanisystems.salesleader.in/public/assets/images/item-images/main68ae879d69959.png'
              title='Rixos-wd+'
              total='$4000.00'
              bgColor="bg-green-50 dark:bg-green-950/30"
              borderColor="border-green-200 dark:border-green-950"
            />
            <Card2
              id = "6"
              logo='https://grimanisystems.salesleader.in/public/assets/images/item-images/main68b03137b5c42.png'
              title='Mp-84'
              total='$5000.00'
              bgColor="bg-primary/10"
              borderColor="border-primary/10"
            />
          </div>
        </div>
      </div>  
    </div>
  );
}
