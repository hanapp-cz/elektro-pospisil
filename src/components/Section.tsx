import * as React from "react";

import { SECTIONS } from "@/config/config";
import { cn } from "@/utils/cn";

type TSectionKey = keyof typeof SECTIONS;

type TProps = RequiredChildren & {
  sectionKey: TSectionKey;
  className?: string;
  titleColor?: string;
  leftColumn?: React.ReactNode;
};

export const Section: React.FC<TProps> = ({
  children,
  className,
  sectionKey,
  titleColor = "text-primary-dark",
  leftColumn,
}) => {
  const section = SECTIONS[sectionKey];
  const isHalved = leftColumn !== undefined && leftColumn !== null;

  return (
    <section id={section.id} className={cn("py-16 xl:py-28", className)}>
      <div
        className={cn(
          "content",
          isHalved &&
            "grid md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto_1fr] gap-x-12"
        )}
      >
        <h3
          className={cn(
            "uppercase tracking-wide font-semibold mb-8 text-center",
            titleColor,
            isHalved && "col-start-1 row-start-1 md:text-left xl:ml-32"
          )}
        >
          {section.name}
        </h3>
        <p
          className={cn(
            "text-2xl font-semibold mb-12 max-w-[22ch] mx-auto text-center",
            isHalved && "col-start-1 row-start-2 md:text-left md:mx-0 xl:ml-32"
          )}
        >
          {section.subtitle}
        </p>
        {isHalved && (
          <div className="col-start-1 row-start-3 mb-8 ml-2 md:m-0 xl:ml-32">
            {leftColumn}
          </div>
        )}

        <div className={cn(isHalved && "row-span-3 -mx-6 sm:mx-0")}>
          {children}
        </div>
      </div>
    </section>
  );
};
