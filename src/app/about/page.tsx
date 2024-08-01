import Section1Bg1 from "@/assets/section-1-bg1.jpg";
import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "@/components/icons/social-media";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
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
    <div className="large-sentences mx-auto flex w-[85%] items-center justify-center py-32">
      <div className="flex w-fit flex-col items-center justify-center gap-3">
        <h1>About Me</h1>
        <span className="mx-auto h-[2px] w-[50%] bg-primary" />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col space-y-14 py-24">
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full items-center justify-center">
          <div className="border-image rounded-md">
            <Image
              src={Section1Bg1}
              alt="Section 1 Background"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Developing with Passion and Curiosity
          </h1>
          <span className="h-[2px] w-[100px] bg-primary" />
          <p className="normal-sentences">
            As a full-stack web developer with over two years of experience, I
            specialize in crafting dynamic, responsive web applications. My
            skill set includes React.js and Next.js for front-end development,
            complemented by Tailwind CSS and a range of component libraries for
            sleek, modern design. I leverage the T3 stack for building scalable,
            efficient applications, and stay updated with the latest industry
            trends.
          </p>
          <div className="normal-sentences flex flex-col gap-2">
            <p>{"Let's Connect."}</p>
            <p>contact@domain.com</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 md:col-span-2 lg:col-span-1">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Balancing Academics with Real-World Projects
          </h1>
          <span className="h-[2px] w-[100px] bg-primary" />
          <p className="normal-sentences">
            Currently a 5th-semester student at Universitas Islam Lamongan,
            class of 2022, I balance academic learning with real-world projects.
            My university experience is rich with hands-on projects and
            collaborations that enhance my skills and deepen my practical
            understanding.
          </p>
          <p className="normal-sentences">
            My focus is on developing web solutions that exceed client
            expectations and deliver exceptional user experiences. I aim to make
            a meaningful impact on the digital landscape with high-quality,
            user-centric applications.
          </p>
          <div className="mt-3 flex gap-3">
            <Instagram />
            <Twitter />
            <Linkedin />
            <Mail />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Crafting Solutions for Real-World Challenges
          </h1>
          <span className="h-[2px] w-[100px] bg-primary" />
          <p className="normal-sentences">
            My passion lies in creating solutions that address real-world
            challenges. I focus on understanding core issues and developing
            innovative strategies to tackle them, leveraging technology to make
            a positive impact with intuitive, user-friendly products.
          </p>
          <Button className="w-fit">Download CV</Button>
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-3 lg:w-[75%]">
            {DATA.skills.map((skill) => (
              <p key={skill} className="w-fit rounded-xl bg-primary px-4 py-2">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
