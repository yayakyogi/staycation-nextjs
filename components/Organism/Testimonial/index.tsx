import Image from "next/image";
import { ButtonSubmit } from "../../Atom";

export default function Testimonial() {
  return (
    <div className="flex items-start mb-28 px-44 h-[541]">
      {/* image testimonial */}
      <div className="relative w-1/2 mr-20">
        <div className="absolute w-80 top-5 left-5 z-10">
          <Image src="/images/img-testimonial.png" width={300} height={400} />
        </div>
        <div className="absolute w-80 top-0 left-0">
          <Image
            src="/images/img-frame-testimonial.png"
            width={300}
            height={400}
          />
        </div>
      </div>
      {/* pesan testimonial */}
      <div className="mt-20">
        <h1 className="font-poppins-medium text-primary text-2xl">
          Happy Family
        </h1>
        <div className="flex mt-10">
          <Image src="/icons/ic_star.svg" width={36} height={36} />
          <Image src="/icons/ic_star.svg" width={36} height={36} />
          <Image src="/icons/ic_star.svg" width={36} height={36} />
          <Image src="/icons/ic_star.svg" width={36} height={36} />
          <Image src="/icons/ic_star.svg" width={36} height={36} />
        </div>
        <p className="font-poppins-regular text-3xl text-primary my-3">
          What a great trip with my family and I should try again next time
          soon...
        </p>
        <p className="font-poppins-light text-lg text-secondary mb-14">
          Angga, Product Designer
        </p>
        <ButtonSubmit isPrimary title="Read Their Story" route="/" />
      </div>
    </div>
  );
}
