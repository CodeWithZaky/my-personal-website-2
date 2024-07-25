import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { nav_links } from "./navbar";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="mt-11 flex flex-col items-end justify-start gap-10 md:hidden">
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
          <Button>Learn More</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
