import { Gavel, Shapes, Users, MessageCircle, HeartHandshake } from 'lucide-react';

const differentials = [
  {
    icon: Gavel,
    title: 'Atuação Técnica e Estratégica',
    text: 'Experiência sólida em compliance, LGPD, governança e gestão de riscos.',
  },
  {
    icon: Shapes,
    title: 'Abordagem Personalizada',
    text: 'Soluções adaptadas à realidade de cada organização, considerando cultura e fator humano.',
  },
  {
    icon: Users,
    title: 'Participação Ativa em Instituições',
    text: 'Atuação em comissões da OAB, IASP e FGV, e projetos voluntários na comunidade.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicação Clara e Orientada a Resultados',
    text: 'Capacitações práticas, linguagem descomplicada e aplicação real dos conceitos.',
  },
  {
    icon: HeartHandshake,
    title: 'Compromisso com Ética e Integridade',
    text: 'Mais do que cumprir regras: transformar cultura e proteger reputações.',
  },
];

export default function Differentials() {
  return (
    <section id="differentials" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Diferenciais da "Ética em Ação"
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa abordagem vai além do convencional para entregar resultados
            excepcionais.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
