import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { paginationRange } from "@/utils/pagination";

interface IPaginationProps {
  totalLength: number;
  limit: number;
  page: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface IPagesProps {
  totalLength: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const Pages: React.FC<IPagesProps> = ({
  totalLength,
  limit,
  page,
  setPage,
}) => {
  let totalPage = Math.ceil(totalLength / limit);

  let pagesNumber = paginationRange(totalPage, page, limit, 1);

  return (
    <ul className={"list-none items-center gap-[20px] hidden md:flex"}>
      {pagesNumber.map((number: string | number, idx: number) => {
        return (
          <li
            key={`number${idx}`}
            onClick={() => {
              if (number === "...") {
                return;
              }
              setPage(number as number);
            }}
            className={`cursor-pointer text-xs ${
              page === number &&
              "bg-[#213f7d1a] w-[25px] h-[20px] flex items-center justify-center rounded-sm "
            }`}
          >
            {number}
          </li>
        );
      })}
    </ul>
  );
};

const Pagination: React.FC<IPaginationProps> = ({
  totalLength,
  limit,
  setLimit,
  page,
  setPage,
}) => {
  const showLimitHandler = (number: number) => {
    setLimit(number);
  };

  return (
    <div className="h-[70px] flex items-center justify-between px-4">
      <div className={"flex items-center"}>
        <p className="hidden md:block text-sm">Rows per page:</p>
        <span className="flex gap-4 ml-4">
          <button
            className={`h-[20px] w-[25px] text-xs rounded-sm flex items-center justify-center ${
              limit === 10 && "bg-[#213f7d1a] font-bold"
            }`}
            onClick={() => {
              showLimitHandler(10);
            }}
          >
            10
          </button>
          <button
            className={`h-[20px] w-[25px] text-xs rounded-sm flex items-center justify-center ${
              limit === 20 && "bg-[#213f7d1a] font-bold"
            }`}
            onClick={() => {
              showLimitHandler(20);
            }}
          >
            20
          </button>
          <button
            className={`h-[20px] w-[25px] text-xs rounded-sm flex items-center justify-center ${
              limit === 40 && "bg-[#213f7d1a] font-bold"
            }`}
            onClick={() => {
              showLimitHandler(40);
            }}
          >
            40
          </button>
        </span>{" "}
      </div>{" "}
      <div className={"flex items-center gap-[10px]"}>
        <button
          className={
            "outline-none  text-[#213f7d] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer font-bold"
          }
          onClick={() => {}}
        >
          <ChevronLeft size={20} />
        </button>
        <Pages
          totalLength={totalLength}
          limit={limit}
          page={page}
          setPage={setPage}
        />{" "}
        <button
          className={
            "outline-none text-[#213f7d] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer font-bold"
          }
          onClick={() => {}}
        >
          <ChevronRight size={20} />
        </button>
      </div>{" "}
    </div>
  );
};

export default Pagination;
