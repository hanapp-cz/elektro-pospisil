import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-full">
      <Header />
      <Hero />

      <Services />
      <About />
      <Contact />

      <Footer />
    </main>
  );
}
