import Image from "next/image";

interface CardMostPickedProps {
  image: string;
  price: number;
  placeName: string;
  city: string;
  country: string;
  isFirstImage: boolean;
}

export default function CardMostPicked(props: CardMostPickedProps) {
  const { image, isFirstImage, price, placeName, city, country } = props;
  return (
    <div className="group rounded-xl relative overflow-hidden">
      <div className="scale-125 group-hover:scale-110 ease-in duration-300">
        <Image src={image} width={361} height={isFirstImage ? 470 : 220} />
      </div>
      <div className="absolute top-0 right-0 bg-pink rounded-bl-2xl px-7 py-1 text-white text-base">
        <span className="font-poppins-medium">{`$${price}`}</span>
        <span className="font-poppins-light"> per night</span>
      </div>
      <div
        className={`absolute left-5 text-white z-10 ${
          isFirstImage ? "bottom-7" : "bottom-5"
        }`}
      >
        <p className="font-poppins-regular text-xl">{placeName}</p>
        <p className="font-poppins-regular text-sm">{`${city},${country}`}</p>
      </div>
      <div className="absolute bottom-0 bg-gradient-to-t from-slate-900 opacity-50 h-24 w-full rounded-xl" />
    </div>
  );
}
