import { MainProps } from "@/interfaces/interfaces";

const MainLayout = ({ children }: MainProps) => {
  return (
    <>
      <div className="page">
        <nav className="navigation">Navigation</nav>
        <main className="content">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
