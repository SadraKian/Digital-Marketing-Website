import Link from "next/link";
import { useContext } from "react";
import { themeContext } from "../shared/Providers";

const BlogCard = ({ blog }: any) => {
  const { title, category, image, slug } = blog;
  const { isThemeDark } = useContext(themeContext);
  return (
    <Link
      href={`/blog/post?slug=${slug}`}
      className={`${
        isThemeDark
          ? "bg-gradient-to-br from-[#72EDF2] to-[#5151E5]"
          : "bg-gradient-to-br from-[#92FFC0] to-[#002661]"
      } w-[275px] xl:w-[320px]
         text-white rounded-md flex flex-col gap-6 hover:brightness-125 transition-all ease-in duration-300`}>
      {image && (
        <img src={image} alt={title} className="w-full rounded-md h-[220px]" />
      )}
      <div className="w-full gap-2 flex flex-col p-5">
        <h1 className="text-lg font-bold">{title}</h1>
        <h2 className="text-sm text-blue-100">#{category}</h2>
      </div>
    </Link>
  );
};

export default BlogCard;
