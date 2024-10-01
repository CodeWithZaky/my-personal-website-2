import { DATA } from "@/data/resume";
import Link from "next/link";
import { Fragment } from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-[85%] py-10">
        <div className="flex h-[200px] w-full flex-col items-center justify-evenly lg:flex-row lg:justify-between">
          <div className="normal-sentences flex w-full flex-row justify-center gap-7 lg:w-1/3 lg:justify-start">
            {DATA.contact.social.map((contact_data, index) => (
              <Fragment key={index}>
                <Link href={contact_data.url} target="_blank">
                  {contact_data.icon}
                </Link>
              </Fragment>
            ))}
          </div>
          <Link
            href={"/"}
            className="flex w-full items-center justify-center lg:w-1/3"
          >
            <MyLogo />
          </Link>
          <p className="w-full text-center lg:w-1/3 lg:text-end">
            ahmadzakyubaidillah@gmail.com
          </p>
        </div>
      </div>
      <div className="w-full border-t border-border">
        <div className="normal-sentences mx-auto flex h-[100px] w-[85%] items-center justify-center border-t border-border">
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
      className="h-[44px] w-[44px] rounded-md bg-primary dark:bg-transparent lg:h-[72px] lg:w-[72px]"
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
