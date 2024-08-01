import { Card } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";
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
    <div className="flex justify-center items-center mx-auto py-32 w-[85%] large-sentences">
      <div className="flex flex-col justify-center items-center gap-3 w-fit">
        <h1>Contact</h1>
        <span className="bg-primary mx-auto w-[50%] h-[2px]" />
      </div>
    </div>
  );
};

const contact_items = [
  {
    title: DATA.contact.social.Instagram.title,
    name: DATA.contact.social.Instagram.name,
    icon: DATA.contact.social.Instagram.icon,
    url: DATA.contact.social.Instagram.url,
  },
  {
    title: DATA.contact.social.LinkedIn.title,
    name: DATA.contact.social.LinkedIn.name,
    icon: DATA.contact.social.LinkedIn.icon,
    url: DATA.contact.social.LinkedIn.url,
  },
  {
    title: DATA.contact.social.GitHub.title,
    name: DATA.contact.social.GitHub.name,
    icon: DATA.contact.social.GitHub.icon,
    url: DATA.contact.social.GitHub.url,
  },
  {
    title: DATA.contact.social.email.title,
    name: DATA.contact.social.email.name,
    icon: DATA.contact.social.email.icon,
    url: DATA.contact.social.email.url,
  },
];

const ContactSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 mx-auto py-20 w-[85%] text-center">
      <div className="justify-center items-center gap-5 lg:gap-10 grid grid-cols-2 lg:grid-cols-4 w-full text-center">
        {contact_items.map((item, index) => {
          return (
            <Fragment key={String(index) + "contact-items"}>
              <Card className="flex flex-col justify-between items-center gap-3 px-10 py-5">
                <>{item.icon}</>
                <p className="normal-sentences">{item.title}</p>
                <p className="normal-sentences">{item.name}</p>
                <a href={item.url} target="_blank">
                  <ExternalLink />
                </a>
              </Card>
            </Fragment>
          );
        })}
      </div>
      <p className="italic normal-sentences">
        {`" You can't know what you don't know? Get to know it first, and feel the
        spark! "`}
      </p>
    </div>
  );
};
