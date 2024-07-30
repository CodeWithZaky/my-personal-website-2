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
import clsx from "clsx";
import { CircleArrowRight, MonitorSmartphone } from "lucide-react";
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
          Creating seamless and engaging web experiences with a blend of
          creativity and technical expertise. From dynamic websites to
          responsive designs, I turn ideas into reality.
        </p>
        <Button>Learn More</Button>
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
          Developing With a Passion While Exploring The World.
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="justify-start items-start gap-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1 w-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Developing With a Passion While Exploring The World.
          </h1>
          <span className="bg-primary w-[100px] h-[2px]" />
          <p className="normal-sentences">
            I am a full-stack web developer with over 2 years of experience in
            creating dynamic and responsive web applications. My expertise lies
            in utilizing React.js and Next.js for front-end development, paired
            with Tailwind CSS and its comprehensive component libraries to
            ensure sleek and modern design. In my projects, I often leverage the
            power of the T3 stack, which provides a robust foundation for
            building scalable and efficient applications. My journey as a
            developer is fueled by a passion for continuous learning and
            innovation, always staying up-to-date with the latest industry
            trends and technologies.
          </p>
          <Link href="/contact">
            <Button className="w-fit">Contack Me</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="normal-sentences">
            Beyond my professional experience, I am currently a 5th-semester
            student at Universitas Islam Lamongan, class of 2022. Balancing
            academic pursuits with real-world projects, I aim to bridge the gap
            between theoretical knowledge and practical application. My
            university life is enriched with various projects and collaborations
            that hone my skills and expand my understanding of the field.
          </p>
          <p className="normal-sentences">
            I am dedicated to developing web solutions that not only meet client
            requirements but also provide an exceptional user experience. My
            goal is to contribute to the digital landscape by delivering
            high-quality, user-centric applications that make a difference.
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
  const service_items = [
    {
      description: "Frontend Web Development",
      content:
        "Creating responsive interfaces using React.js, Next.js, and Tailwind CSS along with component libraries like shadcn UI, daisyUI, achernity UI, and more.",
    },
    {
      description: "Backend Web Development",
      content:
        "Developing robust backends with Next.js API, Next.js app router or pages router, tRPC, Prisma ORM, and databases such as PostgreSQL, MySQL, and SQLite.",
    },
    {
      description: "Fullstack Web Development",
      content:
        "Delivering end-to-end solutions using the T3 stack, with Next.js app router and pages router for comprehensive web development.",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center gap-10 mx-auto py-24 w-[85%]">
      <div className="flex flex-col justify-start items-center gap-5">
        <p className="medium-sentences text-center">
          {"What Services I'm Providing"}
        </p>
        <p className="text-center normal-sentences">
          Comprehensive Web Development Solutions
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-stretch gap-5">
        {service_items.map((item, index) => {
          return (
            <Fragment key={String(index) + "service_items"}>
              <Card className="flex flex-col justify-between items-center">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center mb-2">
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
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-10 mx-auto py-24 w-[85%]">
      <div className="flex flex-col justify-start items-center gap-5">
        <p className="medium-sentences text-center">Latest Project</p>
        <p className="text-center normal-sentences">
          Innovative Solutions for Modern Challenges
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="gap-16 grid grid-cols-1 lg:grid-cols-3 px-2">
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <Fragment key={String(index) + "portfolio_items"}>
                <div className="space-y-3 border border-border rounded-xl">
                  <Image src={gedongarum} alt="image" className="rounded-xl" />
                  <h1>Chat Collect</h1>
                  <h1>Jan 2024 - Feb 2024</h1>
                  <h1>
                    With the release of the OpenAI GPT Store, I decided to build
                    a SaaS which allows users to collect email addresses from
                    their GPT users. This is a great way to build an audience
                    and monetize your GPT API usage.
                  </h1>
                  <div className="flex flex-wrap gap-2 w-[90%]">
                    <p className="bg-primary px-4 rounded-lg py1">Next js</p>
                    <p className="bg-primary px-4 rounded-lg py1">
                      Tailwind css
                    </p>
                    <p className="bg-primary px-4 rounded-lg py1">Shadcn ui</p>
                    <p className="bg-primary px-4 rounded-lg py1">Typescript</p>
                    <p className="bg-primary px-4 rounded-lg py1">Javascript</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="bg-foreground px-4 rounded-lg text-background py1">
                      Website
                    </p>
                    <p className="bg-foreground px-4 rounded-lg text-background py1">
                      Source
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
      <Link href={"/portfolio"} className="group">
        <Button>
          see more
          <span className="pl-2 transition-all group-hover:translate-x-2">
            {"->"}
          </span>
        </Button>
      </Link>
    </div>
  );
};
