import React from "react";
import { useSearch } from "@/store/useSearch";
import Book from "@/components/Book";
import { searchBooks } from "@/services/home";
import { useQuery } from "@tanstack/react-query";

const SearchResults = () => {
  const { search } = useSearch();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["searchBooks", search],
    queryFn: () => searchBooks(search),
  });
  return (
    <div className="px-[8rem] py-[3rem]">
      <p>Found Results for "{search}"</p>
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

export default SearchResults;
