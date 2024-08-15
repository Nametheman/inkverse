import { Button } from "./ui/button";
import { useBook } from "@/store/useBook";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/store/useSearch";

const Book = ({ book }: any) => {
  const { setBook } = useBook();
  const { setSearch } = useSearch();
  const navigate = useNavigate();

  const viewBookHandler = () => {
    setSearch("");
    setBook(book);
    navigate("/book");
  };
  return (
    <div className="shadow bg-white rounded-md w-full md:w-[280px] min-h-[450px] overflow-hidden shrink-0 relative">
      <img
        src={book?.volumeInfo?.imageLinks?.thumbnail}
        alt="thumbnail"
        className="w-full h-[230px] object-cover object-top"
      />
      <div className="mt-3 px-2 py-3">
        <p className="font-bold tracking-wide">
          {book?.volumeInfo?.title
            ? book?.volumeInfo?.title.length > 40
              ? book?.volumeInfo?.title.substring(0, 40) + "..."
              : book?.volumeInfo?.title
            : "Dummy Book Title"}
        </p>
        <p className="font-normal text-sm tracking-wide mt-2">
          {book?.volumeInfo?.authors ? book?.volumeInfo?.authors[0] : "Author"}
        </p>
        <p className="font-semibold text-accent mt-2">
          {book?.saleInfo?.saleability === "NOT_FOR_SALE"
            ? "Out Of Stock"
            : `£${book?.saleInfo?.listPrice?.amount}`}
        </p>
        <div className="w-full absolute bottom-2">
          <Button
            className="w-[95%] mt-3  inset-x-0 hover:text-white"
            variant={"outline"}
            onClick={viewBookHandler}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Book;
