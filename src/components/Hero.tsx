import * as React from 'react';

import Image from 'next/image';

import { cn } from '@/utils/cn';

import electrician from '../../public/images/electrician.png';
import { Button } from './Button';
import styles from './Hero.module.css';

type TProps = NoChildren;

export const Hero: React.FC<TProps> = () => {
  return (
    <section className={cn(styles.hero, "relative pattern", "lg:min-h-[80vh]")}>
      <div
        className={cn(
          "xl:container xl:mx-auto",
          "flex flex-col gap-y-12 md:flex-row items-center",
          "md:pl-16 xl:pl-32",
          "py-16 md:py-20"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center md:items-start",
            "text-center md:text-left",
            "md:ml-6 md:-translate-y-16"
          )}
        >
          <h2 className="text-4xl md:text-[6.5vw]/[1.2] lg:text-7xl font-bold mb-4 max-w-[12ch]">
            Alarmy, revize, elektroinstalace
          </h2>
          <p className="mb-6 ml-1 text-lg">
            Zkušení elektrikáři v Brně, Vyškově a okolí.
          </p>
          <Button>Naše služby</Button>
        </div>

        <div
          className={cn(
            "absolute inset-0 bg-primary-dark/50", //
            styles.polygon1
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-primary-light/50", //
            styles.polygon2
          )}
        />

        <div className={`relative flex flex-1 justify-center`}>
          <Image
            src={electrician}
            alt="" // decorative
            className="w-full h-auto max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};
