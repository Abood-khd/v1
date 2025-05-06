import CarGallery from './CarGallery';
import ContactPanel from './ContactPanel';
import LatestNews from './Leates';
import PatrolPriceTable from './PatrolPriceTable';
import RelatedTags from './RelatedTags';
import RelatedUsedCars from './RelatedUsedCars';
import SellCarSection from './SellCarSection';
import ShareBox from './ShareBox';

export default function CarDetailsPage() {
  return (
    <div>
      <div className="md:w-[1400px] w-full mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3 space-y-4">
            <CarGallery />
          </div>
          <div className="w-full md:w-1/3 self-start">
            <ContactPanel />
          </div>
        </div>
      </div>

      <SellCarSection />
      <RelatedUsedCars/>
      <PatrolPriceTable/>
      <RelatedTags/>
      <ShareBox/>
      <LatestNews/>
    </div>
  );
}
