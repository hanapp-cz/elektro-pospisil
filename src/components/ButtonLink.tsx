import * as React from 'react';

import Link from 'next/link';

import { cn } from '@/utils/cn';

type TLinkProps = PropsOf<typeof Link>;
type TProps = RequiredChildren & TLinkProps;

const DEFAULT_STYLES = [
  "relative",
  "flex items-center gap-2 md:gap-3",
  "bg-secondary hover:bg-secondary/90 text-white transition-colors",
  "text-lg cursor-pointer",
  "px-8 py-4 rounded-full",
];

export const ButtonLink: React.FC<TProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link className={getButtonStyles(className)} {...props}>
      {children}
    </Link>
  );
};

export const getButtonStyles = (className?: TLinkProps["className"]) =>
  cn(DEFAULT_STYLES, className);
