"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

import { FaGithub, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  // The state to set hero section position to fixed for small devices
  const [heroFixed, setHeroFixed] = useState(false);

  // Adding an event listener inside a useEffect for finding out each time the page gets resized
  useEffect(() => {
    // Handling scroll behavior and position for hero section on devices with the screen under 780
    const handleHeroScroll = (positionToGetHeroFixed: number) => {
      if (window.innerHeight < 780) {
        if (heroRef.current) {
          const scrollY = window.scrollY;

          if (scrollY >= positionToGetHeroFixed) {
            setHeroFixed(true);
          } else if (scrollY < positionToGetHeroFixed) {
            setHeroFixed(false);
          }
        }
      }
    };

    // Getting hero insets and position to get hero fixed on small devices each time the page gets resized or gets scrolled and calling an event listener for scrolling the page in function bellow

    const handleHeroPosition = () => {
      setHeroFixed(false);
      let heroTop: number;
      let heroBottom: number;
      let positionToGetHeroFixed: number;
      if (heroRef.current) {
        heroTop = heroRef.current.offsetTop;
        heroBottom = heroTop + heroRef.current.offsetHeight;

        positionToGetHeroFixed = heroBottom - window.innerHeight;

        if (window.innerHeight < 780) {
          window.addEventListener("scroll", () => {
            handleHeroScroll(positionToGetHeroFixed);
          });
        } else {
          setHeroFixed(false);
        }
      }
    };

    handleHeroPosition();

    // Adding an event listener so every time the page gets resized the fixed position of hero section gets modified

    window.addEventListener("resize", () => {
      setHeroFixed(false);
      handleHeroPosition();
    });

    return () =>
      window.removeEventListener("resize", () => {
        setHeroFixed(false);
        handleHeroPosition();
      });
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className={`${
        heroFixed ? `fixed bottom-0` : ""
      } tall:fixed flex min-h-screen w-full pt-[15vh] text-white tall:top-0 landscape:pt-24 hero-background `}>
      <div
        id="heroTextContent"
        className="flex flex-col gap-12 sm:gap-[70px] 2xl:gap-28  w-full items-center md2:items-start md:px-20 py-[5vh] md2:w-1/2 z-10">
        <div className="flex flex-col md:flex flex-wrap md2:items-start w-[300px] gap-5 items-center text-4xl xsm:text-5xl font-bold ">
          <span className="drop-shadow-[1px_1px_1px_lightgray]">
            Welcome to
          </span>
          <div className="flex flex-col gap-5 md2:flex-row items-center md2:gap-2">
            <span className="drop-shadow-[1px_1px_1px_lightgray]">Rasam</span>
            <span className="text-primary drop-shadow-[2px_8px_8px_rgb(0,171,85,0.8)]">
              Website
            </span>
          </div>
        </div>

        <p className="w-5/6 xsm:text-lg font-semibold text-center  md2:text-left">
          Join us to unlock online success. We specialize in crafting impactful
          strategies, compelling content, and innovative campaigns to drive your
          success.
        </p>

        <button className="transition-all ease-in hover:opacity-80 duration-300 font-semibold text-lg bg-primary w-28 h-11 rounded-lg hover:drop-shadow-[2px_12px_12px_rgb(0,171,85,0.5)] drop-shadow-[0px_7px_7px_rgb(0,171,85,0.5)]">
          Start
        </button>

        <div className="flex flex-col gap-6 items-center md2:items-start">
          <span className=" text-primary font-semibold ml-3">
            AVAILABLE FOR
          </span>
          <div className="flex gap-3 ">
            <Link
              href=""
              className="bg-slate-400 w-12 h-12 grid place-content-center text-2xl rounded-full  hover:bg-green-500 hover:drop-shadow-[0_3px_4px_rgb(34,197,94)] transition-all ease-in duration-300">
              <FaWhatsapp className="text-slate-900 opacity-80" />
            </Link>
            <Link
              href=""
              className="bg-slate-400 w-12 h-12 grid place-content-center text-2xl rounded-full  hover:bg-gradient-to-br from-orange-300 to-yellow-400 hover:drop-shadow-[0_1px_2px_yellow] transition-all ease-in duration-300">
              <FaInstagram className="text-slate-900 opacity-80" />
            </Link>
            <Link
              href=""
              className="bg-slate-400 w-12 h-12 grid place-content-center text-2xl rounded-full   hover:bg-red-500 hover:drop-shadow-[0_3px_4px_rgb(239,68,68)] transition-all ease-in duration-300">
              <FaYoutube className="text-slate-900 opacity-80" />
            </Link>
            <Link
              href=""
              className="bg-slate-400 w-12 h-12 grid place-content-center text-2xl rounded-full  hover:bg-purple-600 hover:drop-shadow-[0_3px_4px_rgb(147,51,234)] transition-all ease-in duration-300">
              <FaGithub className="text-slate-900 opacity-80" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden  md2:flex object-contain pt-8 lg:pt-0 w-1/2 h-[50vh] justify-start 2xl:h-[60vh] items-center">
        <Image
          src="/assets/images/heroImage.png"
          alt="Hero Image"
          width="1380"
          height="920"
          className="w-4/5 mt-32 lg:mt-14 min-w-[400px] max-w-[600px] opacity-40"
        />
      </div>
    </section>
  );
};

export default Hero;
