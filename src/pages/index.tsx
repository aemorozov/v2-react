import Link from "next/link";
import Head from "next/head";
import MainLayout from "@/components/MainLayout";

const HelloBlock = () => {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="aemorozov, Armenia, web sites, development, react, next.js, wordpress" />
        <meta name="description" content="aemorozov frontend and wordpress specialist" />
      </Head>
      <h1 className="w-fit mx-auto mt-20">Hello, I am Aleksei</h1>
      <div className="w-fit mx-auto mt-2">
        <Link href={"./"} className="w-fit mx-10 mt-2">
          Home
        </Link>
        <Link href={"./projects"} className="w-fit mx-10 mt-2">
          Projects
        </Link>
        <Link href={"./about"} className="w-fit mx-10 mt-2">
          About
        </Link>
      </div>
      <p className="w-fit mx-auto mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt!</p>
    </MainLayout>
  );
};

export default HelloBlock;
