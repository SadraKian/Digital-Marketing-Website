"use client";
import { API } from "../../Constants";
import { useContext, useState, useEffect } from "react";
import { themeContext } from "../shared/Providers";
import {
  BlogCard,
  BlogCategories,
  ErrorMsg,
  Footer,
  Header,
  LoadingRequset,
} from "..";
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

        setPageCount(resp.data.count);
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
        background:
          "linear-gradient(to bottom left, #454b53 0%,#21272f 30%,#161c24 100%)",
      }
    : {
        color: "black",
        backgroundColor: "#f7ffff",
        backgroundImage: "linear-gradient(225deg,  #bfdad6, #d6eae1)",
      };
  return (
    <section style={theme} className={`flex flex-col  min-h-screen `}>
      <BlogCategories />
      {isLoading && (
        <div className="w-screen h-screen flex justify-center items-center pt-40 pl-24 2xl:pl-[110px]">
          <LoadingRequset />
        </div>
      )}
      {isSucssesful && data.length > 0 && (
        <section className=" px-3 sm:px-5 md:px-7 lg:px-10 flex flex-col items-center gap-7 mt-40 mb-28">
          <h4 className="font-bold text-3xl  w-[87%] text-center lg:text-left">
            Articles
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-center">
            {pageCount >= 1 &&
              data.map((blog: any) => <BlogCard key={blog.id} blog={blog} />)}
          </div>
          {pageCount > 1 && currentPage && (
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
