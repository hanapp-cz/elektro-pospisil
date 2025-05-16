import * as React from 'react';

import Image from 'next/image';

import { cn } from '@/utils/cn';

import electrician from '../../public/images/electrician.png';
import { Button } from './Button';

type TProps = NoChildren;

export const Hero: React.FC<TProps> = () => {
  return (
    <section
      className={cn(
        "[--pattern-contrast:10%] [--color-gradient:linear-gradient(white,var(--color-primary-light))]",
        "relative bg-pattern",
        "flex flex-col gap-y-4 md:flex-row items-center",
        "px-6 md:pl-16 xl:pl-32",
        "py-8",
        "md:min-h-[80vh]"
      )}
    >
      <div
        className={cn(
          "flex-1",
          "flex flex-col items-center md:items-start",
          "text-center md:text-left",
          "md:ml-6 md:-translate-y-16"
        )}
      >
        <h2 className="text-4xl md:text-[6.5vw]/[1.2] lg:text-7xl font-bold mb-4 w-fit max-w-[20ch]">
          Alarmy, revize, elektroinstalace
        </h2>
        <p className="mb-6 ml-1 text-lg">
          Zkušení elektrikáři v Brně, Vyškově a okolí.
        </p>
        <Button>Naše služby</Button>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-primary-dark/50",
          "[clip-path:polygon(0%_90%,40%_80%,70%_100%,0%_100%)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-primary-light/50",
          "[clip-path:polygon(40%_80%,100%_64%,100%_100%,70%_100%)]"
        )}
      />
      <div className={`relative flex-1 flex justify-center`}>
        <Image
          src={electrician}
          alt="" // decorative
          className="w-full h-auto max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
        />
      </div>
    </section>
  );
};
