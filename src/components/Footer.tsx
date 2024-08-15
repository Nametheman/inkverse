import React from "react";
import logo from "@/assets/images/logo.png";
import facebook from "@/assets/icons/facebook.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import twitter from "@/assets/icons/twitter.svg";
import youtube from "@/assets/icons/youtube.svg";

const Footer = () => {
  const socials = [
    { icon: facebook, link: "https://www.facebook.com/" },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
    { icon: twitter, link: "https://www.x.com/" },
    { icon: youtube, link: "https://www.youtube.com/" },
  ];
  return (
    <footer className="footer px-[8rem] py-[6rem]">
      <div className="flex items-start justify-between">
        <div className="w-[350px]">
          <img src={logo} alt="logo" />
          <p className="mt-2">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </p>
          <div className="flex items-center justify-between mt-10">
            {socials.map((link) => (
              <a href={link.link} key={link.link}>
                <img src={link.icon} alt="social_logo" className="w-[40px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h2 className="mb-5 text-accent font-medium">COMPANY</h2>
            <div className="space-y-2 text-sm">
              <p>HOME</p>
              <p>ABOUT US</p>
              <p>BOOKS</p>
              <p>EBOOKS</p>
              <p>NEW RELEASE</p>
              <p>CONTACT US</p>
              <p>BLOG</p>
            </div>
          </div>
        </div>
        <div className="w-[350px]">
          <h2 className="mb-5 text-accent font-medium">LATEST NEWS</h2>
          <div></div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[7rem]">
        <p>© 2024 Inkverse. All Rights Reserved.</p>
        <div className="flex items-center gap-2">
          <p className="text-accent">Privacy</p>
          <p>|</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
