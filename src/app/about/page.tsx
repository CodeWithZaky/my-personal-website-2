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
    <div className="flex justify-center items-center mx-auto py-32 w-[85%] large-sentences">
      <div className="flex flex-col justify-center items-center gap-3 w-fit">
        <h1>About Me</h1>
        <span className="bg-primary mx-auto w-[50%] h-[2px]" />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="flex justify-start items-center space-y-14 mx-auto py-24 w-[85%]">
      <div className="justify-start items-start gap-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex justify-start md:justify-end items-center w-full">
          <div className="border-image rounded-md">
            <Image
              src={Section1Bg1}
              alt="section 1 bg 1"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
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
          <div className="flex flex-col gap-2 normal-sentences">
            <p>{"Let's talk with me."}</p>
            <p>contact@domain.com</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 md:col-span-2 lg:col-span-1 w-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            I Create Products Not Just Arts
          </h1>
          <span className="bg-primary w-[100px] h-[2px]" />
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
          <div className="flex gap-3 mt-3 w-full">
            <Instagram />
            <Twitter />
            <Linkedin />
            <Mail />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            I Create Products Not Just Arts
          </h1>
          <span className="bg-primary w-[100px] h-[2px]" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipisci elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Button className="w-fit">Download CV</Button>
        </div>
        <div className="space-y-7 lg:col-span-2">
          <div className="flex flex-wrap justify-start items-start gap-3 lg:w-[75%]">
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">Typescript</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">Typescri</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">
              Typescridddpt
            </p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">Typescript</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">Typescrt</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">Typipt</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">jfnajfjnj</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">sfask</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">Tyescript</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">Typdescript</p>
            <p className="bg-primary px-4 py-2 rounded-xl w-fit">sfask</p>
          </div>
        </div>
      </div>
    </div>
  );
};
