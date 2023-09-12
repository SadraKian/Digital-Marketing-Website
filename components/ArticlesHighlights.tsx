"use client";
import articlesData from "@/data/articles";
import { useState } from "react";
import { ArticleHighlightCard } from ".";

const ArticlesHighlights = () => {
  const articles: Article[] = JSON.parse(articlesData);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
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

  return (
    <section
      id="articlesHighlight-section"
      className="flex flex-col items-center w-full gap-40 lg:gap-16 py-9">
      <h3 className="text-2xl sm:text-3xl font-bold ">Latest articles</h3>
      <div
        id="article-highlight-container"
        className="flex flex-col lg:flex-row items-center justify-between p-5 lg:p-8 bg-[#232931] w-[90vw] sm:w-[75vw] md:w-[70vw] lg:w-5/6 xl:w-3/4 2xl:w-1/2 lg:min-h-[400px] rounded-lg my-7 gap-2 lg:gap-9">
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
          {articles.map((article, index) => (
            <button
              key={article.id}
              onClick={() => {
                handleClick(index);
              }}
              className={`w-[13px] h-[13px] rounded-full transition-all ease-in duration-300 ${
                currentArticleIndex == index
                  ? "bg-[#62A0FF] lg:h-9"
                  : "bg-gray-300"
              }`}></button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default ArticlesHighlights;
