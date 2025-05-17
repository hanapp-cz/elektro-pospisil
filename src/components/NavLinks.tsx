import * as React from 'react';

import Link from 'next/link';

import { SECTIONS } from '@/config/config';

import styles from './NavLinks.module.css';

type TProps = NoChildren;

export const NavLinks: React.FC<TProps> = () => {
  return (
    <ul className="flex gap-8">
      {Object.values(SECTIONS).map((section) => (
        <li className={styles.link} key={section.id}>
          <Link href={`#${section.id}`}>{section.name}</Link>
        </li>
      ))}
    </ul>
  );
};
