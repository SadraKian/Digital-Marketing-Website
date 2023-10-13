import React, { Dispatch, SetStateAction } from "react";

const Pagination = ({
  count,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  let pageNumbers: number[] = [];
  for (let i = 1; i <= count; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {pageNumbers.length > 1 && (
        <section className="flex gap-5 mt-10">
          {pageNumbers.map((number) => (
            <button
              onClick={() => setCurrentPage(number)}
              key={number}
              className={`${
                currentPage == number
                  ? "bg-[#72EDF2]  font-semibold"
                  : "bg-gradient-to-br from-[#72EDF2] to-[#5151E5] "
              } w-10 h-10 rounded-md hover:scale-105 transition-all ease-in duration-300 text-white`}
            >
              {number}
            </button>
          ))}
        </section>
      )}
    </>
  );
};

export default Pagination;
