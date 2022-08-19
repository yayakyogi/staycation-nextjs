import { ReactNode } from "react";
import { Navbar, Footer } from "../Organism";

interface LayoutInterFace {
  children: ReactNode;
}

export default function Layout(props: LayoutInterFace) {
  const { children } = props;
  return (
    <>
      <Navbar isCenterTitle={false} />
      <div className="px-44">{children}</div>
      <Footer />
    </>
  );
}
