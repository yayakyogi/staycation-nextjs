import Image from "next/image";

interface BookingItemProps {
  image: string;
  place: string;
  city: string;
  country: string;
  price: number;
  long: number;
}

export default function BookingItem(props: BookingItemProps) {
  const { image, place, city, country, price, long } = props;
  return (
    <>
      <div className="w-full h-52 bg-slate-300 rounded-xl overflow-hidden mb-3">
        <Image src={image} width={420} height={270} />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-popping-regular text-xl text-primary">{place}</h2>
          <h2 className="font-popping-light text-base text-secondary">
            {`${city}, ${country}`}
          </h2>
        </div>

        <p className="font-poppins-medium text-base text-primary">
          {`${price} USD`}
          <span className="font-poppins-light text-secondary"> per </span>
          <span>{`${long} ${long > 1 ? "nights" : "night"}`}</span>
        </p>
      </div>
    </>
  );
}
