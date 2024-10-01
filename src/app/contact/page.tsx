import { Card } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const ContactPage = () => {
  const page_sections = [
    <HeaderSection key="header_section" />,
    <ContactSection key="contact_section" />,
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

export default ContactPage;

const HeaderSection = () => {
  return (
    <div className="large-sentences mx-auto flex w-[85%] items-center justify-center py-24">
      <div className="flex w-fit flex-col items-center justify-center gap-3">
        <h1>Contact</h1>
        <span className="mx-auto h-[2px] w-[50%] bg-primary" />
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-center gap-20 py-20 text-center">
      <div className="grid w-full grid-cols-2 items-stretch justify-center gap-5 text-center lg:grid-cols-4 lg:gap-10">
        {DATA.contact.social.map((item, index) => {
          return (
            <Fragment key={String(index) + "contact-items"}>
              <Card className="flex flex-col items-center justify-between gap-3 px-10 py-5">
                <>{item.icon}</>
                <p className="normal-sentences">{item.title}</p>
                <p className="normal-sentences">{item.name}</p>
                <Link href={item.url} target="_blank">
                  <ExternalLink />
                </Link>
              </Card>
            </Fragment>
          );
        })}
      </div>
      <p className="normal-sentences italic">
        {`" You can't know what you don't know? Get to know it first, and feel the
        spark! "`}
      </p>
    </div>
  );
};
