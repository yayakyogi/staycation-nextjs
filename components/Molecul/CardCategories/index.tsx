import Image from "next/image";
import Link from "next/link";

interface CardCategoriesProps {
  image: string;
  placeName: string;
  city: string;
  country: string;
  isPopular?: boolean;
  route: any;
}

export default function CardCategories(props: CardCategoriesProps) {
  const { image, placeName, city, country, route, isPopular = false } = props;
  return (
    <Link href={route}>
      <div className="group hover:cursor-pointer">
        <div className="w-64 h-40 rounded-xl relative overflow-hidden">
          <Image
            src={image}
            width={263}
            height={175}
            className="group-hover:scale-110 ease-in duration-300"
          />
          {isPopular && (
            <div className="absolute top-0 right-0 bg-pink rounded-bl-2xl px-7 py-1 text-white text-base">
              <span className="font-poppins-medium">Popular</span>
              <span className="font-poppins-light"> Choice</span>
            </div>
          )}
        </div>
        <div className="mt-4">
          <h1 className="font-poppins-regular text-xl text-primary">
            {placeName}
          </h1>
          <span className="font-poppins-light text-sm text-secondary">
            {`${city}, ${country}`}
          </span>
        </div>
      </div>
    </Link>
  );
}
