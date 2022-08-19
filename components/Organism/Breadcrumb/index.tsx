import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div className="my-12 flex justify-between items-center">
      {/* breadcrumb */}
      <div className="w-72 flex">
        <Link href="/">
          <p className="font-poppins-light text-lg text-secondary hover:cursor-pointer">
            Home
          </p>
        </Link>
        <p className="font-poppins-light text-lg text-secondary mx-5">/</p>
        <p className="font-poppins-medium text-lg text-primary">
          House Details
        </p>
      </div>
      {/* title page */}
      <div className="text-center">
        <h1 className="font-poppins-semibold text-4xl text-primary mb-2">
          Village Angga
        </h1>
        <span className="font-poppins-light text-lg text-secondary">
          Bogor, Indonesia
        </span>
      </div>
      <div className="w-72" />
    </div>
  );
}
