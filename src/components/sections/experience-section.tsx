import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "Jan 2022 - Presente",
    location: "São Paulo, SP",
    type: "Remoto",
    description: [
      "Lidero equipe de 4 desenvolvedores na criação de plataforma SaaS com React, Node.js e AWS",
      "Implementei arquitetura de microserviços que reduziu tempo de resposta em 40%",
      "Estabeleci pipeline CI/CD com Docker e Kubernetes, aumentando frequência de deploys em 300%",
      "Mentorei desenvolvedores júnior e conduzi code reviews mantendo alta qualidade de código"
    ],
    technologies: [
      { name: "React", variant: "pastel-blue" },
      { name: "TypeScript", variant: "pastel-purple" },
      { name: "Node.js", variant: "pastel-green" },
      { name: "PostgreSQL", variant: "pastel-cyan" },
      { name: "AWS", variant: "pastel-yellow" },
      { name: "Docker", variant: "pastel-orange" },
      { name: "Kubernetes", variant: "pastel-pink" }
    ],
    highlights: ["Promoção para Senior", "Líder Técnico", "40% melhoria performance"]
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    period: "Mar 2020 - Dez 2021",
    location: "São Paulo, SP",
    type: "Híbrido",
    description: [
      "Desenvolvi MVP de aplicação fintech do zero, desde prototipagem até produção",
      "Criei API REST escalável com autenticação JWT e integração com gateways de pagamento",
      "Implementei testes automatizados aumentando cobertura de código para 85%",
      "Colaborei diretamente com product owners na definição de requisitos e prioridades"
    ],
    technologies: [
      { name: "Vue.js", variant: "pastel-green" },
      { name: "JavaScript", variant: "pastel-yellow" },
      { name: "Express.js", variant: "pastel-cyan" },
      { name: "MongoDB", variant: "pastel-pink" },
      { name: "Stripe API", variant: "pastel-orange" },
      { name: "Jest", variant: "pastel-purple" }
    ],
    highlights: ["MVP do zero", "85% cobertura testes", "Integração pagamentos"]
  },
  {
    company: "WebAgency Digital",
    position: "Frontend Developer",
    period: "Jun 2019 - Feb 2020",
    location: "São Paulo, SP",
    type: "Presencial",
    description: [
      "Desenvolvi websites responsivos e e-commerces para diversos clientes",
      "Otimizei performance de aplicações web, melhorando Core Web Vitals em média 60%",
      "Implementei animações e interações avançadas com CSS e JavaScript",
      "Trabalhei em projetos utilizando WordPress customizado e headless CMS"
    ],
    technologies: [
      { name: "HTML5", variant: "pastel-orange" },
      { name: "CSS3", variant: "pastel-blue" },
      { name: "JavaScript", variant: "pastel-yellow" },
      { name: "WordPress", variant: "pastel-indigo" },
      { name: "SASS", variant: "pastel-pink" },
      { name: "jQuery", variant: "pastel-cyan" }
    ],
    highlights: ["60% melhoria Core Web Vitals", "15+ projetos entregues"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Experiência Profissional</h2>
        <p className="text-muted-foreground">
          Minha jornada profissional construindo soluções digitais inovadoras
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative card-hover-pastel">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <div className="flex items-center gap-2 text-primary">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location} • {exp.type}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-2 text-xs">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech.name} variant={tech.variant as any}>{tech.name}</Badge>
                  ))}
                </div>
              </div>

              {exp.highlights.length > 0 && (
                <>
                  <Separator />
                  <div className="space-y-3">
                    <h4 className="font-medium">Principais Conquistas</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => {
                        const variants = ["pastel-green", "pastel-blue", "pastel-purple"];
                        const variant = variants[idx % variants.length];
                        return (
                          <Badge key={highlight} variant={variant as any}>
                            {highlight}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}