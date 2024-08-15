import { create } from "zustand";

interface Book {
  book: any;
  setBook: (book: any) => void;
}

export const useBook = create<Book>((set) => ({
  book: "",
  setBook: (book: any) => set({ book }),
}));
