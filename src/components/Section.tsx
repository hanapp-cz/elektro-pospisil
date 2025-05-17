import * as React from 'react';

import { SECTIONS } from '@/config/config';
import { cn } from '@/utils/cn';

type TSectionKey = keyof typeof SECTIONS;

type TProps = RequiredChildren & {
  sectionKey: TSectionKey;
  className?: string;
  titleColor?: string;
};

export const Section: React.FC<TProps> = ({
  children,
  className,
  sectionKey,
  titleColor = "text-primary-dark",
}) => {
  const section = SECTIONS[sectionKey];

  return (
    <section id={section.id} className={cn("py-16 xl:py-28", className)}>
      <div className="content">
        <h3
          className={cn(
            "uppercase tracking-wide font-semibold mb-8 text-center",
            titleColor
          )}
        >
          {section.name}
        </h3>
        <p className="text-2xl font-semibold mb-12 max-w-[22ch] mx-auto text-center">
          {section.subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};
