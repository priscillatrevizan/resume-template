import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "SASS/SCSS", level: 85 }
    ]
  },
  {
    title: "Backend", 
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "NestJS", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 80 }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Prisma", level: 85 },
      { name: "TypeORM", level: 80 }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 65 },
      { name: "Nginx", level: 75 }
    ]
  }
];

const tools = [
  { name: "Git", variant: "pastel-blue" },
  { name: "GitHub Actions", variant: "pastel-green" },
  { name: "Jest", variant: "pastel-purple" },
  { name: "Cypress", variant: "pastel-orange" },
  { name: "Figma", variant: "pastel-pink" },
  { name: "Postman", variant: "pastel-cyan" },
  { name: "VS Code", variant: "pastel-yellow" },
  { name: "Jira", variant: "pastel-indigo" },
  { name: "Confluence", variant: "pastel-blue" },
  { name: "Slack", variant: "pastel-green" },
  { name: "Linear", variant: "pastel-purple" },
  { name: "Vercel", variant: "pastel-orange" }
];

const methodologies = [
  { name: "Scrum", variant: "pastel-pink" },
  { name: "Kanban", variant: "pastel-cyan" },
  { name: "TDD", variant: "pastel-yellow" },
  { name: "Clean Code", variant: "pastel-indigo" },
  { name: "SOLID", variant: "pastel-blue" },
  { name: "Microservices", variant: "pastel-green" },
  { name: "Clean Architecture", variant: "pastel-purple" },
  { name: "DDD", variant: "pastel-orange" },
  { name: "Event Sourcing", variant: "pastel-pink" },
  { name: "CQRS", variant: "pastel-cyan" }
];

export function SkillsSection() {
  // Extract all technical skills for PDF linear format
  const allTechnicalSkills = skillCategories.reduce((acc, category) => {
    return [...acc, ...category.skills.map(skill => skill.name)];
  }, [] as string[]);

  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
        <p className="text-muted-foreground no-print">
          Tecnologias e ferramentas que domino para criar soluções eficientes
        </p>
      </div>

      {/* Web version with progress bars */}
      <div className="grid gap-6 md:grid-cols-2 no-print">
        {skillCategories.map((category) => (
          <Card key={category.title} className="card-hover-pastel">
            <CardHeader>
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* PDF-only linear format with dashes */}
      <div className="print-only space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Linguagens e Tecnologias:</h3>
          <p className="text-sm leading-relaxed">
            {allTechnicalSkills.join(' - ')}
          </p>
        </div>
      </div>

      {/* Web version with badges */}
      <div className="grid gap-6 md:grid-cols-2 no-print">
        <Card className="card-hover-pastel">
          <CardHeader>
            <CardTitle>Ferramentas & Plataformas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool.name} variant={tool.variant as any}>{tool.name}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-pastel">
          <CardHeader>
            <CardTitle>Metodologias & Conceitos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {methodologies.map((methodology) => (
                <Badge key={methodology.name} variant={methodology.variant as any}>{methodology.name}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* PDF-only linear format with dashes */}
      <div className="print-only space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Ferramentas e Plataformas:</h3>
          <p className="text-sm leading-relaxed">
            {tools.map(tool => tool.name).join(' - ')}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Metodologias e Conceitos:</h3>
          <p className="text-sm leading-relaxed">
            {methodologies.map(methodology => methodology.name).join(' - ')}
          </p>
        </div>
      </div>
    </section>
  );
}