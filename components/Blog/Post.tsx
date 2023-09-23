import { useFormatDate } from "@/hooks";
import Image from "next/image";

const Post = ({ post, isThemeDark, presets }: BlogPostProps) => {
  const { title, intro, date, imageSrc, categories, sections, conclusion } =
    post;
  // Calling the custom hook to format the article date
  const blogPostDate = useFormatDate(date);
  return (
    <article className="flex text-left flex-col w-5/6 gap-7 lg:gap-12 xl:gap-16 items-center max-w-[1440px]">
      <div className="flex flex-col gap-3 items-center">
        <h6
          className={`${
            isThemeDark ? "text-slate-400" : "text-slate-600"
          }  font-semibold text-[15px] sm:text-[17px] md:text-[18px] xl:text-[22px] `}
        >
          Published {blogPostDate}
        </h6>
        <h1
          className={`${
            isThemeDark ? "text-slate-100" : "text-slate-800"
          }   text-[20px] sm:text-[23px] md:text-[27px] lg:text-[32px] xl:text-[36px] font-extrabold`}
        >
          {title}
        </h1>
      </div>
      <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 flex-wrap w-full justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className={`bg-[#085973] text-white rounded-xl px-3 h-9 md:px-8 lg:px-10 sm:font-semibold text-center  whitespace-nowrap`}
          >
            {category}
          </button>
        ))}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width="750"
        height="500"
        className="rounded-2xl w-full lg:w-[95%] lg:h-[550px]"
      />

      <p
        id="blog-intro"
        className="font-[500] text-blue-100 text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] lg:px-10 2xl:px-12"
      >
        {intro}
      </p>
      <section className="flex flex-col self-start gap-9 md:gap-12 lg:gap-16 lg:px-10 2xl:px-12">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-5">
            <h6 className="text-[18px]  font-bold sm:text-[20px]">
              {section.section_title}
            </h6>
            <p className="sm:text-[17px] md:text-[18px] lg:text-[20px] sm:leading-8">
              {section.section_content}
            </p>
          </div>
        ))}
      </section>
      <p className="self-start sm:text-[17px] md:text-[18px] lg:text-[20px] sm:leading-8 lg:px-10 2xl:px-12">
        {conclusion}
      </p>
    </article>
  );
};

export default Post;
