import * as React from 'react';

import Link from 'next/link';

import { PHONE } from '@/config/config';

type TProps = Children & {
  withPrefix?: boolean;
  className?: string;
};

export const PhoneLink: React.FC<TProps> = ({
  children,
  className,
  withPrefix = false,
}) => {
  return (
    <Link href={`tel:+420${PHONE.replaceAll(" ", "")}`} className={className}>
      {children}
      {withPrefix ? "+420 " : ""}
      {PHONE}
    </Link>
  );
};
