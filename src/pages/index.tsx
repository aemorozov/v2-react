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
      <h1>Hello, I am Aleksei</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt!</p>
    </MainLayout>
  );
};

export default HelloBlock;
