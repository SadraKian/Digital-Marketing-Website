import { Footer, Header, Post, Providers, Settings } from "@/components";

const BlogPost = () => {
  return (
    <section className="w-screen min-h-screen flex  justify-center">
      <Providers>
        <Settings />
        <Header />
        <Post />
        <Footer top="" />
      </Providers>
    </section>
  );
};

export default BlogPost;
