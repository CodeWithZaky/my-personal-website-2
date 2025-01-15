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
    <div className="mx-auto flex w-[85%] items-start justify-start gap-10 py-24">
      <div className="hidden h-auto flex-col items-center justify-start gap-5 py-16 lg:flex">
        {DATA.contact.social.map((contact_data, index) => (
          <Fragment key={index}>
            <Link href={contact_data.url} target="_blank">
              {contact_data.icon}
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-7 md:w-[50%] md:items-start lg:w-[70%] lg:py-20">
        <p className="large-sentences flex flex-col text-center md:text-start">
          <span className="text-7xl">{`I'm ${DATA.nickname}`}</span>
          <span>Fullstack Web Developer</span>
        </p>
        <p className="normal-sentences text-center md:text-start">
          {DATA.description}
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
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start space-y-14 py-24">
      <div className="flex flex-col items-center justify-start gap-5 text-center">
        <p className="medium-sentences">About Me</p>
        <p className="normal-sentences">
          Developer with a Passion for Innovation and Problem Solving.
        </p>
        <span className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 items-start justify-start gap-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-4 md:col-span-2 lg:col-span-1">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Developer with a Passion for Innovation and Problem Solving.
          </h1>
          <span className="h-[2px] w-[100px] bg-primary" />
          <p className="normal-sentences">
            I am a full-stack developer with over 2 years of experience in
            building dynamic, responsive web applications. I specialize in
            React.js, Next.js, and Tailwind CSS, focusing on creating sleek,
            modern designs.
          </p>
          <Link href="/contact">
            <Button className="w-fit">Get in Touch</Button>
          </Link>
        </div>
        <div className="flex w-full flex-col items-center gap-3">
          <p className="normal-sentences">
            I work with the T3 stack to develop scalable and efficient web apps.
            I'm passionate about continuous learning, always keeping up with the
            latest trends and technologies in the industry.
          </p>
          <p className="normal-sentences">
            I'm committed to creating web solutions that align with client
            goals, ensuring seamless user experiences. I strive to make a
            meaningful impact in the digital world.
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
                  <Crown />
                </CardTitle>
                <CardDescription className="medium-sentences text-center">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="normal-sentences mx-2 text-center md:mx-3 lg:mx-5">
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
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start gap-14 py-24">
      <div className="flex flex-col items-center justify-start gap-5">
        <p className="medium-sentences text-center">Latest Project</p>
        <p className="normal-sentences text-center">
          Innovative Solutions for Modern Challenges
        </p>
        <span className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 gap-10 px-2 lg:grid-cols-3">
        {[...DATA.projects]
          .reverse()
          .slice(0, 3)
          .map((project, index) => {
            return (
              <Fragment key={String(index) + "portfolio_items"}>
                <div className="space-y-2 rounded-md">
                  <Image
                    src={project.image}
                    alt="image"
                    className="rounded-md"
                  />
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
                  <div className="flex w-[90%] flex-wrap gap-2 py-1">
                    {project.technologies.map((technologie, index) => (
                      <Fragment key={String(index) + "technologies"}>
                        <p className="py1 rounded-md bg-primary px-4 uppercase text-background dark:text-foreground">
                          {technologie}
                        </p>
                      </Fragment>
                    ))}
                  </div>
                  <div className="normal-sentences flex gap-5 py-1">
                    {project.links.map((link, index) => (
                      <Fragment key={String(index) + "link"}>
                        <Link href={link.href} target="_blank">
                          <p className="flex items-center gap-2 rounded-md bg-foreground px-4 py-0.5 text-background">
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
