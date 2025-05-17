import * as React from 'react';

import {
  Menu,
  PhoneCall,
} from 'lucide-react';
import Link from 'next/link';

import { NAME } from '@/config/config';
import { cn } from '@/utils/cn';

import { getButtonStyles } from './Button';
import { NavLinks } from './NavLinks';
import { PhoneLink } from './PhoneLink';

type TProps = NoChildren;

export const Navigation: React.FC<TProps> = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full gap-2 sm:gap-4",
        "relative z-100",
        "p-4 md:p-6"
      )}
    >
      <button
        className="relative cursor-pointer md:hidden"
        aria-label="Zobrazit/skrýt menu"
      >
        {/* touch zone for touch devices only */}
        <span className="size-12 absolute left-1/2 top-1/2 -translate-1/2 [@media(pointer:fine)]:hidden" />
        <Menu />
      </button>

      <h1 className="w-max sm:text-lg md:text-2xl font-medium md:font-semibold relative z-1">
        <Link href={`/`}>{NAME}</Link>
      </h1>

      <nav className="hidden md:flex inset-0 absolute justify-center items-center">
        <NavLinks />
      </nav>
      <PhoneLink
        className={getButtonStyles(
          cn(
            "ml-auto md:ml-0",
            "px-4 py-2 md:px-8 md:py-4",
            "text-sm sm:text-base md:text-lg"
          )
        )}
      >
        <PhoneCall className="size-4 lg:size-5" />
      </PhoneLink>
    </div>
  );
};
