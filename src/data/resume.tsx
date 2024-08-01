import Gedongarum from "@/assets/gedongarum.png";
import MatrixCalculator from "@/assets/matrix-calculator.png";
import MyPortfolioV1 from "@/assets/my-portfolio-v1.png";
import NumberConverter from "@/assets/number-converter.png";
import { Instagram, Linkedin, Mail } from "@/components/icons/social-media";
import { Database, Github, Globe, Palette, Server } from "lucide-react";

export const DATA = {
  name: "Ahmad Zaky Ubaidillah",
  initials: "AZU",
  url: "https://codewithzaky.vercel.app",
  description:
    "Creating seamless web experiences with creativity and technical skill. From dynamic websites to responsive designs, I bring ideas to life.",
  avatarUrl: "/me.png",
  skills: [
    "Javascript",
    "Typescript",
    "React",
    "NextJs",
    "Trpc",
    "RestApi",
    "T3Stack",
    "Postgres",
    "MySql",
    "SQLite",
    "Tailwind",
    "ShadcnUI",
    "MagicUI",
    "DaisyUI",
  ],
  navbar: [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/portfolio",
      title: "Portfolio",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ],
  services: [
    {
      description: "Frontend Web Development",
      content:
        "Responsive interfaces using React.js, Next.js, and Tailwind CSS with libraries like shadcn UI, daisyUI, and achernity UI.",
      icon: <Palette />,
    },
    {
      description: "Backend Web Development",
      content:
        "Robust backends with Next.js API, tRPC, Prisma ORM, and databases like PostgreSQL, MySQL, and SQLite.",
      icon: <Server />,
    },
    {
      description: "Fullstack Web Development",
      content:
        "End-to-end solutions with the T3 stack and Next.js for comprehensive web development.",
      icon: <Database />,
    },
  ],
  contact: {
    email: "ahmadzakyubaidillah@example.com",
    social: [
      {
        title: "LinkedIn",
        name: "ahmad zaky ubaidillah",
        url: "https://www.linkedin.com/in/ahmad-zaky-ubaidillah",
        icon: <Linkedin />,
      },
      {
        title: "Email",
        name: "ahmadzakyubaidillah",
        url: "mailto:ahmadzakyubaidillah@gmail.com",
        icon: <Mail />,
      },
      {
        title: "Instagram",
        name: "zaky0bed",
        url: "https://www.instagram.com/zaky0bed",
        icon: <Instagram />,
      },
      {
        title: "GitHub",
        name: "CodeWithZaky",
        url: "https://github.com/CodeWithZaky",
        icon: <Github />,
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "gedongarum",
      dates: "Feb 2024 - Jul 2024",
      category: {
        title: "college project",
        note: "4rd semester",
      },
      description:
        "This website was constructed as part of a college assignment to create an informational website about the hometown village of the student",
      technologies: ["NEXT JS", "TAILWIND CSS", "SHADCN UI"],
      links: [
        {
          type: "Website",
          icon: <Globe width={20} />,
          href: "https://gedongarum.vercel.app/",
        },
        {
          type: "Source",
          icon: <Github width={20} />,
          href: "https://github.com/CodeWithZaky/informasi-gedongarum",
        },
      ],
      image: Gedongarum,
    },
    {
      id: 2,
      title: "matrix-calculator",
      dates: "Feb 2023 - Jul 2023",
      category: {
        title: "college project",
        note: "2nd semester",
      },
      description:
        "This website was built as part of a college assignment to create an application for the addition, subtraction, and multiplication of two matricesa",
      technologies: ["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"],
      links: [
        {
          type: "Website",
          icon: <Globe width={20} />,
          href: "https://matrixcalculator.vercel.app",
        },
        {
          type: "Source",
          icon: <Github width={20} />,
          href: "https://github.com/CodeWithZaky/matrix-calculator",
        },
      ],
      image: MatrixCalculator,
    },
    {
      id: 3,
      title: "number-converter",
      dates: "Feb 2023 - Jul 2023",
      category: {
        title: "college project",
        note: "2nd semester",
      },
      description:
        "This website was developed as part of a college assignment to create an application for converting decimal, binary, octal, and hexadecimal numbers.",
      technologies: ["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"],
      links: [
        {
          type: "Website",
          icon: <Globe width={20} />,
          href: "https://number-converter-2.vercel.app",
        },
        {
          type: "Source",
          icon: <Github width={20} />,
          href: "https://github.com/CodeWithZaky/number-converter",
        },
      ],
      image: NumberConverter,
    },
    {
      id: 4,
      title: "my personal website",
      dates: "Apr 2023 - Sep 2023",
      category: {
        title: "personal project",
        note: "portfolio",
      },
      description:
        "PERSONAL WEBSITE FOR INFORMATION ABOUT ME, ESPECIALLY IN THE FIELD OF TECHNOLOGY",
      technologies: ["NEXT JS", "TAILWIND CSS", "FRAMERMOTION"],
      links: [
        {
          type: "Website",
          icon: <Globe width={20} />,
          href: "https://zaky.vercel.app",
        },
        {
          type: "Source",
          icon: <Github width={20} />,
          href: "https://github.com/CodeWithZaky/my-personal-website",
        },
      ],
      image: MyPortfolioV1,
    },
  ],
} as const;
