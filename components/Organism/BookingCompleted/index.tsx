import Image from "next/image";
import { ButtonSubmit } from "../../Atom";

export default function BookingCompleted() {
  return (
    <div className="w-96 mx-auto my-12 text-center">
      <h1 className="font-poppins-semibold text-4xl text-primary mb-8">
        Yay! Completed
      </h1>
      <div className="mb-5">
        <Image src="/images/img-completed.png" width={280} height={280} />
      </div>
      <p className="font-poppins-light text-lg text-secondary mb-8">
        We will inform you via email later once the transaction has been
        accepted
      </p>
      <div className="w-64 mx-auto">
        <ButtonSubmit isPrimary title="Back to Home" route="/" />
      </div>
    </div>
  );
}
