import Section1Bg1 from "@/assets/section-1-bg1.jpg";
import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "@/components/icons/social-media";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import { Fragment } from "react";

const AboutPage = () => {
  const page_sections = [
    <HeaderSection key="header_section" />,
    <AboutSection key="about_section" />,
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
};

export default AboutPage;

const HeaderSection = () => {
  return (
    <div className="large-sentences mx-auto flex w-[85%] flex-col items-center justify-center gap-5 py-32">
      <h1>About Me</h1>
      <div className="h-[2px] w-[100px] bg-primary" />
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="mx-auto flex w-[85%] items-center justify-start space-y-14 py-24">
      <div className="grid grid-cols-1 items-start justify-start gap-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full items-center justify-start md:justify-end">
          <div className="border-image rounded-md">
            <Image
              src={Section1Bg1}
              alt="section 1 bg 1"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
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
          <div className="normal-sentences flex flex-col gap-2">
            <p>{"Let's talk with me."}</p>
            <p>contact@domain.com</p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-3 md:col-span-2 lg:col-span-1">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            I Create Products Not Just Arts
          </h1>
          <div className="h-[2px] w-[100px] bg-primary" />
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
          <div className="mt-3 flex w-full gap-3">
            <Instagram />
            <Twitter />
            <Linkedin />
            <Mail />
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            I Create Products Not Just Arts
          </h1>
          <div className="h-[2px] w-[100px] bg-primary" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipisci elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Button>Download CV</Button>
        </div>
        <div className="space-y-7 lg:col-span-2">
          <p className="w-full rounded-xl bg-primary px-4 py-2">Typescript</p>
          <p className="w-full rounded-xl bg-primary px-4 py-2">Typescript</p>
          <p className="w-full rounded-xl bg-primary px-4 py-2">Typescript</p>
          <p className="w-full rounded-xl bg-primary px-4 py-2">Typescript</p>
        </div>
      </div>
    </div>
  );
};
