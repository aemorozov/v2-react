import { MainProps } from "@/interfaces/interfaces";
import Link from "next/link";
import Image from "next/image";
import Logo from "../img/aemorozov.webp";

const MainLayout = ({ children }: MainProps) => {
  return (
    <>
      <div className="page">
        <nav className="navigation">
          <Image src={Logo} width={200} height={200} alt="aemorozov" className="mx-auto my-5" />
          <Link href={"./"} className="navigation-link">
            Home
          </Link>
          <Link href={"./projects"} className="navigation-link">
            Projects
          </Link>
          <div className="navigation-projects">
            <Link href={"./about"} className="navigation-link">
              Project 1
            </Link>
            <Link href={"./about"} className="navigation-link">
              Project 2
            </Link>
            <Link href={"./about"} className="navigation-link">
              Project 3
            </Link>
            <Link href={"./about"} className="navigation-link">
              Project 4
            </Link>
          </div>
          <Link href={"./about"} className="navigation-link">
            About
          </Link>
        </nav>
        <main className="content">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
