import { ReactNode } from "react";
import { Navbar, Footer } from "../../Organism";

interface LayoutInterFace {
  children: ReactNode;
  isCenterTitle?: boolean;
}

export default function GlobalTemplate(props: LayoutInterFace) {
  const { children, isCenterTitle = false } = props;
  return (
    <>
      <Navbar isCenterTitle={isCenterTitle} />
      <div className="px-44">{children}</div>
      {!isCenterTitle && <Footer />}
    </>
  );
}
