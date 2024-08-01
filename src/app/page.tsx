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
import { Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
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
    <div className="flex justify-start items-start gap-10 mx-auto py-24 w-[85%]">
      <div className="lg:flex flex-col justify-start items-center gap-5 hidden py-16 h-auto">
        {DATA.contact.social.map((contact_data, index) => (
          <Fragment key={index}>
            <Link href={contact_data.url} target="_blank">
              {contact_data.icon}
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="flex flex-col justify-start items-center md:items-start gap-7 lg:py-20 w-full md:w-[50%] lg:w-[70%]">
        <p className="flex flex-col text-center md:text-start large-sentences">
          <span>{`I'm Web Developer`}</span>
          <span>A. Zaky Ubaidillah</span>
        </p>
        <p className="text-center md:text-start normal-sentences">
          Creating seamless web experiences with creativity and technical skill.
          From dynamic websites to responsive designs, I bring ideas to life.
        </p>
        <Link href={"/about"}>
          <Button>Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="flex flex-col justify-start items-center space-y-14 mx-auto py-24 w-[85%]">
      <div className="flex flex-col justify-start items-center gap-5 text-center">
        <p className="medium-sentences">About Me</p>
        <p className="normal-sentences">
          Passionate Developer Exploring the World.
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="justify-start items-start gap-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1 w-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Passionate Developer Exploring the World.
          </h1>
          <span className="bg-primary w-[100px] h-[2px]" />
          <p className="normal-sentences">
            Full-stack developer with 2+ years of experience creating dynamic,
            responsive web apps. Expertise in React.js, Next.js, and Tailwind
            CSS for sleek, modern designs.
          </p>
          <Link href="/contact">
            <Button className="w-fit">Contact Me</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
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
        <div className="flex justify-start md:justify-end items-center w-full">
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
    <div className="flex flex-col justify-start items-center gap-10 mx-auto py-24 w-[85%]">
      <div className="flex flex-col justify-start items-center gap-5">
        <p className="medium-sentences text-center">My Services</p>
        <p className="text-center normal-sentences">
          Comprehensive Web Development Solutions
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-stretch gap-5">
        {DATA.services.map((item, index) => (
          <Fragment key={index}>
            <Card className="flex flex-col justify-between items-center md:w-1/3">
              <CardHeader>
                <CardTitle className="flex justify-center items-center mb-2">
                  <Crown />
                </CardTitle>
                <CardDescription className="medium-sentences text-center">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mx-2 md:mx-3 lg:mx-5 text-center normal-sentences">
                {item.content}
              </CardContent>
              <CardFooter className="flex justify-between">
                {item.icon}
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
    <div className="flex flex-col justify-start items-center gap-14 mx-auto py-24 w-[85%]">
      <div className="flex flex-col justify-start items-center gap-5">
        <p className="medium-sentences text-center">Latest Project</p>
        <p className="text-center normal-sentences">
          Innovative Solutions for Modern Challenges
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 px-2">
        {DATA.projects.slice(0, 3).map((project, index) => {
          return (
            <Fragment key={String(index) + "portfolio_items"}>
              <div className="space-y-2 rounded-xl">
                <Image src={project.image} alt="image" className="rounded-xl" />
                <div className="py-1">
                  <h1>{project.title}</h1>
                  <p className="text-muted-foreground">
                    {project.dates}
                    <span>
                      {" / "}
                      {project.category.title}
                    </span>
                    <span>
                      {" / "}
                      {project.category.note}
                    </span>
                  </p>
                  <p>{project.description} </p>
                </div>
                <div className="flex flex-wrap gap-2 py-1 w-[90%]">
                  {project.technologies.map((technologie, index) => (
                    <Fragment key={String(index) + "technologies"}>
                      <p className="bg-primary px-4 rounded-lg text-background dark:text-foreground py1">
                        {technologie}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <div className="flex gap-5 py-1 normal-sentences">
                  {project.links.map((link, index) => (
                    <Fragment key={String(index) + "link"}>
                      <Link href={link.href} target="_blank">
                        <p className="flex gap-2 bg-foreground px-4 py-1 rounded-lg text-background">
                          {link.icon}
                          {link.type}
                        </p>
                      </Link>
                    </Fragment>
                  ))}
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
