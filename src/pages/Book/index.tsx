import React from "react";
import { useBook } from "@/store/useBook";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const index = () => {
  const { book } = useBook();
  console.log(book);
  return (
    <div className="p-8 md:px-[8rem] md:py-[6rem]">
      <Link to="/" className="flex items-center my-6 gap-1 cursor-pointer">
        <MoveLeft className="" />
        <p className="">Go back</p>
      </Link>
      <h2 className="text-2xl md:text-3xl text-accent font-bold">
        {book?.volumeInfo?.title}
      </h2>
      <h2 className="mt-[0.5rem]">{book?.volumeInfo.subtitle}</h2>
      <div className="mt-6 flex items-start gap-10 flex-col lg:flex-row">
        <img
          src={book?.volumeInfo.imageLinks?.thumbnail}
          alt="thumbnail"
          className="w-full md:w-[400px]"
        />
        <div className="w-full">
          <span className="flex items-center gap-2 ">
            <p>Author:</p>
            <p>{book?.volumeInfo.authors ? book?.volumeInfo.authors[0] : ""}</p>
          </span>
          <span className="flex items-center gap-2 my-3">
            <p>Publisher:</p>
            <p>
              {book?.volumeInfo.publisher ? book?.volumeInfo.publisher : ""}
            </p>
          </span>
          <span className="flex items-center gap-2 my-3">
            <p>Category:</p>
            <p>
              {book?.volumeInfo.categories
                ? book?.volumeInfo.categories[0]
                : ""}
            </p>
          </span>
          <span className="flex items-start gap-2 my-3">
            <p className="tracking-wide leading-relaxed font-light">
              {book?.volumeInfo.description ? book?.volumeInfo.description : ""}
            </p>
          </span>
          <Button className="mt-5 bg-accent w-[200px] hover:bg-accent">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default index;
