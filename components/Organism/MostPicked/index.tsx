import { CardMostPicked } from "../../Molecul";

export default function MostPicked() {
  return (
    <div className="px-44 mb-20">
      <h1 className="text-2xl font-poppins-medium mb-5">Most Picked</h1>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="col-span-2 row-span-4">
          <CardMostPicked
            image="/images/img-mostpicked-1.png"
            isFirstImage
            placeName="Blue Origin Fams"
            city="Jakarta"
            country="Indonesia"
            price={50}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <CardMostPicked
            image="/images/img-mostpicked-2.png"
            isFirstImage={false}
            placeName="Blue Origin Fams"
            city="Jakarta"
            country="Indonesia"
            price={50}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <CardMostPicked
            image="/images/img-mostpicked-3.png"
            isFirstImage={false}
            placeName="Blue Origin Fams"
            city="Jakarta"
            country="Indonesia"
            price={50}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <CardMostPicked
            image="/images/img-mostpicked-4.png"
            isFirstImage={false}
            placeName="Blue Origin Fams"
            city="Jakarta"
            country="Indonesia"
            price={50}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <CardMostPicked
            image="/images/img-mostpicked-5.png"
            isFirstImage={false}
            placeName="Blue Origin Fams"
            city="Jakarta"
            country="Indonesia"
            price={50}
          />
        </div>
      </div>
    </div>
  );
}
