import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title: string;
}


const Layout = ({ children, title }: LayoutProps) => {
  return (
    <main>
      <h1>{title}</h1>
      <div className="inner">{children}</div>
    </main>
  );
};

export default Layout;
