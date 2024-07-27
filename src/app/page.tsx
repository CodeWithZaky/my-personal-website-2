import { Instagram, Twitter } from "@/components/icons/social-media";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CircleArrowRight,
  Linkedin,
  Mail,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import Section1Bg1 from "../assets/section-1-bg1.jpg";

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
}

const WelcomeSection = () => {
  return (
    <section className="w-full">
      <div className="flex justify-start items-start gap-10 mx-auto py-24 w-[85%]">
        <div className="lg:flex flex-col justify-start items-center gap-5 hidden py-16 h-auto">
          <Linkedin />
          <Mail />
          <Twitter />
          <Instagram />
        </div>
        <div className="flex flex-col justify-start items-center md:items-start gap-7 lg:py-20 w-full md:w-[50%] lg:w-[70%]">
          <p className="flex flex-col text-center md:text-start large-sentences">
            <span>{`I'm Web Developer`}</span>
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
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-background/70 w-full">
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
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button className="w-fit">Contact Me</Button>
          </div>
          <div className="flex md:flex-row flex-col justify-end items-center gap-7 md:gap-3 w-full lg:w-[60%]">
            <div className="flex flex-col items-center gap-3 w-full md:w-[50%]">
              <p className="normal-sentences">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="normal-sentences">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex justify-start md:justify-end items-center w-full md:w-[50%]">
              <div className="border-image rounded-md w-[80%]">
                <Image
                  src={Section1Bg1}
                  alt="section 1 bg 1"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceSection = () => {
  const service_items = [
    {
      description: "UI/UX Design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      description: "Digital Marketing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      description: "Web Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col justify-start items-center gap-10 mx-auto py-24 w-[85%]">
        <div className="flex flex-col justify-start items-center gap-5">
          <p className="medium-sentences text-center">
            {"What Services I'm Providing"}
          </p>
          <p className="text-center normal-sentences">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="bg-primary w-[100px] h-[2px]" />
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center gap-5">
          {service_items.map((item, index) => {
            return (
              <Card
                className="flex flex-col justify-center items-center"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="flex justify-center items-center">
                    <MonitorSmartphone />
                  </CardTitle>
                  <CardDescription className="medium-sentences text-center">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mx-2 md:mx-3 lg:mx-5 text-center normal-sentences">
                  {item.content}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <CircleArrowRight />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
