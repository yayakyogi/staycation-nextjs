import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonLinkProps {
  title: String;
  route: any;
}

export default function ButtonLink(props: ButtonLinkProps) {
  const { title, route } = props; // props
  const router = useRouter(); // untuk mengambil pathname

  return (
    <Link href={route}>
      <span
        className={`text-sm font-poppins-regular cursor-pointer px-5 ${
          router.pathname === route && "text-active"
        }`}
      >
        {title}
      </span>
    </Link>
  );
}
