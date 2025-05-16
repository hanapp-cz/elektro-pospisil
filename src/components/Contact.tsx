import * as React from 'react';

import Link from 'next/link';

import {
  ADDRESS,
  EMAIL,
  NAME,
} from '@/config/config';
import { cn } from '@/utils/cn';

import { PhoneLink } from './PhoneLink';
import { Section } from './Section';

type TProps = NoChildren;

export const Contact: React.FC<TProps> = () => {
  return (
    <Section sectionKey="contact" className="bg-white bg-pattern">
      <div className="flex items-center gap-4">
        <address
          className={cn(
            "flex flex-col gap-2", //
            "not-italic text-lg"
          )}
        >
          <p>{NAME}</p>
          <p>{ADDRESS}</p>
          <p>
            E-mail: <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
          </p>
          <p>
            Telefon: <PhoneLink withPrefix />
          </p>
        </address>
      </div>
    </Section>
  );
};
