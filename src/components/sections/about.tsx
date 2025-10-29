import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Flag, Gem } from 'lucide-react';

const aboutData = {
  mission: {
    icon: Flag,
    title: 'Missão',
    text: 'Capacitar empresas a adotarem práticas éticas, legais e transparentes, por meio de programas de Compliance e soluções personalizadas que garantam conformidade com as normas de privacidade e segurança de dados.',
  },
  vision: {
    icon: Eye,
    title: 'Visão',
    text: 'Ser reconhecida como referência em consultoria de Compliance e LGPD, com excelência na gestão de riscos e proteção de dados, em diferentes setores e com base em uma comunicação assertiva.',
  },
  values: {
    icon: Gem,
    title: 'Valores',
    items: [
      'Integridade: Compromisso com a honestidade e transparência.',
      'Excelência: Busca contínua por qualidade e resultados.',
      'Empoderamento: Capacitação de clientes para decisões conscientes.',
      'Inovação: Adoção de abordagens criativas e tecnológicas.',
      'Colaboração: Atuação em parceria para soluções eficazes.',
    ],
  },
};

export default function About() {
  return (
    <section id="about" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex-row items-center gap-4">
              <aboutData.mission.icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">{aboutData.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{aboutData.mission.text}</p>
            </CardContent>
          </Card>
          <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex-row items-center gap-4">
              <aboutData.vision.icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">{aboutData.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{aboutData.vision.text}</p>
            </CardContent>
          </Card>
          <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex-row items-center gap-4">
              <aboutData.values.icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">{aboutData.values.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {aboutData.values.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
