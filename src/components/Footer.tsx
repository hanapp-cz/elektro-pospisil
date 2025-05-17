import * as React from 'react';

import Link from 'next/link';

import {
  NAME,
  WEB,
} from '@/config/config';
import { cn } from '@/utils/cn';

import { NavLinks } from './NavLinks';

type TProps = NoChildren;

export const Footer: React.FC<TProps> = () => {
  return (
    <footer
      className={cn(
        "pt-12 pb-8",
        "bg-white pattern [--pattern-contrast:2%]",
        "text-sm text-secondary",
        "border-t border-primary-light/30 shadow-2xl shadow-secondary"
      )}
    >
      <div className="content flex flex-col gap-6 sm:flex-row justify-between items-center sm:items-end">
        <div className="text-center sm:text-left">
          <p className="font-medium text-base mb-1">{NAME}</p>
          <p>IČ: 88362817</p>
          <p>DIČ: CZ8603304237</p>
        </div>

        <nav
          className={cn("pt-4 sm:p-0", "border-t border-current sm:border-0")}
        >
          <NavLinks />
        </nav>

        <Link href={"/"}>{WEB}</Link>
      </div>
    </footer>
  );
};
