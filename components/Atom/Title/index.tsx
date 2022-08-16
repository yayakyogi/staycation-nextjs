import Link from "next/link";

export default function Title() {
  return (
    <Link href="/">
      <div>
        <span className="text-active font-poppins-medium text-xl">Stay</span>
        <span className="text-primary font-poppins-medium text-xl">
          Cation.
        </span>
      </div>
    </Link>
  );
}
