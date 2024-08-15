import { create } from "zustand";

interface SearchState {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearch = create<SearchState>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));
