import Link from "next/link";

interface ButtonSubmitInterface {
  isPrimary: Boolean;
  title: String;
  route: any;
}

export default function ButtonSubmit(props: ButtonSubmitInterface) {
  const { isPrimary, title, route } = props;
  return (
    <Link href={route}>
      <button
        type="button"
        className={`px-8 py-2 text-base font-poppins-medium ${
          isPrimary
            ? "bg-primary text-white shadow-lg shadow-blue-100"
            : "bg-secondary text-primary"
        }`}
      >
        {title}
      </button>
    </Link>
  );
}
