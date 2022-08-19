import Link from "next/link";

interface ButtonSubmitProps {
  isPrimary: Boolean;
  title: String;
  route: any;
}

export default function ButtonSubmit(props: ButtonSubmitProps) {
  const { isPrimary, title, route } = props;
  return (
    <Link href={route}>
      <button
        type="button"
        className={`w-full px-8 py-3 text-base font-poppins-medium ${
          isPrimary
            ? "bg-primary text-white shadow-lg shadow-blue-200"
            : "bg-secondary text-primary"
        }`}
      >
        {title}
      </button>
    </Link>
  );
}
