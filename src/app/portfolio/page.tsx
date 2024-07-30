import gedongarum from "@/assets/gedongarum.png";
import clsx from "clsx";
import Image from "next/image";
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
    <div className="flex flex-col justify-start items-center gap-10 mx-auto py-24 w-[85%]">
      <div className="flex flex-col justify-start items-center gap-5">
        <p className="text-center normal-sentences">
          What Service You Will Get From Me
        </p>
        <span className="bg-primary w-[100px] h-[2px]" />
      </div>
      <div className="gap-16 grid grid-cols-1 lg:grid-cols-2 px-2">
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <Fragment key={String(index) + "portfolio_items"}>
                <div className="space-y-3 border border-border rounded-xl">
                  <Image src={gedongarum} alt="image" className="rounded-xl" />
                  <h1 className="medium-sentences">Chat Collect</h1>
                  <h1 className="normal-sentences">Jan 2024 - Feb 2024</h1>
                  <h1 className="normal-sentences">
                    With the release of the OpenAI GPT Store, I decided to build
                    a SaaS which allows users to collect email addresses from
                    their GPT users. This is a great way to build an audience
                    and monetize your GPT API usage.
                  </h1>
                  <div className="flex flex-wrap gap-2 w-[90%] normal-sentences">
                    <p className="bg-primary px-4 rounded-lg py1">Javascrt</p>
                    <p className="bg-primary px-4 rounded-lg py1">Javast</p>
                    <p className="bg-primary px-4 rounded-lg py1">Javascript</p>
                    <p className="bg-primary px-4 rounded-lg py1">afkabfskj</p>
                    <p className="bg-primary px-4 rounded-lg py1">python</p>
                    <p className="bg-primary px-4 rounded-lg py1">github</p>
                    <p className="bg-primary px-4 rounded-lg py1">php</p>
                  </div>
                  <div className="flex gap-5 normal-sentences">
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
    </div>
  );
};
