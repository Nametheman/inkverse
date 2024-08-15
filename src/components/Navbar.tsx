import React, { useState, useEffect } from "react";
import logo from "@/assets/images/logo.png";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { useSearch } from "@/store/useSearch";
import { AlignRight } from "lucide-react";
import { useMobileNav } from "@/store/useMobileNav";
import MobileNav from "./MobileNav";

export const links = ["Home", "About", "Contact", "Blog", "Shop"];

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  const { setSearch } = useSearch();

  const { toggle } = useMobileNav();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  useEffect(() => {
    setSearch(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <nav className="bg-white px-3 md:px-[3rem] xl:px-[8rem] py-4 flex items-center justify-between h-[90px] nav sticky top-0 z-50">
      <img src={logo} alt="logo_png" className="w-[40px] md:w-[70px]" />
      <div className="flex gap-4 items-center md:gap-[3rem] xl:gap-[8rem] ">
        <Input
          type="search"
          placeholder="Search for your favorite book"
          className="w-[230px] md:w-[400px] rounded-full shadow-md"
          value={searchValue}
          onChange={searchHandler}
        />
        <div className="items-center gap-[2rem] text-sm hidden lg:flex">
          {links.map((link) => (
            <Link to={"#"}>{link}</Link>
          ))}
        </div>
        <div className="items-center text-sm lg:hidden">
          <AlignRight onClick={toggle} />
        </div>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
