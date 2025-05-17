import * as React from 'react';

import { cn } from '@/utils/cn';

import { PhotoCollage } from './PhotoColage';
import { Section } from './Section';

type TProps = NoChildren;

export const About: React.FC<TProps> = () => {
  return (
    <Section
      sectionKey="about"
      titleColor="text-neutral-200"
      className="bg-secondary text-white"
    >
      <div
        className={cn(
          "mx-auto sm:max-w-4/5",
          "flex flex-col items-center gap-4", // flex on mobile
          "md:block md:max-w-[calc(--spacing(80)+--spacing(8)+65ch)] md:[&>p]:not-last:mb-2", // float layout on larger displays
          "leading-loose text-pretty"
        )}
      >
        <PhotoCollage />

        <p>
          Jsme dva elektrikáři, oba s více než dvacetiletou praxí. Zabýváme se
          montáží a revizemi zabezpečovacích systémů a elektroinstalací.
        </p>
        <p>
          Nabízíme instalace zabezpečovacích a kamerových systémů a dalších
          slaboproudých technologií jako jsou datové a televizní sítě, požární
          signalizace, komunikační a identifikační systémy. Provádíme také
          klasické elektroinstalace domů, bytů i komerčních objektů, včetně
          hromosvodů.
        </p>
        <p>
          Umíme pro vás připravit návrh podle projektové dokumentace či vašich
          požadavků a na hotové dílo poskytnout revizi.
        </p>
        <p>
          Působíme nejčastěji v okolí Brna a Vyškova, ale neváhejte nás
          kontaktovat i pokud jste odjinud.
        </p>
      </div>
    </Section>
  );
};
