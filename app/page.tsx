import { Header, Hero, Services } from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-[300vh] flex flex-col font-[sans-serif] body-background text-white">
      <Header />
      <Hero />
      <Services />
    </main>
  );
}
