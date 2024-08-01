import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "@/components/icons/social-media";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DATA } from "@/data/resume";
import clsx from "clsx";
import {
  CircleArrowRight,
  Github,
  Globe,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import gedongarum from "../assets/gedongarum.png";
import Section1Bg1 from "../assets/section-1-bg1.jpg";

export default function Home() {
  const page_sections = [
    <WelcomeSection key="welcome_sections" />,
    <AboutSection key="about_sections" />,
    <PortfolioSection key="portfolio_sections" />,
    <ServiceSection key="service_sections" />,
  ];
  return (
    <div>
      {page_sections.map((item, index) => {
        return (
          <Fragment key={String(index) + "page_sections"}>
            <section
              className={clsx("w-full", index % 2 ? "bg-background/70" : "")}
            >
              {item}
            </section>
          </Fragment>
        );
      })}
    </div>
  );
}

const WelcomeSection = () => {
  return (
    <div className="mx-auto flex w-[85%] items-start justify-start gap-10 py-24">
      <div className="hidden h-auto flex-col items-center justify-start gap-5 py-16 lg:flex">
        <Linkedin />
        <Mail />
        <Twitter />
        <Instagram />
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-7 md:w-[50%] md:items-start lg:w-[70%] lg:py-20">
        <p className="large-sentences flex flex-col text-center md:text-start">
          <span>{`I'm Web Developer`}</span>
          <span>A. Zaky Ubaidillah</span>
        </p>
        <p className="normal-sentences text-center md:text-start">
          Creating seamless web experiences with creativity and technical skill.
          From dynamic websites to responsive designs, I bring ideas to life.
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start space-y-14 py-24">
      <div className="flex flex-col items-center justify-start gap-5 text-center">
        <p className="medium-sentences">About Me</p>
        <p className="normal-sentences">
          Passionate Developer Exploring the World.
        </p>
        <span className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 items-start justify-start gap-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-4 md:col-span-2 lg:col-span-1">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Passionate Developer Exploring the World.
          </h1>
          <span className="h-[2px] w-[100px] bg-primary" />
          <p className="normal-sentences">
            Full-stack developer with 2+ years of experience creating dynamic,
            responsive web apps. Expertise in React.js, Next.js, and Tailwind
            CSS for sleek, modern designs.
          </p>
          <Link href="/contact">
            <Button className="w-fit">Contact Me</Button>
          </Link>
        </div>
        <div className="flex w-full flex-col items-center gap-3">
          <p className="normal-sentences">
            I use the T3 stack for scalable, efficient apps. Passionate about
            continuous learning, staying current with industry trends and tech.
          </p>
          <p className="normal-sentences">
            Dedicated to developing web solutions that meet client needs and
            deliver exceptional user experiences. Committed to making a
            difference in the digital landscape.
          </p>
        </div>
        <div className="flex w-full items-center justify-start md:justify-end">
          <div className="border-image rounded-md">
            <Image
              src={Section1Bg1}
              alt="section 1 bg 1"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start gap-10 py-24">
      <div className="flex flex-col items-center justify-start gap-5">
        <p className="medium-sentences text-center">My Services</p>
        <p className="normal-sentences text-center">
          Comprehensive Web Development Solutions
        </p>
        <span className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="flex flex-col items-stretch justify-center gap-5 md:flex-row">
        {DATA.services.map((item, index) => (
          <Fragment key={index}>
            <Card className="flex flex-col items-center justify-between md:w-1/3">
              <CardHeader>
                <CardTitle className="mb-2 flex items-center justify-center">
                  <MonitorSmartphone />
                </CardTitle>
                <CardDescription className="medium-sentences text-center">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="normal-sentences mx-2 text-center md:mx-3 lg:mx-5">
                {item.content}
              </CardContent>
              <CardFooter className="flex justify-between">
                <CircleArrowRight />
              </CardFooter>
            </Card>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start gap-14 py-24">
      <div className="flex flex-col items-center justify-start gap-5">
        <p className="medium-sentences text-center">Latest Project</p>
        <p className="normal-sentences text-center">
          Innovative Solutions for Modern Challenges
        </p>
        <span className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 gap-10 px-2 lg:grid-cols-3">
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <Fragment key={String(index) + "portfolio_items"}>
                <div className="space-y-2 rounded-xl">
                  <Image src={gedongarum} alt="image" className="rounded-xl" />
                  <div className="py-1">
                    <h1>Chat Collect</h1>
                    <p className="text-muted-foreground">Jan 2024 - Feb 2024</p>
                    <p>
                      With the release of the OpenAI GPT Store, I decided to
                      build a SaaS which allows users to collect email addresses
                      from their GPT users. This is a great way to build an
                      audience and monetize your GPT API usage.
                    </p>
                  </div>
                  <div className="flex w-[90%] flex-wrap gap-2 py-1">
                    <p className="py1 rounded-lg bg-primary px-4">Next js</p>
                    <p className="py1 rounded-lg bg-primary px-4">
                      Tailwind css
                    </p>
                    <p className="py1 rounded-lg bg-primary px-4">Shadcn ui</p>
                    <p className="py1 rounded-lg bg-primary px-4">Typescript</p>
                    <p className="py1 rounded-lg bg-primary px-4">Javascript</p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p className="flex gap-2 rounded-lg bg-foreground px-4 py-1 text-background">
                      <Globe width={20} />
                      Website
                    </p>
                    <p className="flex gap-2 rounded-lg bg-foreground px-4 py-1 text-background">
                      <Github width={20} />
                      Source
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
      <Link href={"/portfolio"} className="group">
        <Button className="px-7">
          see more
          <span className="pl-2 transition-all group-hover:translate-x-2">
            {"->"}
          </span>
        </Button>
      </Link>
    </div>
  );
};
