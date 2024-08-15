import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "@/services/home";
import Book from "@/components/Book";

const TopBooks = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["topBooks"],
    queryFn: () => getAllBooks(),
  });
  console.log(data);
  return (
    <div className="py-[6rem]">
      <p className="text-center font-light text-xs text-[#3c3c3c]">
        SOME BOOKS TO CHECK{" "}
      </p>
      <p className="text-center text-3xl text-[#3c3c3c] mt-[1em] font-bold">
        Most Read Books
      </p>
      {isFetching ? (
        <div className="grid grid-cols-4 gap-[6rem] justify-center px-[6rem] mt-[5rem]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="flex justify-center" key={index}>
              <div className="w-[280px] min-h-[450px] shrink-0 rounded-md bg-gray-100 animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-[6rem] justify-center px-[6rem] mt-[5rem]">
          {data?.items?.map((book: any) => (
            <div className="flex justify-center" key={book.id}>
              <Book book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBooks;
