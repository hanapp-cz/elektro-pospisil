import * as React from 'react';

import Image from 'next/image';

import { cn } from '@/utils/cn';

import styles from './Service.module.css';

type TProps = NoChildren & {
  label: string;
  description: string;
  image: PropsOf<typeof Image>["src"];
  alt: string;
};

export const Service: React.FC<TProps> = ({
  label,
  description,
  image,
  alt,
}) => {
  return (
    <li
      className={cn(
        `flex flex-col gap-4 md:gap-8 items-center`,
        styles.service
      )}
    >
      <div className="relative">
        <Image src={image} alt={alt} width={120} className={`relative z-10`} />
        <div className={styles.blob} />
      </div>
      <div className="text-center max-w-60">
        <p className="font-medium text-lg mb-2">{label}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};
