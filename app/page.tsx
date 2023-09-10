import { Header, Hero, Services } from "@/components";

export default function Home() {
  return (
    <main className="relative  flex flex-col body-background text-white">
      <Header />
      <Hero />
      <Services />
    </main>
  );
}
