import * as React from "react";

import Link from "next/link";

import { ADDRESS, EMAIL, NAME } from "@/config/config";
import { cn } from "@/utils/cn";

import { ContactForm } from "./ContactForm";
import { PhoneLink } from "./PhoneLink";
import { Section } from "./Section";

type TProps = NoChildren;

export const Contact: React.FC<TProps> = () => {
  return (
    <Section
      sectionKey="contact"
      className="pattern bg-white"
      leftColumn={
        <address
          className={cn(
            "flex flex-col gap-2", //
            "not-italic text-lg"
          )}
        >
          <p>{NAME}</p>
          <p>{ADDRESS}</p>
          <p>
            <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
          </p>
          <p>
            <PhoneLink withPrefix />
          </p>
        </address>
      }
    >
      <div
        className={cn(
          "py-6 px-8",
          "md:justify-self-end",
          "w-full max-w-[550px]",
          "rounded-lg border-primary-light border bg-white/80 shadow-xl"
        )}
      >
        <ContactForm />
      </div>
    </Section>
  );
};
