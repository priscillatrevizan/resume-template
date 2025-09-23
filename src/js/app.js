const { createApp, ref, reactive, onMounted, onUnmounted, nextTick } = Vue;

// Dados dos ícones Lucide
const icons = {
  User: 'user',
  Briefcase: 'briefcase', 
  Code: 'code',
  FolderOpen: 'folder-open',
  Mail: 'mail',
  Github: 'github',
  Linkedin: 'linkedin',
  MapPin: 'map-pin',
  Phone: 'phone',
  Calendar: 'calendar',
  Download: 'download',
  Sun: 'sun',
  Moon: 'moon',
  Menu: 'menu',
  X: 'x',
  Loader2: 'loader-2',
  ExternalLink: 'external-link',
  Globe: 'globe'
};

// Componente para renderizar ícones
const IconComponent = {
  props: ['name', 'size'],
  template: `<i :data-lucide="name" :class="sizeClass"></i>`,
  computed: {
    sizeClass() {
      return this.size || 'w-4 h-4';
    }
  },
  mounted() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },
  updated() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

// Sistema de Toast
const ToastSystem = {
  template: `
    <div class="toast-container">
      <div 
        v-for="toast in toasts" 
        :key="toast.id"
        :class="['toast', toast.type]"
      >
        <div class="font-medium">{{ toast.title }}</div>
        <div v-if="toast.description" class="text-sm text-muted">{{ toast.description }}</div>
      </div>
    </div>
  `,
  data() {
    return {
      toasts: []
    };
  },
  methods: {
    addToast(toast) {
      const id = Date.now();
      this.toasts.push({ ...toast, id });
      setTimeout(() => {
        this.removeToast(id);
      }, 5000);
    },
    removeToast(id) {
      const index = this.toasts.findIndex(t => t.id === id);
      if (index > -1) {
        this.toasts.splice(index, 1);
      }
    }
  }
};

