"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Bot, FileText, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getComplianceRecommendations,
  getComplianceReport,
} from "@/app/actions";
import type { GenerateComplianceRecommendationsOutput } from "@/ai/flows/generate-compliance-recommendations";

const formSchema = z.object({
  companyProfile: z
    .string()
    .min(50, "Descreva o perfil da empresa com pelo menos 50 caracteres."),
  complianceRequirements: z
    .string()
    .min(50, "Descreva os requisitos com pelo menos 50 caracteres."),
  existingComplianceEfforts: z.string().optional(),
});

export default function AiAdvisor() {
  const { toast } = useToast();
  const [recommendations, setRecommendations] =
    useState<GenerateComplianceRecommendationsOutput | null>(null);
  const [report, setReport] = useState<string | null>(null);
  const [isGeneratingRecommendations, setIsGeneratingRecommendations] =
    useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyProfile: "",
      complianceRequirements: "",
      existingComplianceEfforts: "",
    },
  });

  async function onRecommendationsSubmit(values: z.infer<typeof formSchema>) {
    setIsGeneratingRecommendations(true);
    setRecommendations(null);
    try {
      const result = await getComplianceRecommendations(values);
      setRecommendations(result);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao gerar recomendações",
        description:
          "Não foi possível obter as recomendações. Tente novamente.",
      });
    } finally {
      setIsGeneratingRecommendations(false);
    }
  }

  async function onReportGenerate() {
    setIsGeneratingReport(true);
    setReport(null);
    try {
      const result = await getComplianceReport();
      setReport(result);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao gerar relatório",
        description: "Não foi possível gerar o relatório. Tente novamente.",
      });
    } finally {
      setIsGeneratingReport(false);
    }
  }

  return (
    <section id="ai-advisor" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Bot className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Consultor de Compliance com IA
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Utilize nossa ferramenta de IA para obter recomendações de
            compliance personalizadas e gerar relatórios de status.
          </p>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-accent" />
                Obter Recomendações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onRecommendationsSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="companyProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Perfil da Empresa</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva sua indústria, tamanho, e atividades principais..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="complianceRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Requisitos de Compliance</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva as leis e regulações que sua empresa precisa seguir..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="existingComplianceEfforts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Esforços Atuais (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva as medidas de compliance que sua empresa já implementou..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isGeneratingRecommendations}
                  >
                    {isGeneratingRecommendations && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Gerar Recomendações
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="h-6 w-6 text-accent" />
                  Gerar Relatório de Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Gere um relatório de compliance com base nos dados disponíveis em nosso sistema.
                </p>
                <Button
                  onClick={onReportGenerate}
                  className="w-full"
                  disabled={isGeneratingReport}
                >
                  {isGeneratingReport && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Gerar Relatório
                </Button>
              </CardContent>
            </Card>

            {recommendations && (
              <Card>
                <CardHeader>
                  <CardTitle>Recomendações Geradas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold">Recomendações</h3>
                    <p className="text-sm text-muted-foreground">{recommendations.recommendations}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Programas de Treinamento</h3>
                    <p className="text-sm text-muted-foreground">{recommendations.trainingPrograms}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Sugestões de Rastreamento</h3>
                    <p className="text-sm text-muted-foreground">{recommendations.trackingSuggestions}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {report && (
              <Card>
                <CardHeader>
                  <CardTitle>Relatório de Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: report.replace(/\n/g, '<br />').replace(/## (.*)/g, '<h3>$1</h3>').replace(/\*\* (.*) \*\*/g, '<strong>$1</strong>') }} />
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
