import Hero from "@/components/Homepage/Hero";
import React from "react";
import TopBooks from "./TopBooks";
import { useSearch } from "@/store/useSearch";
import SearchResults from "../../components/SearchResults";

const index = () => {
  const { search } = useSearch();
  return (
    <div>
      <Hero />
      <TopBooks />
    </div>
  );
};

export default index;
