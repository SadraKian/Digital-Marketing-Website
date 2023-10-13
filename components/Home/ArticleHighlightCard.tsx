"use client";
import Image from "next/image";
import { useContext } from "react";
import { themeContext } from "../shared/Providers";
import { useFormatDate } from "@/hooks";
type ArticleCardProps = {
  article: Article;
  showArticle: boolean;
};
const ArticleHighlightCard = ({ article, showArticle }: ArticleCardProps) => {
  const { title, intro, imageSrc } = article;

  // Calling custom hook to format the date

  const { isThemeDark } = useContext(themeContext);

  return (
    <article className="relative flex flex-col lg:flex-row items-center">
      <Image
        src={imageSrc}
        alt={title}
        title={title}
        width="275"
        height="275"
        className={`${
          showArticle ? "opacity-100 scale-100 " : "opacity-0 scale-125 "
        } relative w-[225px] h-[225px] sm:w-[300px] sm:h-[225px] md:w-[375px] md:h-[275px] lg:w-[450px] lg:h-[350px] xl:w-[750px] xl:h-[300px] -top-32 lg:top-0 lg:right-24 rounded-2xl  transition-all ease-in duration-200  drop-shadow-[3px_20px_25px_rgb(0,0,0)]`}
      />
      <div
        className={`${
          showArticle
            ? "opacity-100 -top-16 lg:top-0 transition-all ease-in duration-300"
            : "opacity-0 top-[10%] lg:top-[15%]"
        } relative lg:right-10 flex flex-col gap-3 lg:gap-5 items-center w-full `}
      >
        <h6 className="sm:text-xl font-semibold">{title}</h6>
        <span
          className={`sm:text-xl relative text-lg font-semibold  ${
            isThemeDark ? "text-gray-400" : "text-gray-700"
          }`}
        >
          10 Mehr 1402
        </span>
        <p className="text-sm md:text-base leading-7 p-3 font-semibold">
          {intro}
        </p>
        <button
          className={`${
            isThemeDark
              ? "bg-[#62A0FF] hover:bg-[#4881d6] text-gray-700"
              : "bg-gradient-to-r from-blue-600 to-blue-500 text-gray-100 hover:brightness-125"
          } text-sm font-semibold  md:font-bold   w-28 h-10  md:w-32 md:h-12 rounded-full self-start transition-all ease-in duration-200`}
        >
          Read More
        </button>
      </div>
    </article>
  );
};

export default ArticleHighlightCard;
