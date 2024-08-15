import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useSearch } from "@/store/useSearch";
import { Outlet } from "react-router-dom";
import SearchResults from "@/components/SearchResults";

const HomeLayout = () => {
  const { search } = useSearch();

  return (
    <div>
      <Navbar />
      {search ? <SearchResults /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default HomeLayout;
