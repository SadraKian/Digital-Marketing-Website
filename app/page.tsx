import { Footer, Header, Hero, Services } from "@/components";

export default function Home() {
  return (
    <main className="relative flex min-h-[300vh] flex-col font-[sans-serif] body-background text-white">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
