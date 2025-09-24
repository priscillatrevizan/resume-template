import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import styles from "./contact-section.module.css";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "seu.email@exemplo.com",
    href: "mailto:seu.email@exemplo.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: "https://maps.google.com/?q=São+Paulo,+Brasil",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/seu-perfil",
    href: "https://linkedin.com/in/seu-perfil",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/seu-usuario",
    href: "https://github.com/seu-usuario",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    <section id="contact" className={styles.contactSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Entre em Contato</h2>
        <p className={styles.subtitle}>Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto!</p>
      </div>

      <div className={styles.gridContainer}>
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <div className={styles.contactInfoList}>
              {contactInfo.map(item => (
                <div key={item.label} className={styles.contactInfoItem}>
                  <div className={styles.iconContainer}>
                    <item.icon className={styles.icon} />
                  </div>
                  <div className={styles.contactDetails}>
                    <p className={styles.contactLabel}>{item.label}</p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={styles.contactLink}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* PDF-only clean contact list */}
            <div className={styles.printOnly}>
              <div className={styles.printContactInfo}>
                <h4 className={styles.printContactTitle}>Contato:</h4>
                <div className={styles.printContactList}>
                  <p>
                    <strong>Email:</strong> seu.email@exemplo.com
                  </p>
                  <p>
                    <strong>Telefone:</strong> +55 (11) 99999-9999
                  </p>
                  <p>
                    <strong>Localização:</strong> São Paulo, Brasil
                  </p>
                  <p>
                    <strong>LinkedIn:</strong> linkedin.com/in/seu-perfil
                  </p>
                  <p>
                    <strong>GitHub:</strong> github.com/seu-usuario
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.availabilitySection}>
              <h4 className={styles.availabilityTitle}>Disponibilidade</h4>
              <div className={styles.availabilityList}>
                <p>• Disponível para projetos freelance</p>
                <p>• Aberto para oportunidades full-time</p>
                <p>• Consultorias técnicas</p>
                <p>• Resposta em até 24 horas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={styles.noPrint}>
          <CardHeader>
            <CardTitle>Enviar Mensagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
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
                <div className={styles.formField}>
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

              <div className={styles.formFieldFull}>
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

              <div className={styles.formFieldFull}>
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

              <Button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className={styles.buttonIcon} />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* PDF-only contact message alternative */}
        <div className={styles.printContactAlternative}>
          <h3 className={styles.printContactAlternativeTitle}>Como entrar em contato:</h3>
          <div className={styles.printContactAlternativeContent}>
            <p>
              Para discussões sobre projetos, oportunidades ou consultorias, entre em contato através dos canais
              listados acima.
            </p>
            <p>Respondo a todas as mensagens em até 24 horas durante dias úteis.</p>
            <p>Estou disponível para:</p>
            <ul className={styles.printContactAlternativeList}>
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
