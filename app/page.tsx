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
    <main className="relative flex  flex-col font-[sans-serif] min-h-[150vh]">
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