// Seção Sobre
const AboutSection = {
  components: { IconComponent },
  template: `
    <section id="about" class="section">
      <div class="mb-6">
        <h1 class="text-4xl font-bold">João Silva</h1>
        <h2 class="text-xl text-muted mb-4">Desenvolvedor Full Stack</h2>
        <div class="flex flex-wrap gap-4 text-sm text-muted">
          <div class="flex items-center gap-1">
            <IconComponent name="map-pin" />
            São Paulo, Brasil
          </div>
          <div class="flex items-center gap-1">
            <IconComponent name="calendar" />
            5+ anos de experiência
          </div>
          <div class="flex items-center gap-1">
            <IconComponent name="user" />
            28 anos
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Sobre Mim</h3>
        </div>
        <div class="card-content">
          <div class="mb-4">
            <p class="mb-4">
              Desenvolvedor Full Stack apaixonado por tecnologia e inovação, com mais de 5 anos de experiência 
              criando soluções web modernas e escaláveis. Especializado em React, Node.js e arquiteturas cloud, 
              sempre busco entregar produtos de alta qualidade que geram valor real para usuários e negócios.
            </p>
            
            <p class="mb-4">
              Tenho experiência liderando equipes de desenvolvimento, implementando metodologias ágeis e 
              promovendo boas práticas de código. Acredito na importância da colaboração, comunicação clara 
              e aprendizado contínuo para o sucesso de qualquer projeto.
            </p>
          </div>

          <div class="mb-6">
            <h4 class="mb-4">Principais Competências</h4>
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-pastel-blue">Liderança Técnica</span>
              <span class="badge badge-pastel-green">Arquitetura de Software</span>
              <span class="badge badge-pastel-purple">DevOps</span>
              <span class="badge badge-pastel-orange">Metodologias Ágeis</span>
              <span class="badge badge-pastel-pink">Mentoria</span>
              <span class="badge badge-pastel-cyan">Code Review</span>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-4">
            <div class="flex flex-col gap-3 items-start justify-between sm:flex-row sm:items-center">
              <div class="text-sm text-muted">
                Interessado no meu perfil? Baixe uma versão completa do meu currículo.
              </div>
              <div class="no-print">
                <button 
                  @click="$emit('export-pdf')"
                  :disabled="exportingPdf"
                  class="btn btn-outline btn-sm"
                >
                  <IconComponent v-if="!exportingPdf" name="download" />
                  <IconComponent v-else name="loader-2" class="animate-spin" />
                  {{ exportingPdf ? 'Exportando...' : 'Exportar PDF' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  props: ['exportingPdf'],
  emits: ['export-pdf']
};

// Seção Experiência
const ExperienceSection = {
  components: { IconComponent },
  template: `
    <section id="experience" class="section">
      <h2 class="section-title">Experiência Profissional</h2>
      
      <div class="timeline">
        <div 
          v-for="(experience, index) in experiences" 
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-date">{{ experience.period }}</div>
          <h3 class="timeline-title">{{ experience.position }}</h3>
          <div class="timeline-company">{{ experience.company }}</div>
          <p class="mb-4">{{ experience.description }}</p>
          
          <div class="mb-4">
            <h4 class="mb-2">Principais Responsabilidades:</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li v-for="responsibility in experience.responsibilities" :key="responsibility">
                {{ responsibility }}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="mb-2">Tecnologias:</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tech, techIndex) in experience.technologies" 
                :key="tech"
                :class="getBadgeClass(techIndex)"
                class="badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      experiences: [
        {
          period: "2022 - Presente",
          position: "Tech Lead / Desenvolvedor Sênior",
          company: "TechCorp Solutions",
          description: "Lidero uma equipe de 8 desenvolvedores na criação de plataformas web escaláveis para clientes enterprise.",
          responsibilities: [
            "Arquitetura e design de sistemas distribuídos",
            "Mentoria técnica e code review",
            "Implementação de CI/CD e práticas DevOps",
            "Gestão de roadmap técnico e sprints",
            "Interface com stakeholders e product owners"
          ],
          technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis", "GraphQL"]
        },
        {
          period: "2020 - 2022",
          position: "Desenvolvedor Full Stack Pleno",
          company: "InnovaTech",
          description: "Desenvolvimento de aplicações web modernas utilizando stack JavaScript, com foco em performance e experiência do usuário.",
          responsibilities: [
            "Desenvolvimento frontend com React e TypeScript",
            "APIs RESTful e GraphQL com Node.js",
            "Integração com serviços de cloud",
            "Otimização de performance e SEO",
            "Colaboração em equipe ágil"
          ],
          technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Jest", "Webpack", "Sass"]
        },
        {
          period: "2019 - 2020",
          position: "Desenvolvedor Frontend Júnior",
          company: "StartupXYZ",
          description: "Primeiro contato profissional com desenvolvimento web, focando em interfaces responsivas e experiência do usuário.",
          responsibilities: [
            "Desenvolvimento de interfaces responsivas",
            "Implementação de designs do Figma",
            "Manutenção de código legacy",
            "Testes unitários e de integração",
            "Suporte a usuários finais"
          ],
          technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git", "Gulp", "PHP"]
        }
      ]
    };
  },
  methods: {
    getBadgeClass(index) {
      const classes = [
        'badge-pastel-blue',
        'badge-pastel-green', 
        'badge-pastel-purple',
        'badge-pastel-orange',
        'badge-pastel-pink',
        'badge-pastel-cyan',
        'badge-pastel-yellow',
        'badge-pastel-indigo'
      ];
      return classes[index % classes.length];
    }
  }
};

