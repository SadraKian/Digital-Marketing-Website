"use client";
import { themeContext } from "@/components/shared/Providers";
import { useContext } from "react";

const Loading = () => {
  const { isThemeDark } = useContext(themeContext);
  const numberOfSpans = 20;
  const angles = Array.from(
    { length: numberOfSpans },
    (_, index) => (360 / numberOfSpans) * index
  );

  let theme = isThemeDark
    ? {
        background:
          "linear-gradient(to bottom left, #454b53 0%,#21272f 30%,#161c24 100%)",
      }
    : {
        backgroundImage: "linear-gradient(225deg,  #bfdad6, #d6eae1)",
      };

  return (
    <section
      style={theme}
      className="grid pl-28 place-content-center min-h-screen w-screen "
    >
      <div className="loader">
        {angles.map((angle, index) => (
          <span
            key={index}
            className="loader-span"
            style={{
              transform: `rotate(${angle}deg) translate(80px) rotate(-${angle}deg)`,
              animationDelay: `${index * 0.1}s`,
              opacity: `${index * 0.03}`,
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Loading;
