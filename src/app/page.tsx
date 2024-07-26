import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Welcome Page */}
      <div className="w-full">
        <div className="flex justify-start items-start gap-10 mx-auto py-24 w-[85%]">
          <div className="lg:flex flex-col justify-start items-center gap-5 hidden py-16 h-auto">
            <Linkedin />
            <Mail />
            <Twitter />
            <Instagram />
          </div>
          <div className="flex flex-col justify-start items-center md:items-start gap-7 lg:py-20 w-full md:w-[50%] lg:w-[70%]">
            <p className="flex flex-col text-center md:text-start large-sentences">
              <span>I'm Web Developer</span>
              <span>A. Zaky Ubaidillah</span>
            </p>
            <p className="text-center md:text-start normal-sentences">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus luctusnec ullamcorper mattis, pulvinar dapibus leop
              llamcorper, lorem ipsum.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      {/* About Page */}
      <div className="bg-background/70 w-full">
        <div className="flex flex-col justify-start items-center space-y-14 mx-auto py-24 w-[85%]">
          <div className="flex flex-col justify-start items-center text-center">
            <p className="medium-sentences">About Me</p>
            <p className="normal-sentences">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="bg-primary w-[100px] h-[2px]" />
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center gap-5">
            <div className="flex flex-col gap-4 w-full lg:w-[30%]">
              <h1 className="text-xl md:text-3xl lg:text-5xl">
                Developing With a Passion While Exploring The World.
              </h1>
              <div className="bg-primary w-[100px] h-[2px]" />
              <p className="normal-sentences">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button className="w-fit">Contact Me</Button>
            </div>
            <div className="flex md:flex-row flex-col justify-end items-center gap-7 md:gap-3 w-full lg:w-[60%]">
              <div className="flex flex-col items-center gap-3 w-full md:w-[50%]">
                <p className="normal-sentences">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="normal-sentences">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex justify-start md:justify-end items-center w-full md:w-[50%]">
                <div className="border-image border-test rounded-md w-[80%] h-[300px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};
const Twitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-twitter"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};
