import MainLayout from "@/components/MainLayout";
import Router from "next/router";

const About = () => {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <div>
        <button onClick={() => Router.push("./")}>Go to Home</button>
      </div>
    </MainLayout>
  );
};

export default About;
