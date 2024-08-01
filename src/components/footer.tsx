import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "@/components/icons/social-media";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto py-10 w-[85%]">
        <div className="flex lg:flex-row flex-col justify-evenly lg:justify-between items-center w-full h-[200px]">
          <div className="flex flex-row justify-center lg:justify-start gap-7 w-full lg:w-1/3 normal-sentences">
            <Instagram />
            <Twitter />
            <Linkedin />
            <Mail />
          </div>
          <Link
            href={"/"}
            className="flex justify-center items-center w-full lg:w-1/3"
          >
            <MyLogo />
          </Link>
          <p className="w-full lg:w-1/3 text-center lg:text-end">
            ahmadzakyubaidillah@gmail.com
          </p>
        </div>
      </div>
      <div className="border-t border-border w-full">
        <div className="flex justify-center items-center mx-auto border-t border-border w-[85%] h-[100px] normal-sentences">
          <p>Copyright © 2024 CodeWithZaky</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function MyLogo() {
  return (
    <svg
      className="bg-primary dark:bg-transparent rounded-md w-[44px] lg:w-[72px] h-[44px] lg:h-[72px]"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background transparent */}
      <rect width="100" height="100" fill="none" />

      {/* Top red rectangle */}
      <rect x="10" y="10" width="40" height="17" fill="#fff" />

      {/* Bottom red rectangle */}
      <rect x="50" y="70" width="40" height="17" fill="#fff" />

      {/* Diagonal red rectangle */}
      <polygon points="10,70 90,10 90,30 10,90" fill="#fff" />
    </svg>
  );
}
