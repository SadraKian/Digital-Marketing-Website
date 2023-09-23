"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useContext } from "react";
import { FaGithub, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

import { themeContext } from "../shared/Providers";
const Hero = () => {
  let { isThemeDark, presets } = useContext(themeContext);
  let theme = isThemeDark
    ? {
        color: "white",
        background:
          "linear-gradient(to bottom left, #454b53 0%,#21272f 30%,#161c24 100%)",
      }
    : {
        color: "black",
        backgroundColor: "#f7ffff",
        backgroundImage: "linear-gradient(225deg,  #bfdad6, #d6eae1)",
      };

  const heroRef = useRef<HTMLElement | null>(null);

  // The state to set hero section position to fixed for small devices
  const [heroFixed, setHeroFixed] = useState(false);

  // Adding an event listener inside a useEffect for finding out each time the page gets resized
  useEffect(() => {
    // Handling scroll behavior and position for hero section on devices with the screen under 720
    const handleHeroScroll = (positionToGetHeroFixed: number) => {
      if (window.innerHeight < 720) {
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
      if (heroRef.current) {
        let heroTop = heroRef.current.offsetTop;
        let heroBottom = heroTop + heroRef.current.offsetHeight;
        let positionToGetHeroFixed = heroBottom - window.innerHeight;
        handleHeroScroll(positionToGetHeroFixed);
        if (positionToGetHeroFixed > 0) {
          window.addEventListener("scroll", () => {
            handleHeroScroll(positionToGetHeroFixed);
          });
          return () =>
            removeEventListener("scroll", () => {
              handleHeroScroll(positionToGetHeroFixed);
            });
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
      style={theme}
      id="hero-section"
      ref={heroRef}
      className={`${
        heroFixed ? `fixed bottom-0` : ""
      } tall:fixed flex min-h-screen w-full pt-[15vh]  tall:top-0 landscape:pt-24`}
    >
      <div
        id="heroTextContent"
        className="flex flex-col gap-12 sm:gap-[70px] xtall:gap-20 3xl:gap-28  w-full items-center md2:items-start md:px-20 py-[5vh] md2:w-1/2 z-10"
      >
        <div className="flex flex-col md:flex flex-wrap md2:items-start w-[300px] gap-5 items-center text-4xl xsm:text-5xl font-bold ">
          <span className="drop-shadow-[1px_1px_1px_lightgray]">
            Welcome to
          </span>
          <div className="flex flex-col gap-5 md2:flex-row items-center md2:gap-2">
            <span className="drop-shadow-[1px_1px_1px_lightgray]">Rasam</span>
            <span
              style={{
                color: presets[1],
                textShadow: `2px 2px 4px ${presets[1]}`,
              }}
            >
              Website
            </span>
          </div>
        </div>

        <p className="w-5/6 xsm:text-lg font-semibold text-center  md2:text-left">
          Join us to unlock online success. We specialize in crafting impactful
          strategies, compelling content, and innovative campaigns to drive your
          success.
        </p>

        <button
          style={{
            backgroundColor: presets[1],
            boxShadow: `2px 3px 10px 0px ${presets[1]}`,
          }}
          className=" transition-all text-white ease-in hover:opacity-80 duration-300 font-semibold text-lg  w-28 h-11 rounded-lg
          "
        >
          Start
        </button>

        <div className="flex flex-col gap-6 items-center md2:items-start">
          <span
            style={{
              color: presets[1],
              textShadow: `1px 1px 2px ${presets[1]}`,
            }}
            className=" font-semibold ml-3"
          >
            AVAILABLE FOR
          </span>
          <div className="flex gap-3 ">
            <Link
              href=""
              className={`${
                isThemeDark
                  ? "bg-slate-400 text-slate-900"
                  : "bg-slate-900 text-gray-100"
              } w-12 h-12 grid place-content-center text-2xl rounded-full  hover:bg-green-500 hover:drop-shadow-[0_3px_4px_rgb(34,197,94)] transition-all ease-in duration-300`}
            >
              <FaWhatsapp className=" opacity-80" />
            </Link>
            <Link
              href=""
              className={`${
                isThemeDark
                  ? "bg-slate-400 text-slate-900"
                  : "bg-slate-900 text-gray-100"
              } w-12 h-12 grid place-content-center text-2xl rounded-full  hover:bg-gradient-to-br from-orange-500 to-yellow-500 hover:drop-shadow-[0_1px_2px_yellow] transition-all ease-in duration-300`}
            >
              <FaInstagram className=" opacity-80" />
            </Link>
            <Link
              href=""
              className={`${
                isThemeDark
                  ? "bg-slate-400 text-slate-900"
                  : "bg-slate-900 text-gray-100"
              } w-12 h-12 grid place-content-center text-2xl rounded-full   hover:bg-red-600 hover:drop-shadow-[0_2px_3px_rgb(239,68,68)] transition-all ease-in duration-300`}
            >
              <FaYoutube className=" opacity-80" />
            </Link>
            <Link
              href=""
              className={`${
                isThemeDark
                  ? "bg-slate-400 text-slate-900"
                  : "bg-slate-900 text-gray-100"
              } w-12 h-12 grid place-content-center text-2xl rounded-full  hover:bg-purple-600 hover:drop-shadow-[0_3px_4px_rgb(147,51,234)] transition-all ease-in duration-300`}
            >
              <FaGithub className=" opacity-80" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden  md2:flex object-contain pt-8 lg:pt-0 w-1/2 h-[50vh] justify-start 2xl:h-[60vh] items-center">
        <Image
          src={`${
            isThemeDark
              ? "/assets/images/heroImage.png"
              : "/assets/images/heroImage.png"
          }`}
          alt="Hero Image"
          width="1380"
          height="920"
          className={`${
            isThemeDark
              ? "opacity-50 min-w-[400px] max-w-[600px]"
              : "  lg:mt-32 min-w-[475px] min-h-[650]"
          } w-4/5 mt-32 lg:mt-14  `}
        />
      </div>
    </section>
  );
};

export default Hero;
