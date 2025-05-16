import * as React from 'react';

import cctv from '../../public/images/cctv.png';
import elektroinstalace from '../../public/images/elektroinstalace.png';
import revize from '../../public/images/revize.png';
import { Section } from './Section';
import { Service } from './Service';

type TProps = NoChildren;

const services = [
  {
    label: "Zabezpečení",
    image: cctv,
    alt: "bezpečnostní kamera",
    description:
      "Instalujeme zabezpečovací a kamerové systémy a další slaboproudé technologie.",
  },

  {
    label: "Elektroinstalace",
    image: elektroinstalace,
    alt: "elektrikářské nářadí a materiál",
    description:
      "Provádíme jak kompletní elektroinstalace novostaveb, tak rekonstrukce.",
  },
  {
    label: "Revize",
    image: revize,
    alt: "dokument s razítkem",
    description:
      "Vyhotovíme pro vás revizní zprávu na elektroinstalace, hromosvody i spotřebiče",
  },
];

export const Services: React.FC<TProps> = () => {
  return (
    <Section sectionKey="services" className="bg-white text-center">
      <ul className="flex flex-col md:flex-row w-full justify-around max-w-[1000px] mx-auto gap-x-4 gap-y-16 pt-8">
        {services.map((service) => (
          <Service key={service.label} {...service} />
        ))}
      </ul>
    </Section>
  );
};
