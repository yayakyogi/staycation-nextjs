import Image from "next/image";

interface HeroItemInterface {
  image: string;
  total: number;
  title: string;
}

export default function HeroItem(props: HeroItemInterface) {
  const { image, total, title } = props;
  return (
    <div className="mt-8 flex justify-between items-center">
      <div>
        <div className="mb-2">
          <Image src={image} width={32} height={32} alt="icon traveler" />
        </div>
        <span className="text-primary font-poppins-medium">{total}</span>
        <span className="text-secondary font-poppins-light">{title}</span>
      </div>
    </div>
  );
}
