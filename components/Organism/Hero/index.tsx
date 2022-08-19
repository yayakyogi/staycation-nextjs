import Image from "next/image";
import { ButtonSubmit } from "../../Atom";
import { ItemIcon } from "../../Molecul";

export default function Hero() {
  return (
    <div className="mt-14 mb-20 flex justify-between items-start">
      {/* Content left */}
      <div className="w-96">
        <h1 className="text-4xl text-primary font-poppins-bold leading-snug">
          Forget Busy Work, Start Next Vacation
        </h1>
        <p className="mt-5 mb-7 font-poppins-light text-base text-secondary">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <div className="w-52">
          <ButtonSubmit isPrimary route="/" title="Show me now" />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <ItemIcon
            image="/icons/ic_traveler.png"
            total={80.409}
            title=" travelers"
            isHeroPage
          />
          <ItemIcon
            image="/icons/ic_treasure.png"
            total={882}
            title=" treasure"
            isHeroPage
          />
          <ItemIcon
            image="/icons/ic_cities.png"
            total={1.492}
            title=" cities"
            isHeroPage
          />
        </div>
      </div>
      {/* End Content Left */}
      <div className="relative w-1/2">
        <div className="absolute top-0 right-10 z-10">
          <Image
            src="/images/img-hero.png"
            width={450}
            height={380}
            alt="img-hero"
          />
        </div>
        <div className="absolute top-10 right-0">
          <Image
            src="/images/img-frame-home.png"
            width={450}
            height={380}
            alt="img-frame"
          />
        </div>
      </div>
    </div>
  );
}