// Seção Habilidades
const SkillsSection = {
  template: `
    <section id="skills" class="section">
      <h2 class="section-title">Habilidades Técnicas</h2>
      
      <div class="grid grid-1 md:grid-2 lg:grid-3">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.name"
          class="card"
        >
          <div class="card-header">
            <h3 class="card-title">{{ category.name }}</h3>
          </div>
          <div class="card-content">
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(skill, skillIndex) in category.skills" 
                :key="skill.name"
                :class="getBadgeClass(index, skillIndex)"
                class="badge"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      skillCategories: [
        {
          name: "Frontend",
          skills: [
            { name: "React" },
            { name: "Vue.js" },
            { name: "TypeScript" },
            { name: "JavaScript ES6+" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind CSS" },
            { name: "Sass/SCSS" }
          ]
        },
        {
          name: "Backend",
          skills: [
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "Python" },
            { name: "FastAPI" },
            { name: "GraphQL" },
            { name: "REST APIs" },
            { name: "JWT" },
            { name: "WebSocket" }
          ]
        },
        {
          name: "Banco de Dados",
          skills: [
            { name: "PostgreSQL" },
            { name: "MongoDB" },
            { name: "Redis" },
            { name: "MySQL" },
            { name: "Prisma" },
            { name: "Mongoose" },
            { name: "SQL" },
            { name: "NoSQL" }
          ]
        },
        {
          name: "DevOps & Cloud",
          skills: [
            { name: "AWS" },
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "CI/CD" },
            { name: "GitHub Actions" },
            { name: "Nginx" },
            { name: "Linux" },
            { name: "Terraform" }
          ]
        },
        {
          name: "Ferramentas",
          skills: [
            { name: "Git" },
            { name: "VS Code" },
            { name: "Figma" },
            { name: "Postman" },
            { name: "Jest" },
            { name: "Cypress" },
            { name: "Webpack" },
            { name: "Vite" }
          ]
        },
        {
          name: "Metodologias",
          skills: [
            { name: "Scrum" },
            { name: "Kanban" },
            { name: "TDD" },
            { name: "Clean Code" },
            { name: "SOLID" },
            { name: "Microservices" },
            { name: "DDD" },
            { name: "Code Review" }
          ]
        }
      ]
    };
  },
  methods: {
    getBadgeClass(categoryIndex, skillIndex) {
      const classes = [
        'badge-pastel-blue',
        'badge-pastel-green', 
        'badge-pastel-purple',
        'badge-pastel-orange',
        'badge-pastel-pink',
        'badge-pastel-cyan',
        'badge-pastel-yellow',
        'badge-pastel-indigo'
      ];
      return classes[(categoryIndex + skillIndex) % classes.length];
    }
  }
};

// Seção Projetos
const ProjectsSection = {
  components: { IconComponent },
  template: `
    <section id="projects" class="section">
      <h2 class="section-title">Projetos em Destaque</h2>
      
      <div class="grid grid-1 md:grid-2">
        <div 
          v-for="(project, index) in projects" 
          :key="project.name"
          class="card"
        >
          <div class="card-header">
            <h3 class="card-title">{{ project.name }}</h3>
          </div>
          <div class="card-content">
            <p class="mb-4">{{ project.description }}</p>
            
            <div class="mb-4">
              <h4 class="mb-2">Funcionalidades:</h4>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li v-for="feature in project.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="mb-4">
              <h4 class="mb-2">Tecnologias:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(tech, techIndex) in project.technologies" 
                  :key="tech"
                  :class="getBadgeClass(index, techIndex)"
                  class="badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="flex gap-2">
              <a 
                v-if="project.demo"
                :href="project.demo" 
                target="_blank"
                class="btn btn-primary btn-sm"
              >
                <IconComponent name="external-link" />
                Demo
              </a>
              <a 
                v-if="project.github"
                :href="project.github" 
                target="_blank"
                class="btn btn-outline btn-sm"
              >
                <IconComponent name="github" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      projects: [
        {
          name: "E-commerce Platform",
          description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado e análise de vendas em tempo real.",
          features: [
            "Catálogo de produtos com filtros avançados",
            "Carrinho de compras e checkout",
            "Integração com gateway de pagamento",
            "Painel administrativo completo",
            "Sistema de avaliações e comentários",
            "Notificações em tempo real"
          ],
          technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
          demo: "https://demo-ecommerce.com",
          github: "https://github.com/usuario/ecommerce"
        },
        {
          name: "Task Management App",
          description: "Aplicativo de gestão de tarefas colaborativo com funcionalidades de time, calendário integrado e relatórios de produtividade.",
          features: [
            "Criação e atribuição de tarefas",
            "Timeline e calendário de projetos",
            "Colaboração em tempo real",
            "Relatórios de produtividade",
            "Notificações push",
            "Integração com ferramentas externas"
          ],
          technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "PWA"],
          demo: "https://taskapp-demo.com",
          github: "https://github.com/usuario/taskapp"
        },
        {
          name: "Data Analytics Dashboard",
          description: "Dashboard interativo para análise de dados com visualizações dinâmicas, filtros personalizáveis e exportação de relatórios.",
          features: [
            "Gráficos interativos e responsivos",
            "Filtros e segmentação de dados",
            "Exportação para PDF/Excel",
            "Atualizações em tempo real",
            "Sistema de alertas customizados",
            "API para integração externa"
          ],
          technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
          demo: "https://analytics-demo.com",
          github: "https://github.com/usuario/analytics"
        },
        {
          name: "IoT Monitoring System",
          description: "Sistema de monitoramento para dispositivos IoT com alertas em tempo real, histórico de dados e interface de controle remoto.",
          features: [
            "Monitoramento de sensores em tempo real",
            "Sistema de alertas personalizáveis",
            "Histórico e análise de tendências",
            "Controle remoto de dispositivos",
            "API RESTful para integrações",
            "Dashboard mobile responsivo"
          ],
          technologies: ["Angular", "Node.js", "InfluxDB", "MQTT", "Docker", "AWS IoT"],
          demo: "https://iot-monitoring.com",
          github: "https://github.com/usuario/iot-system"
        }
      ]
    };
  },
  methods: {
    getBadgeClass(projectIndex, techIndex) {
      const classes = [
        'badge-pastel-blue',
        'badge-pastel-green', 
        'badge-pastel-purple',
        'badge-pastel-orange',
        'badge-pastel-pink',
        'badge-pastel-cyan',
        'badge-pastel-yellow',
        'badge-pastel-indigo'
      ];
      return classes[(projectIndex + techIndex) % classes.length];
    }
  }
};

