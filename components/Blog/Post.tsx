"use client";
import { useFormatDate } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "@/Constants";
import { useSearchParams } from "next/navigation";
import { themeContext } from "../shared/Providers";
import { useContext, useState } from "react";
import { ErrorMsg, LoadingRequset } from "..";

const Post = () => {
  const searchParams = useSearchParams();
  const post = searchParams.get("slug");
  const [postData, setPostData] = useState<BlogDetails | null>();
  const [isSucssesful, setIsSucssesful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { isThemeDark } = useContext(themeContext);

  const getPost = useQuery({
    queryKey: ["get", "blogPost"],
    queryFn: async () => {
      try {
        setIsLoading(true);
        const resp = await axios.get(`${API}/blog/detail/${post}`);
        setIsSucssesful(true);
        setPostData(resp.data);
        console.log(resp.data);
      } catch (error: any) {
        setErrMsg(error);
      } finally {
        setIsLoading(false);
      }
      return <></>;
    },
  });
  getPost;
  return (
    <>
      {isLoading && (
        <div className="w-screen h-screen grid place-content-center pt-40 pl-20">
          <LoadingRequset />
        </div>
      )}
      {!isLoading && isSucssesful && postData && (
        <article className="flex  flex-col w-screen gap-7 lg:gap-12 xl:gap-16 items-center max-w-[1440px] min-h-screen pt-32 pb-32">
          <div className="flex flex-col gap-3 items-center">
            <h1
              className={`${
                isThemeDark ? "text-slate-100" : "text-slate-800"
              }   text-[20px] sm:text-[23px] 2xl:ml-24 md:text-[27px] lg:text-[32px] xl:text-[36px] font-extrabold`}
            >
              {postData.title}
            </h1>
            <h6
              className={`${
                isThemeDark ? "text-slate-400" : "text-slate-600"
              }  font-semibold text-[15px] sm:text-[17px] 2xl:ml-24 md:text-[18px] xl:text-[22px] `}
            >
              Published {useFormatDate(postData.created_at)}
            </h6>
          </div>
          {postData.image && (
            <img
              src={postData.image}
              alt={postData.title}
              className="rounded-2xl w-[95%] sm:w-[90%] lg:w-[85%] 2xl:ml-24 lg:h-[550px] 2xl:h-[600px]"
            />
          )}
          {postData.tag?.title && (
            <div className="w-[90%] sm:w-[85%] lg:w-[80%] 2xl:ml-16">
              <button
                type="button"
                className={`text-white rounded-xl self-start px-6 h-9 md:px-8 lg:px-10 font-semibold text-center bg-[#085973] whitespace-nowrap`}
              >
                #{postData.tag.title}
              </button>
            </div>
          )}
          <p
            className={`${
              !isThemeDark ? "text-black" : "text-white"
            }w-[90%] sm:w-[85%] lg:w-[80%] 2xl:ml-16  sm:text-[18px] lg:text-[20px] leading-8 md:leading-9 font-semibold space tracking-wide`}
          >
            {postData.text}
          </p>
        </article>
      )}
      {errMsg !== "" && !isLoading && <ErrorMsg errMsg={errMsg} />}
    </>
  );
};

export default Post;
