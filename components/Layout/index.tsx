import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutInterFace {
  children: ReactNode;
}

export default function Layout(props: LayoutInterFace) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
