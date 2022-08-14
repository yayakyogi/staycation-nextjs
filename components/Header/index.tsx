import Link from "next/link";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className="p-5 shadow-lg">
      <ul className={style.menu}>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
