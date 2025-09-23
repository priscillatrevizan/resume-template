import { Briefcase, Code, FolderOpen, Github, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";

const menuItems = [
  {
    title: "Sobre",
    icon: User,
    id: "about",
  },
  {
    title: "Experiência",
    icon: Briefcase,
    id: "experience",
  },
  {
    title: "Habilidades",
    icon: Code,
    id: "skills",
  },
  {
    title: "Projetos",
    icon: FolderOpen,
    id: "projects",
  },
  {
    title: "Contato",
    icon: Mail,
    id: "contact",
  },
];

const socialLinks = [
  {
    title: "GitHub",
    icon: Github,
    url: "https://github.com/seu-usuario",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/seu-perfil",
  },
];

interface AppSidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function AppSidebar({ onNavigate, activeSection }: AppSidebarProps) {
  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between px-3 py-2">
          <SidebarTrigger className="h-8 w-8 hidden md:flex" />
          <div className="group-data-[collapsible=icon]:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 pb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/100/100" alt="Seu Nome" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="group-data-[collapsible=icon]:hidden">
            <h2 className="text-lg font-semibold">Seu Nome</h2>
            <p className="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map(item => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  onClick={() => handleNavigation(item.id)}
                  isActive={activeSection === item.id}
                  className="cursor-pointer"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Informações</SidebarGroupLabel>
          <div className="px-3 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>São Paulo, Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+55 (11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>seu.email@exemplo.com</span>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Redes Sociais</SidebarGroupLabel>
          <SidebarMenu>
            {socialLinks.map(link => (
              <SidebarMenuItem key={link.title}>
                <SidebarMenuButton asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <link.icon className="h-4 w-4" />
                    <span>{link.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
