import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import {
  SECTIONS,
  WEB,
} from '@/config/config';

export default function Home() {
  return (
    <main className="min-h-full">
      <Header />
      <Hero />

      <Services />
      <About />
      <Contact />

      {/* TODO */}
      <footer className="p-6 text-center text-sm text-secondary bg-white border-t border-primary-light/30">
        <a>{WEB}</a>{" "}
        {Object.values(SECTIONS)
          .map((section) => section.name)
          .join(" ")}
      </footer>
    </main>
  );
}
