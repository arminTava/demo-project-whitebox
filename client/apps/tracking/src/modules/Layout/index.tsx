import { ReactNode } from "react";

import { Footer } from "modules/Footer";
import { Header } from "modules/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header></Header>
      <main className="grow">{children}</main>
      <Footer></Footer>
    </>
  );
};
