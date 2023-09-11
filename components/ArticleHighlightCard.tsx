import Image from "next/image";
import React from "react";

type ArticleCardProps = {
  article: Article;
  showArticle: boolean;
};

const ArticleHighlightCard = ({ article, showArticle }: ArticleCardProps) => {
  const { title, intro, date, imageSrc } = article;

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
        } relative w-[250px] h-[250px] sm:w-[300px] sm:h-[225px] md:w-[375px] md:h-[275px] lg:w-[450px] lg:h-[350px] xl:w-[750px] xl:h-[300px] -top-32 lg:top-0 lg:right-24 rounded-2xl  transition-all ease-in duration-200  drop-shadow-[3px_20px_25px_rgb(0,0,0)]`}
      />
      <div
        className={`${
          showArticle
            ? "opacity-100 -top-12 lg:top-0 transition-all ease-in duration-[400ms]"
            : "opacity-0 top-[10%] lg:top-[13%]"
        } relative lg:right-10 flex flex-col gap-5 items-center w-full `}>
        <h6 className="sm:text-xl font-semibold">{title}</h6>
        <span className="sm:text-xl relative text-lg font-semibold text-gray-400">
          {date}
        </span>
        <p className="leading-7 p-3">{intro}</p>
        <button className="  font-bold text-gray-700 bg-[#62A0FF] hover:bg-[#4881d6] w-32 h-12 rounded-lg transition-all ease-in duration-200">
          Read More
        </button>
      </div>
    </article>
  );
};

export default ArticleHighlightCard;
