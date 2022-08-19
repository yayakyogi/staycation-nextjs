import { Title } from "../../Atom";

export default function Footer() {
  return (
    <>
      <div className="px-44 pt-14 mb-16 flex justify-between items-start border-t-slate-100 border-t-2">
        {/* title */}
        <div>
          <Title />
          <div className="w-80 mt-3">
            <span className="font-poppins-light text-base text-secondary">
              We kaboom your beauty holiday instantly and memorable.
            </span>
          </div>
        </div>
        {/* menu 1 */}
        <div className="w-1/4">
          <h1 className="font-poppins-medium text-primary text-base mb-3">
            For Beginners
          </h1>
          <p className="font-poppins-light text-secondary text-base mb-1">
            New Account
          </p>
          <p className="font-poppins-light text-secondary text-base mb-1">
            Start Booking a Room
          </p>
          <p className="font-poppins-light text-secondary text-base mb-1">
            Use Payments
          </p>
        </div>
        {/* menu 2 */}
        <div className="w-1/4">
          <h1 className="font-poppins-medium text-primary text-base mb-3">
            Explore Us
          </h1>
          <p className="font-poppins-light text-secondary text-base mb-1">
            Our Careers
          </p>
          <p className="font-poppins-light text-secondary text-base mb-1">
            Privacy
          </p>
          <p className="font-poppins-light text-secondary text-base mb-1">
            Terms & Conditions
          </p>
        </div>
        {/* menu 3 */}
        <div className="w-1/4">
          <h1 className="font-poppins-medium text-primary text-base mb-3">
            Connect Us
          </h1>
          <p className="font-poppins-light text-secondary text-base mb-1">
            support@staycation.id
          </p>
          <p className="font-poppins-light text-secondary text-base mb-1">
            021 - 2208 - 1996
          </p>
          <p className="font-poppins-light text-secondary text-base mb-1">
            Staycation, Kemang, Jakarta
          </p>
        </div>
      </div>
      <p className="font-poppins-light text-base text-secondary text-center my-10">
        Copyright 2019 • All rights reserved • Staycation
      </p>
    </>
  );
}
