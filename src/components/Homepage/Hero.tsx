import React from "react";
import heroImg from "@/assets/icons/hero.png";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero flex justify-between items-center">
      <div className="flex-1 px-[4rem]">
        {" "}
        <h2 className="text-6xl font-semibold text-accent mb-[3rem]">
          ipsum dolor si
        </h2>
        <p className="mb-[3rem] text-3xl font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sed eu
          feugiat amet, libero ipsum enim pharetra <br /> hac. Urna commodo,
          lacus ut magna velit eleifend. <br /> Amet, quis urna, a eu.
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
      <img src={heroImg} alt="" className="" />{" "}
    </div>
  );
};

export default Hero;
