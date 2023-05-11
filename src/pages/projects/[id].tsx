import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <h1 className="w-fit mx-auto mt-20">Post {router.query.id}</h1>;
    </MainLayout>
  );
};

export default Post;
