import React, { useState, useEffect } from "react";
import { useSearch } from "@/store/useSearch";
import Book from "@/components/Book";
import { searchBooks } from "@/services/home";
import { useQuery } from "@tanstack/react-query";
import Pagination from "./NewPagination";

const SearchResults = () => {
  const { search } = useSearch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["searchBooks", search, limit, page],
    queryFn: () => searchBooks(search, limit, page),
  });
  console.log(data);
  return (
    <div className="px-[3rem] lg:px-[8rem] py-[3rem]">
      <p>
        Found {data?.totalItems} Results for "{search}"
      </p>
      {isFetching ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 gap-y-10 md:gap-[6rem] justify-center px-[1rem] md:px-[6rem] mt-[5rem]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="w-full md:flex justify-centerr" key={index}>
              <div className="w-full md:w-[280px] min-h-[450px] shrink-0 rounded-md bg-gray-100 animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2  gap-y-10 md:gap-[6rem] justify-center px-[1rem] md:px-[6rem] mt-[5rem]">
          {data?.items?.map((book: any) => (
            <div className="w-full md:flex justify-center" key={book.id}>
              <Book book={book} />
            </div>
          ))}
        </div>
      )}
      {data?.totalItems > 10 && (
        <div className="w-full mt-[4rem]">
          <Pagination
            totalLength={data?.totalItems}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
