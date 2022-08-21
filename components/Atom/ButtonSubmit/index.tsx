import Link from "next/link";

interface ButtonSubmitProps {
  isPrimary: boolean;
  title: string;
  route?: any;
  onClick?: void | Function | any;
  isButtonSubmit?: boolean;
}

export default function ButtonSubmit(props: ButtonSubmitProps) {
  const { isPrimary, title, route, onClick, isButtonSubmit = false } = props;

  if (isButtonSubmit) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`w-full px-8 py-3 text-base font-poppins-medium ${
          isPrimary
            ? "bg-primary text-white shadow-lg shadow-blue-200"
            : "bg-secondary text-primary"
        }`}
      >
        {title}
      </button>
    );
  }

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
