"use client";
import { articlesData } from "@/data/articles";
import { useState, useContext } from "react";
import { ArticleHighlightCard } from ".";
import { themeContext } from "./Providers";

const ArticlesHighlights = () => {
  const articles: Article[] = JSON.parse(articlesData);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(
    articles.length - 3
  );
  const [currentArticle, setCurrentArticle] = useState<Article>(
    articles[currentArticleIndex]
  );
  const [showArticle, setShowArticle] = useState(true);

  const handleClick = (index: number) => {
    setShowArticle(false);
    setTimeout(() => {
      setCurrentArticleIndex(index);
      setCurrentArticle(articles[index]);
      setShowArticle(true);
    }, 300);
  };

  const { isThemeDark } = useContext(themeContext);

  return (
    <section
      id="articlesHighlight-section"
      className="flex flex-col items-center w-full gap-40 lg:gap-16 py-9">
      <h3 className="text-white text-2xl sm:text-3xl font-bold ">
        Latest articles
      </h3>
      <div
        id="article-highlight-container"
        className={`${
          isThemeDark
            ? "bg-[#232931]"
            : "bg-gradient-to-bl from-blue-50 to-green-50"
        } flex flex-col lg:flex-row items-center justify-between p-5 lg:p-8  w-[90vw] sm:w-[75vw] md:w-[70vw] lg:w-5/6 xl:w-2/3 lg:min-h-[400px] rounded-lg my-7 gap-2 lg:gap-9`}>
        {currentArticle ? (
          <ArticleHighlightCard
            article={currentArticle as Article}
            showArticle={showArticle}
          />
        ) : (
          "Failed to get data"
        )}
        <nav
          aria-label="Articles highlights section nav"
          className="flex lg:flex-col gap-4 lg:gap-[10px]">
          {articles.map((article, index) => {
            if (index > articles.length - 4) {
              return (
                <button
                  key={article.id}
                  onClick={() => {
                    handleClick(index);
                  }}
                  className={`w-[13px] h-[13px] rounded-full transition-all ease-in duration-300 ${
                    currentArticleIndex == index
                      ? "bg-[#62A0FF] lg:h-9"
                      : "bg-gray-400"
                  }`}></button>
              );
            }
          })}
        </nav>
      </div>
    </section>
  );
};

export default ArticlesHighlights;
