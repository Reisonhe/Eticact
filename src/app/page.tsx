import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Differentials from '@/components/sections/differentials';
import Founder from '@/components/sections/founder';
import AiAdvisor from '@/components/sections/ai-advisor';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <AiAdvisor />
        <Founder />
      </main>
      <Footer />
    </div>
  );
}