// Seção Contato
const ContactSection = {
  components: { IconComponent },
  template: `
    <section id="contact" class="section">
      <h2 class="section-title">Contato</h2>
      
      <div class="grid grid-1 md:grid-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Informações de Contato</h3>
          </div>
          <div class="card-content space-y-4">
            <div class="flex items-center gap-3">
              <IconComponent name="mail" />
              <div>
                <div class="font-medium">Email</div>
                <a href="mailto:joao.silva@exemplo.com" class="text-sm text-muted hover:text-primary">
                  joao.silva@exemplo.com
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <IconComponent name="phone" />
              <div>
                <div class="font-medium">Telefone</div>
                <a href="tel:+5511999999999" class="text-sm text-muted hover:text-primary">
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <IconComponent name="map-pin" />
              <div>
                <div class="font-medium">Localização</div>
                <div class="text-sm text-muted">São Paulo, Brasil</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <IconComponent name="linkedin" />
              <div>
                <div class="font-medium">LinkedIn</div>
                <a href="https://linkedin.com/in/joao-silva" target="_blank" class="text-sm text-muted hover:text-primary">
                  linkedin.com/in/joao-silva
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <IconComponent name="github" />
              <div>
                <div class="font-medium">GitHub</div>
                <a href="https://github.com/joao-silva" target="_blank" class="text-sm text-muted hover:text-primary">
                  github.com/joao-silva
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Vamos Conversar</h3>
          </div>
          <div class="card-content">
            <p class="mb-4">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Se você tem uma ideia ou precisa de ajuda com desenvolvimento, vamos conversar!
            </p>
            
            <div class="space-y-4">
              <div>
                <h4 class="mb-2">Disponibilidade</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-pastel-green">Freelance</span>
                  <span class="badge badge-pastel-blue">Consultoria</span>
                  <span class="badge badge-pastel-purple">Projetos</span>
                </div>
              </div>
              
              <div>
                <h4 class="mb-2">Especialidades</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-pastel-orange">React/Vue.js</span>
                  <span class="badge badge-pastel-pink">Node.js</span>
                  <span class="badge badge-pastel-cyan">Cloud AWS</span>
                  <span class="badge badge-pastel-yellow">DevOps</span>
                </div>
              </div>
              
              <div class="pt-4">
                <a 
                  href="mailto:joao.silva@exemplo.com?subject=Oportunidade de Trabalho"
                  class="btn btn-primary"
                >
                  <IconComponent name="mail" />
                  Entrar em Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// Aplicação Principal
const App = {
  components: {
    IconComponent,
    ToastSystem,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    ProjectsSection,
    ContactSection
  },
  setup() {
    const darkMode = ref(false);
    const sidebarCollapsed = ref(false);
    const sidebarOpen = ref(false);
    const activeSection = ref('about');
    const exportingPdf = ref(false);
    const toastRef = ref(null);

    const menuItems = [
      { title: 'Sobre', icon: 'user', id: 'about' },
      { title: 'Experiência', icon: 'briefcase', id: 'experience' },
      { title: 'Habilidades', icon: 'code', id: 'skills' },
      { title: 'Projetos', icon: 'folder-open', id: 'projects' },
      { title: 'Contato', icon: 'mail', id: 'contact' }
    ];

    const socialLinks = [
      { title: 'GitHub', icon: 'github', url: 'https://github.com/joao-silva' },
      { title: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/joao-silva' }
    ];

    const toggleTheme = () => {
      darkMode.value = !darkMode.value;
      document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
      localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
    };

    const toggleSidebar = () => {
      sidebarCollapsed.value = !sidebarCollapsed.value;
      localStorage.setItem('sidebarCollapsed', sidebarCollapsed.value);
    };

    const toggleMobileSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    const navigateToSection = (sectionId) => {
      activeSection.value = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Fechar sidebar móvel após navegação
      if (window.innerWidth <= 768) {
        sidebarOpen.value = false;
      }
    };

    const showToast = (toast) => {
      if (toastRef.value) {
        toastRef.value.addToast(toast);
      }
    };

    const exportToPdf = async () => {
      exportingPdf.value = true;
      
      try {
        if (!window.html2pdf) {
          throw new Error('html2pdf library not loaded');
        }

        const element = document.querySelector('.content-area');
        if (!element) {
          throw new Error('Conteúdo não encontrado');
        }

        // Criar estilos para PDF
        const printStyles = document.createElement('style');
        printStyles.innerHTML = `
          /* Cores seguras para PDF - apenas HEX */
          :root {
            --pdf-background: #ffffff !important;
            --pdf-foreground: #1f2937 !important;
            --pdf-border: #e5e7eb !important;
            --pdf-muted: #6b7280 !important;
          }
          
          @media print {
            .sidebar, .header, .footer, .no-print, .btn {
              display: none !important;
            }
            
            body {
              font-size: 12px !important;
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              font-family: system-ui, -apple-system, sans-serif !important;
              background-color: #ffffff !important;
              color: #1f2937 !important;
            }
            
            .badge {
              font-size: 10px !important;
              padding: 3px 8px !important;
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            .badge-pastel-blue { background-color: #dbeafe !important; color: #1e40af !important; }
            .badge-pastel-green { background-color: #dcfce7 !important; color: #166534 !important; }
            .badge-pastel-purple { background-color: #e9d5ff !important; color: #7c3aed !important; }
            .badge-pastel-orange { background-color: #fed7aa !important; color: #ea580c !important; }
            .badge-pastel-pink { background-color: #fce7f3 !important; color: #be185d !important; }
            .badge-pastel-cyan { background-color: #cffafe !important; color: #0891b2 !important; }
            .badge-pastel-yellow { background-color: #fef3c7 !important; color: #d97706 !important; }
            .badge-pastel-indigo { background-color: #e0e7ff !important; color: #4338ca !important; }
            
            .card {
              page-break-inside: avoid;
              margin-bottom: 1rem !important;
              border: 1px solid #e5e7eb !important;
            }
            
            h1 { font-size: 22px !important; }
            h2 { font-size: 18px !important; }
            h3 { font-size: 16px !important; }
            h4 { font-size: 14px !important; }
          }
        `;
        
        document.head.appendChild(printStyles);

        // Aguardar estilos serem aplicados
        await new Promise(resolve => setTimeout(resolve, 100));

        // Aplicar estilos inline às badges
        const badges = element.querySelectorAll('.badge');
        badges.forEach((badge) => {
          if (badge.classList.contains('badge-pastel-blue')) {
            badge.style.backgroundColor = '#dbeafe';
            badge.style.color = '#1e40af';
          } else if (badge.classList.contains('badge-pastel-green')) {
            badge.style.backgroundColor = '#dcfce7';
            badge.style.color = '#166534';
          } else if (badge.classList.contains('badge-pastel-purple')) {
            badge.style.backgroundColor = '#e9d5ff';
            badge.style.color = '#7c3aed';
          } else if (badge.classList.contains('badge-pastel-orange')) {
            badge.style.backgroundColor = '#fed7aa';
            badge.style.color = '#ea580c';
          } else if (badge.classList.contains('badge-pastel-pink')) {
            badge.style.backgroundColor = '#fce7f3';
            badge.style.color = '#be185d';
          } else if (badge.classList.contains('badge-pastel-cyan')) {
            badge.style.backgroundColor = '#cffafe';
            badge.style.color = '#0891b2';
          } else if (badge.classList.contains('badge-pastel-yellow')) {
            badge.style.backgroundColor = '#fef3c7';
            badge.style.color = '#d97706';
          } else if (badge.classList.contains('badge-pastel-indigo')) {
            badge.style.backgroundColor = '#e0e7ff';
            badge.style.color = '#4338ca';
          }
          badge.style.border = '1px solid transparent';
        });

        // Criar cabeçalho para PDF
        const pdfHeader = document.createElement('div');
        pdfHeader.className = 'print-only';
        pdfHeader.style.display = 'none';
        pdfHeader.innerHTML = `
          <div style="text-align: center; margin-bottom: 30px; padding: 20px 0 15px 0; border-bottom: 2px solid #374151; background-color: #ffffff;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #111827; letter-spacing: -0.5px; font-family: system-ui, -apple-system, sans-serif;">João Silva</h1>
            <p style="margin: 8px 0 0 0; font-size: 16px; color: #374151; font-weight: 500; font-family: system-ui, -apple-system, sans-serif;">Desenvolvedor Full Stack</p>
            <div style="margin: 12px 0 0 0; font-size: 12px; color: #6b7280; text-align: center; font-family: system-ui, -apple-system, sans-serif;">
              <div style="margin-bottom: 4px;">São Paulo, Brasil</div>
              <div style="margin-bottom: 4px;">joao.silva@exemplo.com</div>
              <div>+55 (11) 99999-9999</div>
            </div>
            <p style="margin: 15px 0 0 0; font-size: 10px; color: #9ca3af; font-style: italic; font-family: system-ui, -apple-system, sans-serif;">Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        `;
        
        element.insertBefore(pdfHeader, element.firstChild);

        // Opções do PDF
        const options = {
          margin: [10, 10, 10, 10],
          filename: 'curriculo-joao-silva.pdf',
          image: { type: 'jpeg', quality: 0.90 },
          html2canvas: { 
            scale: 1.3,
            useCORS: true,
            allowTaint: true,
            letterRendering: true,
            logging: false,
            backgroundColor: '#ffffff'
          },
          jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            compress: true
          }
        };

        // Gerar PDF
        await window.html2pdf().set(options).from(element).save();
        
        // Limpeza
        document.head.removeChild(printStyles);
        element.removeChild(pdfHeader);
        
        showToast({
          type: 'success',
          title: 'PDF exportado com sucesso!',
          description: 'O arquivo foi baixado para sua pasta de downloads.'
        });
        
      } catch (error) {
        console.error('Erro ao exportar PDF:', error);
        showToast({
          type: 'error',
          title: 'Erro ao exportar PDF',
          description: 'Tente novamente em alguns segundos.'
        });
      } finally {
        exportingPdf.value = false;
      }
    };

    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            activeSection.value = section;
            break;
          }
        }
      }
    };

    onMounted(() => {
      // Carregar preferências salvas
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        darkMode.value = true;
        document.documentElement.setAttribute('data-theme', 'dark');
      }

      const savedSidebarState = localStorage.getItem('sidebarCollapsed');
      if (savedSidebarState === 'true') {
        sidebarCollapsed.value = true;
      }

      // Adicionar listener de scroll
      window.addEventListener('scroll', handleScroll);

      // Inicializar ícones Lucide
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      darkMode,
      sidebarCollapsed,
      sidebarOpen,
      activeSection,
      exportingPdf,
      toastRef,
      menuItems,
      socialLinks,
      toggleTheme,
      toggleSidebar,
      toggleMobileSidebar,
      navigateToSection,
      exportToPdf
    };
  },
  template: `
    <div class="app-layout">
      <!-- Sidebar -->
      <aside :class="['sidebar', { collapsed: sidebarCollapsed, show: sidebarOpen }]">
        <div class="sidebar-header">
          <div class="flex items-center justify-between mb-4">
            <button @click="toggleSidebar" class="sidebar-toggle hidden md:block">
              <IconComponent name="menu" />
            </button>
            <button @click="toggleMobileSidebar" class="sidebar-toggle md:hidden">
              <IconComponent name="x" />
            </button>
            <div v-if="!sidebarCollapsed">
              <button @click="toggleTheme" class="theme-toggle">
                <IconComponent :name="darkMode ? 'sun' : 'moon'" />
              </button>
            </div>
          </div>
          
          <div class="profile-section">
            <div class="avatar">JS</div>
            <div v-if="!sidebarCollapsed" class="profile-info">
              <h2>João Silva</h2>
              <p>Desenvolvedor Full Stack</p>
            </div>
          </div>
        </div>

        <div class="sidebar-content">
          <div class="sidebar-group">
            <div v-if="!sidebarCollapsed" class="sidebar-group-label">Navegação</div>
            <ul class="sidebar-menu">
              <li v-for="item in menuItems" :key="item.id" class="sidebar-menu-item">
                <button 
                  @click="navigateToSection(item.id)"
                  :class="['sidebar-menu-button', { active: activeSection === item.id, collapsed: sidebarCollapsed }]"
                >
                  <IconComponent :name="item.icon" />
                  <span v-if="!sidebarCollapsed" class="menu-text">{{ item.title }}</span>
                </button>
              </li>
            </ul>
          </div>

          <div v-if="!sidebarCollapsed" class="sidebar-group info-section">
            <div class="sidebar-group-label">Informações</div>
            <div class="info-item">
              <IconComponent name="map-pin" />
              <span>São Paulo, Brasil</span>
            </div>
            <div class="info-item">
              <IconComponent name="phone" />
              <span>+55 (11) 99999-9999</span>
            </div>
            <div class="info-item">
              <IconComponent name="mail" />
              <span>joao.silva@exemplo.com</span>
            </div>
          </div>

          <div v-if="!sidebarCollapsed" class="sidebar-group social-section">
            <div class="sidebar-group-label">Redes Sociais</div>
            <ul class="sidebar-menu">
              <li v-for="link in socialLinks" :key="link.title" class="sidebar-menu-item">
                <a 
                  :href="link.url" 
                  target="_blank"
                  class="sidebar-menu-button"
                >
                  <IconComponent :name="link.icon" />
                  <span>{{ link.title }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main :class="['main-content', { 'sidebar-collapsed': sidebarCollapsed }]">
        <!-- Header -->
        <header class="header">
          <div class="flex items-center gap-4">
            <button @click="toggleMobileSidebar" class="sidebar-toggle md:hidden">
              <IconComponent name="menu" />
            </button>
            <h1>Currículo - João Silva</h1>
          </div>
          <div class="no-print">
            <button 
              @click="exportToPdf"
              :disabled="exportingPdf"
              class="btn btn-outline btn-sm"
            >
              <IconComponent v-if="!exportingPdf" name="download" />
              <IconComponent v-else name="loader-2" class="animate-spin" />
              {{ exportingPdf ? 'Exportando...' : 'Exportar PDF' }}
            </button>
          </div>
        </header>

        <!-- Content -->
        <div class="content-area">
          <AboutSection :exporting-pdf="exportingPdf" @export-pdf="exportToPdf" />
          <div class="separator"></div>
          <ExperienceSection />
          <div class="separator"></div>
          <SkillsSection />
          <div class="separator"></div>
          <ProjectsSection />
          <div class="separator"></div>
          <ContactSection />
        </div>

        <!-- Footer -->
        <footer class="footer no-print">
          <div class="footer-content">
            <p>&copy; 2024 João Silva. Todos os direitos reservados.</p>
            <p>Desenvolvido com Vue.js, JavaScript e CSS</p>
          </div>
        </footer>
      </main>

      <!-- Toast System -->
      <ToastSystem ref="toastRef" />
    </div>
  `
};

// Inicializar aplicação
createApp(App).mount('#app');