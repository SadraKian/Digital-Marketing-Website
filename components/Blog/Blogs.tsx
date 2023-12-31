"use client";
import { API } from "../../Constants";
import { useContext, useState, useEffect } from "react";
import { themeContext } from "../shared/Providers";
import { BlogCard, ErrorMsg, LoadingRequset } from "..";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Pagination from "./Pagination";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSucssesful, setIsSucssesful] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const getArticles = useQuery({
    queryKey: ["get", "articles"],
    queryFn: async () => {
      try {
        setErrMsg("");
        setIsSucssesful(false);
        setIsLoading(true);
        const resp = await axios.get(
          `${API}/blog/articles?page_number=${currentPage}`
        );
        setIsSucssesful(true);
        setData(resp.data.results);

        const countOfPages = Math.ceil(resp.data.count / 10);
        setPageCount(countOfPages);
      } catch (error) {
        setErrMsg(`${error}`);
      } finally {
        setIsLoading(false);
      }
      return <></>;
    },
  });

  useEffect(() => {
    getArticles.refetch();
  }, [currentPage]);

  const { isThemeDark } = useContext(themeContext);
  let theme = isThemeDark
    ? {
        color: "white",
      }
    : {
        color: "black",
      };
  return (
    <section
      style={theme}
      className={`flex flex-col w-full  min-h-screen items-center gap-10`}>
      {isLoading && (
        <div className="w-screen h-screen flex justify-center   pl-24 2xl:pl-[110px]">
          <LoadingRequset />
        </div>
      )}
      {isSucssesful && data.length > 0 && (
        <section className=" px-3 sm:px-5 md:px-7 lg:px-10 w-full flex flex-col items-center gap-7  mb-28">
          <h4 className="font-bold text-3xl  w-[90%] text-center lg:text-left">
            Articles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full md:w-[90%] px-16 sm:pl-40 md:px-0 content-center place-content-center md:place-content-start gap-y-10  gap-x-7 xl:gap-x-10 xl:gap-y-14">
            {pageCount > 0 &&
              data.map((blog: any) => <BlogCard key={blog.id} blog={blog} />)}
          </div>
          {pageCount > 0 && currentPage && (
            <Pagination
              count={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </section>
      )}
      {errMsg !== "" && !isLoading && <ErrorMsg errMsg={errMsg} />}
    </section>
  );
};

export default Blogs;
