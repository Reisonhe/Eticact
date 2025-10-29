import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function Founder() {
  const founderImage = PlaceHolderImages.find(
    (img) => img.id === 'founder-fernanda-dutra'
  );

  return (
    <section id="founder" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden">
            <div className="grid md:grid-cols-3 items-center">
                <div className="md:col-span-2 p-8 md:p-12">
                    <blockquote className="text-xl font-medium italic md:text-2xl">
                        “Integridade é o que constrói confiança. E confiança é o que sustenta negócios duradouros.”
                    </blockquote>
                    <p className="mt-6 font-bold text-lg text-primary">Fernanda Dutra</p>
                    <p className="text-sm text-muted-foreground">Fundadora da Ética em Ação</p>
                </div>
                 {founderImage && (
                    <div className="relative h-64 w-full md:h-full">
                        <Image
                            src={founderImage.imageUrl}
                            alt={founderImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={founderImage.imageHint}
                        />
                    </div>
                )}
            </div>
        </Card>
      </div>
    </section>
  );
}
