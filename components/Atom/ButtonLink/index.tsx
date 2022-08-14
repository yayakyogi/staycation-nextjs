import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonLinkInterface {
  title: String;
  route: any;
}

export default function ButtonLink(props: ButtonLinkInterface) {
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
