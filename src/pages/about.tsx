import MainLayout from "@/components/MainLayout";
import Router from "next/router";

const About = () => {
  return (
    <MainLayout>
      <h1 className="w-fit mx-auto mt-20">About Page</h1>
      <div className="w-fit mx-auto mt-20">
        <button onClick={() => Router.push("./")}>Go to Home</button>
      </div>
    </MainLayout>
  );
};

export default About;
