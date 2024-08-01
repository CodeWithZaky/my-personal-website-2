import { DATA } from "@/data/resume";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const PortfolioPage = () => {
  const page_sections = [
    <HeaderSection key="header_section" />,
    <PortfolioSection key="portfolio_section" />,
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

export default PortfolioPage;

const HeaderSection = () => {
  return (
    <div className="flex justify-center items-center mx-auto py-32 w-[85%] large-sentences">
      <div className="flex flex-col justify-center items-center gap-3 w-fit">
        <h1>Portfolio</h1>
        <span className="bg-primary mx-auto w-[50%] h-[2px]" />
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-20 mx-auto py-24 w-[85%]">
      <div className="flex flex-col justify-start items-center gap-5">
        <p className="text-center normal-sentences">
          What Service You Will Get From Me
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="gap-28 grid grid-cols-1 lg:grid-cols-2 px-2">
        {DATA.projects.map((item, index) => {
          return (
            <Fragment key={String(index) + "portfolio_items"}>
              <div className="flex flex-col justify-between space-y-3 rounded-xl">
                <Image src={item.image} alt="image" className="rounded-xl" />
                <h1 className="medium-sentences">{item.title}</h1>
                <p className="text-muted-foreground">
                  {item.dates}
                  <span>
                    {" / "}
                    {item.category.title}
                  </span>
                  <span>
                    {" / "}
                    {item.category.note}
                  </span>
                </p>
                <p className="mr-2 lowercase normal-sentences">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 w-[90%] normal-sentences">
                  {item.technologies.map((technologie, index) => (
                    <Fragment key={index}>
                      <p className="bg-primary px-4 rounded-lg text-background dark:text-foreground py1">
                        {technologie}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <div className="flex gap-5 py-1 normal-sentences">
                  {item.links.map((link, index) => (
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
    </div>
  );
};
