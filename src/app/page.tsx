import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full items-start justify-start gap-10 py-20 md:px-1">
      <div className="hidden h-auto flex-col items-center justify-start gap-5 py-16 lg:flex">
        <Linkedin />
        <Mail />
        <Twitter />
        <Instagram />
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-7 md:w-[50%] md:items-start lg:w-[70%] lg:py-20">
        <p className="flex flex-col text-center text-3xl md:text-start md:text-4xl lg:text-7xl">
          <span>{"I'm Web Developer"}</span>
          <span> {"Natalie E. Watson"}</span>
        </p>
        <p className="md:text-md text-center text-xs md:text-start lg:text-lg">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum."
          }
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
