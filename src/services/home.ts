import InkverseAPI from "@/utils/axios";
import { INKVERSE_URLS } from "@/utils/apiUrls";
import { handleInkverseApiError } from "@/utils/httpApiErrors";

export const getAllBooks = async () => {
  try {
    const { data } = await InkverseAPI.get(
      `${INKVERSE_URLS.BASE_URL}volumes?q="all"&maxResults=12&key=${
        import.meta.env.VITE_REACT_BOOK_API_KEY
      }`
    );
    return data;
  } catch (error) {
    throw handleInkverseApiError(error);
  }
};
export const searchBooks = async (
  searchParams: string,
  limit: number,
  page: number
) => {
  try {
    const { data } = await InkverseAPI.get(
      `${INKVERSE_URLS.BASE_URL}volumes?q=${
        searchParams || "book"
      }&maxResults=${limit}&startIndex=${(page - 1) * limit}&key=${
        import.meta.env.VITE_REACT_BOOK_API_KEY
      }`
    );
    return data;
  } catch (error) {
    throw handleInkverseApiError(error);
  }
};
