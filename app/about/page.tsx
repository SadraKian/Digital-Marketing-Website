"use client";
import { AboutHero, ContactUs, Footer, Header, Settings } from "@/components";
import Providers, { themeContext } from "@/components/shared/Providers";
import { useContext } from "react";
const page = () => {
  const { isThemeDark, presets } = useContext(themeContext);
  let theme = isThemeDark
    ? {
        color: "white",
      }
    : {
        color: "black",
      };
  return (
    <Providers>
      <main style={theme} className="flex flex-col pt-24 items-center">
        <Settings />
        <Header />
        <AboutHero />
        <ContactUs />
        <Footer top="" />
      </main>
    </Providers>
  );
};

export default page;
