import { ButtonLink, Title } from "../../Atom";

interface NavbarInterface {
  isCenterTitle: Boolean;
}

export default function Navbar({ isCenterTitle }: NavbarInterface) {
  return (
    <div
      className={`shadow flex items-center px-44 py-5 ${
        isCenterTitle ? "justify-center" : "justify-between"
      }`}
    >
      <Title />
      {!isCenterTitle && (
        <div className="flex">
          <ButtonLink route="/" title="Home" />
          <ButtonLink route="/blog" title="Browse by" />
          <ButtonLink route="/user" title="Stories" />
          <ButtonLink route="/user" title="Agents" />
        </div>
      )}
    </div>
  );
}
