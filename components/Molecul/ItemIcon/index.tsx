import Image from "next/image";

interface ItemIconProps {
  image: string;
  total: number;
  title: string;
  isHeroPage?: boolean;
}

export default function ItemIcon(props: ItemIconProps) {
  const { image, total, title, isHeroPage = false } = props;
  return (
    <div
      className={`my-5 flex justify-between items-center ${
        isHeroPage ? "w-auto" : "w-32"
      }`}
    >
      <div>
        <div className="mb-1.5">
          <Image src={image} width={32} height={32} alt="icon traveler" />
        </div>
        <span className="text-primary font-poppins-medium">{total}</span>
        <span className="text-secondary font-poppins-light">{title}</span>
      </div>
    </div>
  );
}
