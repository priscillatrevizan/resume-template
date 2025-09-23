import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque. Suporta múltiplos vendors e possui dashboard analítico avançado.",
    image: "/api/placeholder/400/200",
    technologies: [
      { name: "React", variant: "pastel-blue" },
      { name: "Node.js", variant: "pastel-green" },
      { name: "PostgreSQL", variant: "pastel-purple" },
      { name: "Stripe", variant: "pastel-orange" },
      { name: "AWS", variant: "pastel-yellow" }
    ],
    features: [
      "Sistema de pagamentos integrado",
      "Dashboard analítico em tempo real", 
      "Gestão multi-vendor",
      "API REST escalável"
    ],
    stats: { stars: 156, forks: 42 },
    links: {
      demo: "https://ecommerce-demo.exemplo.com",
      github: "https://github.com/seu-usuario/ecommerce-platform"
    },
    status: "Em produção"
  },
  {
    title: "Task Management App",
    description: "Aplicação de gerenciamento de tarefas em tempo real com colaboração em equipe, notificações push e sincronização offline-first.",
    image: "/api/placeholder/400/200", 
    technologies: [
      { name: "Vue.js", variant: "pastel-green" },
      { name: "Express.js", variant: "pastel-cyan" },
      { name: "MongoDB", variant: "pastel-pink" },
      { name: "Socket.io", variant: "pastel-indigo" },
      { name: "PWA", variant: "pastel-orange" }
    ],
    features: [
      "Colaboração em tempo real",
      "Sincronização offline",
      "Notificações push",
      "Drag & drop interface"
    ],
    stats: { stars: 89, forks: 23 },
    links: {
      demo: "https://taskapp-demo.exemplo.com",
      github: "https://github.com/seu-usuario/task-management"
    },
    status: "Finalizado"
  },
  {
    title: "DevOps Dashboard",
    description: "Dashboard para monitoramento de infraestrutura cloud com métricas em tempo real, alertas automáticos e integração com múltiplos provedores.",
    image: "/api/placeholder/400/200",
    technologies: [
      { name: "React", variant: "pastel-blue" },
      { name: "TypeScript", variant: "pastel-purple" },
      { name: "Grafana", variant: "pastel-orange" },
      { name: "Prometheus", variant: "pastel-cyan" },
      { name: "Docker", variant: "pastel-yellow" }
    ],
    features: [
      "Monitoramento multi-cloud",
      "Alertas personalizáveis", 
      "Métricas em tempo real",
      "Integração CI/CD"
    ],
    stats: { stars: 234, forks: 67 },
    links: {
      demo: "https://devops-dashboard.exemplo.com",
      github: "https://github.com/seu-usuario/devops-dashboard"
    },
    status: "Em desenvolvimento"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Projetos em Destaque</h2>
        <p className="text-muted-foreground">
          Alguns dos projetos que desenvolvi e que demonstram minhas habilidades técnicas
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden card-hover-pastel">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <CardHeader className="p-0">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge 
                      variant={project.status === "Em produção" ? "pastel-green" : 
                              project.status === "Finalizado" ? "pastel-blue" : "pastel-orange"} 
                      className="no-print"
                    >
                      {project.status}
                    </Badge>
                    {/* PDF-only plain text status */}
                    <span className="print-only text-sm font-medium">({project.status})</span>
                  </div>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium">Principais funcionalidades:</h4>
                    <ul className="text-sm space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2 no-print">
                      {project.technologies.map((tech) => (
                        <Badge key={tech.name} variant={tech.variant as any}>{tech.name}</Badge>
                      ))}
                    </div>
                    {/* PDF-only plain text version with dashes */}
                    <div className="print-only">
                      <p className="text-sm">
                        {project.technologies.map(tech => tech.name).join(' - ')}
                      </p>
                    </div>
                  </div>

                  {/* GitHub stats - only show in web version */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground no-print">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {project.stats.forks}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2 no-print">
                    <Button size="sm" asChild>
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  </div>

                  {/* PDF-only links section */}
                  <div className="print-only space-y-1 text-sm pt-2">
                    <p><strong>Links do projeto:</strong></p>
                    <p>• Demonstração: {project.links.demo}</p>
                    <p>• Código fonte: {project.links.github}</p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}