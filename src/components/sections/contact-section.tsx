import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "seu.email@exemplo.com",
    href: "mailto:seu.email@exemplo.com"
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (11) 99999-9999",
    href: "tel:+5511999999999"
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: "https://maps.google.com/?q=São+Paulo,+Brasil"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/seu-perfil",
    href: "https://linkedin.com/in/seu-perfil"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/seu-usuario",
    href: "https://github.com/seu-usuario"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Entre em Contato</h2>
        <p className="text-muted-foreground">
          Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto!
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.label}</p>
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* PDF-only clean contact list */}
            <div className="print-only space-y-3">
              <h4 className="font-medium">Contato:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> seu.email@exemplo.com</p>
                <p><strong>Telefone:</strong> +55 (11) 99999-9999</p>
                <p><strong>Localização:</strong> São Paulo, Brasil</p>
                <p><strong>LinkedIn:</strong> linkedin.com/in/seu-perfil</p>
                <p><strong>GitHub:</strong> github.com/seu-usuario</p>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h4 className="font-medium mb-3">Disponibilidade</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Disponível para projetos freelance</p>
                <p>• Aberto para oportunidades full-time</p>
                <p>• Consultorias técnicas</p>
                <p>• Resposta em até 24 horas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="no-print">
          <CardHeader>
            <CardTitle>Enviar Mensagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* PDF-only contact message alternative */}
        <div className="print-only">
          <h3 className="font-medium mb-3">Como entrar em contato:</h3>
          <div className="space-y-2 text-sm">
            <p>Para discussões sobre projetos, oportunidades ou consultorias, entre em contato através dos canais listados acima.</p>
            <p>Respondo a todas as mensagens em até 24 horas durante dias úteis.</p>
            <p>Estou disponível para:</p>
            <ul className="ml-4 space-y-1">
              <li>• Projetos de desenvolvimento web</li>
              <li>• Consultorias técnicas</li>
              <li>• Oportunidades full-time</li>
              <li>• Trabalhos freelance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}