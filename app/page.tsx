import {
  Footer,
  Header,
  Hero,
  Services,
  Settings,
  Providers,
} from "@/components";

export default function Home() {
  return (
    <main className="relative flex  flex-col font-[sans-serif] ">
      <Providers>
        <Settings />
        <Header />
        <Hero />
        <Services />
        <Footer />
      </Providers>
    </main>
  );
}
