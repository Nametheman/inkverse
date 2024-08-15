import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMobileNav } from "@/store/useMobileNav";
import { links } from "./Navbar";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const { toggle, isOpen } = useMobileNav();

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent>
        <div className="mt-6 md:items-center flex-col gap-[2rem] flex">
          {links.map((link) => (
            <Link to={"#"}>{link}</Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
