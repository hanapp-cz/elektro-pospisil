"use client";

import * as React from 'react';

import {
  Menu,
  PhoneCall,
} from 'lucide-react';
import Link from 'next/link';
import { Dialog } from 'radix-ui';

import { NAME } from '@/config/config';
import { cn } from '@/utils/cn';

import { getButtonStyles } from './ButtonLink';
import styles from './Navigation.module.css';
import { NavLinks } from './NavLinks';
import { PhoneLink } from './PhoneLink';

type TProps = NoChildren;

export const Navigation: React.FC<TProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={toggleOpen} modal={false}>
      <div
        className={cn(
          "flex items-center justify-between w-full gap-2 sm:gap-4",
          "relative z-100",
          "p-4 md:p-6"
        )}
      >
        <Dialog.Trigger asChild>
          <button
            className="relative cursor-pointer md:hidden z-200"
            aria-label={`${isOpen ? "Otevřít" : "Zavřít"} menu navigace`}
          >
            {/* touch zone for touch devices only */}
            <span className="size-12 absolute left-1/2 top-1/2 -translate-1/2 [@media(pointer:fine)]:hidden" />
            <Menu />
          </button>
        </Dialog.Trigger>

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
      <Dialog.Portal>
        <Dialog.Content
          className={cn(
            styles.dialog,
            "md:hidden",
            "fixed inset-0 z-80 overflow-auto",
            "p-4 bg-white",
            "flex items-center justify-center",
            "animate-slide-in motion-reduce:animate-none",
            "[data-state='closed']:animate-slide-out"
          )}
        >
          <Dialog.Title className="sr-only">Mobilní navigace</Dialog.Title>
          <NavLinks
            onLinkClick={closeMenu}
            className={cn(
              "flex-col gap-8",
              "text-center text-lg",
              "opacity-0 animate-slide-in-delay",
              "motion-reduce:animate-none motion-reduce:opacity-100"
            )}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
