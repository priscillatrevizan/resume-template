import { Calendar, MapPin, User } from "lucide-react";
import { ExportPdfButton } from "../export-pdf-button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AboutSection() {
  return (
    <section id="about" className="space-y-6">
      <div className="space-y-2 no-print">
        <h1 className="text-4xl font-bold">João Silva</h1>
        <h2 className="text-xl text-muted-foreground">Desenvolvedor Full Stack</h2>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            São Paulo, Brasil
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            5+ anos de experiência
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            28 anos
          </div>
        </div>
      </div>

      <Card className="card-hover-pastel">
        <CardHeader>
          <CardTitle>Sobre Mim</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Desenvolvedor Full Stack apaixonado por tecnologia e inovação, com mais de 5 anos de experiência criando
            soluções web modernas e escaláveis. Especializado em React, Node.js e arquiteturas cloud, sempre busco
            entregar produtos de alta qualidade que geram valor real para usuários e negócios.
          </p>

          <p>
            Tenho experiência liderando equipes de desenvolvimento, implementando metodologias ágeis e promovendo boas
            práticas de código. Acredito na importância da colaboração, comunicação clara e aprendizado contínuo para o
            sucesso de qualquer projeto.
          </p>

          <div className="space-y-3">
            <h4>Principais Competências</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="pastel-blue">Liderança Técnica</Badge>
              <Badge variant="pastel-green">Arquitetura de Software</Badge>
              <Badge variant="pastel-purple">DevOps</Badge>
              <Badge variant="pastel-orange">Metodologias Ágeis</Badge>
              <Badge variant="pastel-pink">Mentoria</Badge>
              <Badge variant="pastel-cyan">Code Review</Badge>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Interessado no meu perfil? Baixe uma versão completa do meu currículo.
              </div>
              <div className="no-print">
                <ExportPdfButton />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
