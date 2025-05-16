import * as React from 'react';

import { cn } from '@/utils/cn';

type TClassName = React.HTMLAttributes<HTMLButtonElement>["className"];

type TProps = RequiredChildren & {
  className?: TClassName;
};

const DEFAULT_STYLES = [
  "relative",
  "flex items-center gap-2 md:gap-3",
  "bg-secondary hover:bg-secondary/90 text-white transition-colors",
  "text-lg cursor-pointer",
  "px-8 py-4 rounded-full",
];

export const Button: React.FC<TProps> = ({ children, className }) => {
  return <button className={getButtonStyles(className)}>{children}</button>;
};

export const getButtonStyles = (className?: TClassName) =>
  cn(DEFAULT_STYLES, className);
