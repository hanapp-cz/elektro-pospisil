import * as React from 'react';

import Link from 'next/link';

import { SECTIONS } from '@/config/config';
import { cn } from '@/utils/cn';

import styles from './NavLinks.module.css';

type TProps = NoChildren & {
  className?: string;
  onLinkClick?: PropsOf<typeof Link>["onClick"];
};

export const NavLinks: React.FC<TProps> = ({ className, onLinkClick }) => {
  return (
    <ul className={cn("flex gap-8", className)}>
      {Object.values(SECTIONS).map((section) => (
        <li className={styles.link} key={section.id}>
          <Link onClick={onLinkClick} href={`#${section.id}`}>
            {section.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
