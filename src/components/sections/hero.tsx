import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Integridade que Constrói Confiança.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Transformamos a cultura da sua empresa com soluções de Compliance e LGPD personalizadas, protegendo sua reputação e sustentando negócios duradouros.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="#services">Nossos Serviços</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
