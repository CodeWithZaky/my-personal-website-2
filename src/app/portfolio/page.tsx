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
    <div className="large-sentences mx-auto flex w-[85%] items-center justify-center py-24">
      <div className="flex w-fit flex-col items-center justify-center gap-3">
        <h1>Portfolio</h1>
        <span className="mx-auto h-[2px] w-[50%] bg-primary" />
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-start gap-20 py-24">
      <div className="flex flex-col items-center justify-start gap-5">
        <p className="normal-sentences text-center">
          New projects are on my GitHub! Check them out{" "}
          <Link
            className="underline"
            href="https://github.com/codewithzaky"
            target="_blank"
          >
            here
          </Link>
        </p>
        <span className="h-[2px] w-[100px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 gap-28 px-2 lg:grid-cols-2">
        {DATA.projects.map((item, index) => {
          return (
            <Fragment key={String(index) + "portfolio_items"}>
              <div className="flex flex-col justify-between space-y-3 rounded-md">
                <Image src={item.image} alt="image" className="rounded-md" />
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
                <p className="normal-sentences mr-2 lowercase">
                  {item.description}
                </p>
                <div className="normal-sentences flex w-[90%] flex-wrap gap-2">
                  {item.technologies.map((technologie, index) => (
                    <Fragment key={index}>
                      <p className="py1 rounded-md bg-primary px-4 text-background dark:text-foreground">
                        {technologie}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <div className="normal-sentences flex gap-5 py-1">
                  {item.links.map((link, index) => (
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
    </div>
  );
};
