import {
  BlogCategories,
  Footer,
  Header,
  Providers,
  Settings,
} from "@/components";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <Settings />
      <div className="w-screen flex flex-col items-center pt-28 sm:pt-32 lg:pt-36 2xl:pt-40 gap-12 ">
        <BlogCategories />
        {children}
      </div>
      <Footer top="top-[30vh]" />
    </Providers>
  );
}
