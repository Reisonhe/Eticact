import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  Database,
  UserCog,
  FileSearch,
  Megaphone,
  Presentation,
} from 'lucide-react';

const services = [
    {
        icon: ShieldCheck,
        title: "Implantação de Compliance",
        description: "Garantimos que empresas atuem em conformidade com as leis, regulamentos e padrões éticos, independentemente do porte.",
        details: {
            observation: "O Compliance é um processo contínuo e deve evoluir com as mudanças regulatórias e do mercado.",
            steps: [
                "Análise de Riscos: identificação de áreas sensíveis e vulnerabilidades.",
                "Estrutura Organizacional: definição de papéis e responsabilidades.",
                "Comitê de Compliance: instituição de órgão deliberativo.",
                "Código de Conduta: criação de documento claro e objetivo.",
                "Canais de Comunicação: implantação de ferramentas para relatos seguros.",
                "Capacitação dos Colaboradores: treinamentos sobre conduta e responsabilidade.",
                "Monitoramento e Avaliação: auditorias, revisões e ajustes contínuos."
            ]
        }
    },
    {
        icon: Database,
        title: "Implantação de LGPD",
        description: "Visamos proteger os dados pessoais e garantir transparência nas relações entre empresas e titulares.",
        details: {
            observation: "A LGPD não é um projeto pontual, e sim um compromisso de longo prazo.",
            steps: [
                "Conscientização e Comprometimento: envolvimento da liderança e treinamentos.",
                "Mapeamento de Dados: identificação e categorização dos dados tratados.",
                "Análise de Riscos: avaliação de impactos e vulnerabilidades.",
                "Políticas e Procedimentos: estruturação de documentos de privacidade.",
                "Nomeação de DPO: definição de um encarregado de dados.",
                "Treinamentos Contínuos: reciclagens e comunicação interna.",
                "Avaliação de Fornecedores: verificação de contratos e terceiros.",
                "Monitoramento e Auditoria: garantia de aderência contínua.",
                "Resposta a Incidentes: plano de ação para vazamentos e notificações."
            ]
        }
    },
    {
        icon: UserCog,
        title: "DPO as a Service",
        description: "Garante o cumprimento da LGPD com eficiência técnica, imparcialidade e menor custo através de um DPO terceirizado.",
        details: {
            observation: "Evita riscos legais e reputacionais, assegura governança sobre dados pessoais e traz orientação especializada.",
            steps: [
                "Supervisão do Tratamento de Dados: alinhamento com regulamentações.",
                "Análise de Riscos: identificação e mitigação de vulnerabilidades.",
                "Promoção da Cultura de Privacidade: capacitação e engajamento.",
                "Ponto de Contato com a ANPD e Titulares: mediação entre as partes.",
                "Treinamentos Internos: disseminação de boas práticas.",
                "Consultoria Técnica: apoio contínuo à conformidade."
            ]
        }
    },
    {
        icon: FileSearch,
        title: "Due Diligence",
        description: "Auditoria e investigação essencial antes de transações como fusões, aquisições, investimentos e parcerias.",
        details: {
            observation: "Funciona como uma lente que revela os bastidores de uma organização, permitindo decisões mais estratégicas e seguras.",
            steps: [
                "Financeira: análise de caixa, dívidas, projeções e demonstrações.",
                "Legal: revisão contratual, passivos judiciais e obrigações.",
                "Operacional: avaliação da governança, estrutura e controles.",
                "Comercial: análise de mercado, clientes, concorrência e estratégia."
            ]
        }
    },
    {
        icon: Megaphone,
        title: "Canal de Denúncias",
        description: "Estruturação de um canal para promover transparência, responsabilidade e uma cultura baseada na integridade.",
        details: {
            observation: "Não apenas detecta desvios, mas reforça o compromisso da organização com a ética e a escuta ativa.",
            steps: [
                "Definição de Objetivos: identificar irregularidades e fomentar condutas éticas.",
                "Escolha de Solução Especializada: fornecedor externo focado em segurança.",
                "Formato Acessível: e-mail, formulário online, telefone ou app.",
                "Fluxo de Tratamento: triagem, apuração e resolutividade com imparcialidade.",
                "Comunicação e Treinamento: campanhas para engajamento e credibilidade."
            ]
        }
    },
    {
        icon: Presentation,
        title: "Treinamentos Corporativos",
        description: "Consolidamos uma cultura organizacional ética e engajamos colaboradores com normas e diretrizes de compliance e privacidade.",
        details: {
            observation: "Todos os treinamentos acompanham materiais de apoio, certificados e, quando necessário, avaliação de aprendizado.",
            steps: [
                "Abordagem Personalizada: desenhado conforme o perfil da organização.",
                "Temas Disponíveis: Compliance, LGPD, Prevenção ao Assédio, e mais.",
                "Formato dos Treinamentos: Online (ao vivo/gravado), Presencial e Híbrido."
            ]
        }
    }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Serviços Oferecidos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluções completas e personalizadas para fortalecer a integridade e a
            segurança da sua empresa.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="pt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Etapas Essenciais</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.details.steps.map((step, i) => (
                           <li key={i} className="flex items-start">
                             <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                             <span>{step}</span>
                           </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-xs italic text-muted-foreground/80">{service.details.observation}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
