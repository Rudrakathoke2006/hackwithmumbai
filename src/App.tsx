import { Navbar }       from '@/components/layout/Navbar';
import { Footer }       from '@/components/layout/Footer';
import { Hero }         from '@/components/sections/Hero';
import { Stats }        from '@/components/sections/Stats';
import { Features }     from '@/components/sections/Features';
import { HowItWorks }   from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing }      from '@/components/sections/Pricing';
import { CTA }          from '@/components/sections/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
