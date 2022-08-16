import { ReactNode } from "react";
import { Header, Footer } from "../Molecul";

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
