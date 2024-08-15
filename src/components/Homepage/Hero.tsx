import React from "react";
import heroImg from "@/assets/icons/hero.png";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero flex justify-between items-center py-8 md:py-[5rem] lg:py-[0]">
      <div className="flex-1 px-8 md:px-[4rem] relative z-10">
        {" "}
        <h2 className="text-3xl md:text-6xl font-semibold text-accent mb-[1rem] md:mb-[3rem]">
          ipsum dolor si
        </h2>
        <p className="mb-[3rem] xl:text-2xl 2xl:text-3xl font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <br className="hidden md:block" /> elit. Sed eu feugiat amet, libero
          ipsum enim pharetra <br className="hidden md:block" /> hac. Urna
          commodo, lacus ut magna velit eleifend.{" "}
          <br className="hidden md:block" /> Amet, quis urna, a eu.
        </p>
        <Button
          variant={"outline"}
          className="bg-transparent border-accent text-accent flex items-center gap-[8px]"
        >
          Read More{" "}
          <span className="animate-pulse">
            {" "}
            <MoveRight />
          </span>
        </Button>
      </div>
      <img
        src={heroImg}
        alt=""
        className="transition-all absolute w-[300px] right-0 opacity-10 md:opacity-100 md:relative md:w-[350px] lg:w-[500px]  xl:w-[600px] 2xl:w-[unset]"
      />{" "}
    </div>
  );
};

export default Hero;
