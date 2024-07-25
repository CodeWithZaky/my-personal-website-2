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
    <nav className="fixed inset-x-0 top-0 z-50 bg-background px-5 shadow-sm dark:bg-background md:px-10">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="#" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            {nav_links.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className="flex items-center text-sm font-medium transition-colors hover:underline"
                  prefetch={false}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center justify-center space-x-4 md:flex">
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
