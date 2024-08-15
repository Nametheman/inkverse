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
    <footer className="footer p-[2rem] md:px-[3rem] lg:px-[8rem] md:py-[6rem]">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 items-start justify-between">
        <div className="w-[250px] md:w-[350px]">
          <img src={logo} alt="logo" className="w-[50px]" />
          <p className="mt-2 text-sm md:text-base">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </p>
          <div className="flex items-center justify-between mt-10">
            {socials.map((link) => (
              <a
                href={link.link}
                key={link.link}
                className="hover:scale-105 transition-all"
              >
                <img src={link.icon} alt="social_logo" className="w-[40px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h2 className="mb-5 text-accent font-bold">COMPANY</h2>
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
        <div className="xl:w-[350px]">
          <h2 className="mb-5 text-accent font-bold">LATEST NEWS</h2>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between mt-6 md:mt-[7rem]">
        <p className="text-sm">© 2024 Emmanuel Owolabi. All Rights Reserved.</p>
        <div className="flex items-center gap-2 text-sm">
          <p className="text-accent">Privacy</p>
          <p>|</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
