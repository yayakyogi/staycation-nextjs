import { ReactNode } from "react";
import { Header } from "../Molecul";
import { Footer } from "../Organism";

interface LayoutInterFace {
  children: ReactNode;
}

export default function Layout(props: LayoutInterFace) {
  const { children } = props;
  return (
    <>
      <Header isCenterTitle={false} />
      {children}
      <Footer />
    </>
  );
}
