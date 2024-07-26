import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Sidebar } from "./sidebar";

export const nav_links = [
  { path: "/", title: "Home" },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/portfolio",
    title: "Portfolio",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export default function Navbar() {
  return (
    <div className="top-0 z-50 fixed inset-x-0 backdrop-blur-sm w-full">
      <nav className="mx-auto w-[85%]">
        <div className="mx-auto w-full">
          <div className="flex justify-between items-center h-14">
            <Link href="#" className="flex items-center" prefetch={false}>
              {/* <MountainIcon className="w-6 h-6" /> */}
              <MyLogo />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="md:flex gap-4 hidden">
              {nav_links.map((item, index) => {
                return (
                  <Link
                    href={item.path}
                    key={index}
                    className="flex items-center font-medium text-sm hover:underline transition-colors"
                    prefetch={false}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-4">
              <div className="md:flex justify-center items-center space-x-4 hidden">
                <ModeToggle />
                <Button size="sm">Hire Me</Button>
              </div>
              <div className="block md:hidden">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
function MyLogo(props: any) {
  return (
    <svg
      width="24"
      height="24"
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
