import Image from "next/image";
import { ButtonSubmit } from "../../Atom";
import { HeroItem } from "../../Molecul";

export default function Hero() {
  return (
    <div className="px-44 mt-14 mb-20 flex justify-between items-start">
      {/* Content left */}
      <div className="w-96">
        <h1 className="text-4xl text-primary font-poppins-bold leading-snug">
          Forget Busy Work, Start Next Vacation
        </h1>
        <p className="mt-5 mb-7 font-poppins-light text-base text-secondary">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <ButtonSubmit isPrimary route="/" title="Show me now" />
        <div className="mt-8 flex justify-between items-center">
          <HeroItem
            image="/icons/ic_traveler.png"
            total={80.409}
            title=" travelers"
          />
          <HeroItem
            image="/icons/ic_treasure.png"
            total={882}
            title=" treasure"
          />
          <HeroItem
            image="/icons/ic_cities.png"
            total={1.492}
            title=" cities"
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
