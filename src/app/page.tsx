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
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start space-y-14 py-24">
      <div className="flex flex-col items-center justify-start gap-5 text-center">
        <p className="medium-sentences">About Me</p>
        <p className="normal-sentences">
          Developing With a Passion While Exploring The World.
        </p>
        <div className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 items-start justify-start gap-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-4 md:col-span-2 lg:col-span-1">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Developing With a Passion While Exploring The World.
          </h1>
          <div className="h-[2px] w-[100px] bg-primary" />
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
        <div className="flex w-full flex-col items-center gap-3">
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
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start gap-10 py-24">
      <div className="flex flex-col items-center justify-start gap-5">
        <p className="medium-sentences text-center">
          {"What Services I'm Providing"}
        </p>
        <p className="normal-sentences text-center">
          Comprehensive Web Development Solutions
        </p>
        <div className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="flex flex-col items-stretch justify-center gap-5 md:flex-row">
        {service_items.map((item, index) => {
          return (
            <Fragment key={String(index) + "service_items"}>
              <Card className="flex flex-col items-center justify-between">
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
          );
        })}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-start gap-10 py-24">
      <div className="flex w-[85%] flex-col items-center justify-start gap-5">
        <p className="medium-sentences text-center">Latest Project</p>
        <p className="normal-sentences text-center">
          Innovative Solutions for Modern Challenges
        </p>
        <div className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-5 px-2 md:flex-row">
        {[1, 2, 3].map((_, index) => {
          return (
            <Fragment key={String(index) + "portfolio_items"}>
              <div className="rounded-xl border border-border">
                <Image src={gedongarum} alt="image" className="rounded-xl" />
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
