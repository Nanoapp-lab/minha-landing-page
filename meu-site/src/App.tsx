import React from 'react';
import { motion } from "framer-motion";
import {
  Code2,
  Network,
  LineChart,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  Cpu
} from 'lucide-react';

const TechBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
    <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
  </div>
);

// --- COMPONENTE DO SEU VÍDEO TAB ---
const VideoScanner = () => (
  <div className="absolute inset-0 bg-[#020617] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.15)] group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-shadow duration-500">
    <video
  src="/video.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
/>
    {/* Overlay sutil para harmonizar a cor do vídeo com o brilho neon do site */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
  </div>
);
// -----------------------------------

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-primary-foreground font-mono font-bold text-xl shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            Z
          </div>
          <span className="font-heading font-extrabold text-xl tracking-wider text-white">ZETRIV<span className="text-primary">.</span></span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#solucoes" className="hover:text-primary transition-colors">Software</a>
          <a href="#consultoria" className="hover:text-primary transition-colors">Consultoria</a>
          <a href="#marketing" className="hover:text-primary transition-colors">Estratégia</a>
        </div>

        <div className="hidden md:flex">
          <a href="/login.html" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            Falar com especialista <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-4">
          <a href="#solucoes" className="text-foreground font-medium" onClick={() => setIsOpen(false)}>Software</a>
          <a href="#consultoria" className="text-foreground font-medium" onClick={() => setIsOpen(false)}>Consultoria</a>
          <a href="#marketing" className="text-foreground font-medium" onClick={() => setIsOpen(false)}>Estratégia</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 px-6">
      <TechBackground />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-semibold tracking-wide mb-8">
            <Cpu className="w-4 h-4" />
            TECNOLOGIA EXCLUSIVA TAB
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-[1.1] text-white mb-6">
            A Revolução de Transformar Matéria em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Dados.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Pioneiros na metodologia de <strong className="text-white">Tipificação Analisada por Binários (TAB)</strong>. Convertemos ativos e processos físicos em fluxos de dados puros para análises preditivas de altíssima precisão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#solucoes" className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-sm font-bold rounded-md hover:bg-primary/90 transition-all items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
              Explorar Soluções <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-card to-background border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col z-10 backdrop-blur-xl">
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-white/20 rounded-full" />
                  <div className="w-3 h-3 bg-white/20 rounded-full" />
                  <div className="w-3 h-3 bg-white/20 rounded-full" />
                </div>
                <div className="text-xs font-mono text-primary flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  SYSTEM.TAB_ACTIVE
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/5 rounded-lg p-4 flex flex-col justify-between">
                  <Cpu className="w-6 h-6 text-primary mb-4" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Processamento</div>
                    <div className="text-xl font-mono text-white">99.9%</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-lg p-4 flex flex-col justify-between">
                  <Network className="w-6 h-6 text-indigo-400 mb-4" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Nós Conectados</div>
                    <div className="text-xl font-mono text-white">1,492</div>
                  </div>
                </div>
                <div className="col-span-2 bg-white/5 border border-white/5 rounded-lg p-4 h-32 relative overflow-hidden">
                  <div className="text-xs text-muted-foreground mb-2">Fluxo Estratégico</div>
                  <svg className="absolute bottom-0 left-0 w-full h-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,100 L0,50 Q25,80 50,30 T100,20 L100,100 Z" fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.5)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-full h-full border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-full h-full border border-indigo-500/20 rounded-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureItem {
  title: string;
  desc: string;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  features: FeatureItem[];
  isReversed?: boolean;
  customVisual?: React.ReactNode;
}

const ServiceSection = ({ id, title, subtitle, icon: Icon, features, isReversed = false, customVisual }: ServiceSectionProps) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${isReversed ? 'bg-white/[0.02]' : ''}`}>
      {isReversed && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
      )}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl text-primary border border-primary/20 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <Icon className="w-7 h-7" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">{title}</h2>
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            </div>

            <div className="grid gap-4">
              {features.map((feature: FeatureItem, idx: number) => (
                <div key={idx} className="flex gap-4 p-5 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/30 transition-all group cursor-default">
                  <div className="mt-1">
                    <ChevronRight className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full aspect-[4/3] relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="absolute inset-0 bg-card border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              
              {customVisual ? (
                <div className="flex-1 relative">
                  {customVisual}
                </div>
              ) : (
                <div className="flex-1 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)]" />
                  <Icon className="w-16 h-16 text-primary/40 mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]" />
                  <h3 className="font-heading font-bold text-xl mb-2 text-white relative z-10">{title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">Infraestrutura construída para resiliência e alta performance.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main>
        <Hero />

        <ServiceSection
          id="solucoes"
          title="Engenharia & Software"
          subtitle="Arquitetura de sistemas e desenvolvimento sob medida focados na escalabilidade, segurança e eficiência dos seus processos de negócio."
          icon={Code2}
          customVisual={<VideoScanner />} 
          features={[
            {
              title: "Sistemas Sob Encomenda",
              desc: "Construção de plataformas, APIs e aplicações complexas do zero, desenhadas exclusivamente para resolver os desafios únicos da sua operação."
            },
            {
              title: "Softwares Customizáveis",
              desc: "Licenciamento e implantação de soluções adaptáveis que se integram ao seu ecossistema existente, acelerando o tempo de lançamento."
            },
            {
              title: "Produtos de Prateleira (SaaS)",
              desc: "Acesso a ferramentas proprietárias prontas para uso, focadas em otimização de rotinas e ganho imediato de produtividade."
            }
          ]}
        />

        <ServiceSection
          id="consultoria"
          title="Consultoria Tecnológica"
          subtitle="Auditoria de infraestrutura, planejamento de arquitetura cloud e suporte técnico para manter a continuidade do seu negócio."
          icon={Network}
          isReversed
          features={[
            {
              title: "Planejamento e Auditoria em TI",
              desc: "Mapeamento de vulnerabilidades, redução de custos de infraestrutura e desenho de arquiteturas modernas e seguras."
            },
            {
              title: "Suporte Técnico Especializado",
              desc: "Manutenção proativa e reativa, monitoramento de sistemas 24/7 e gestão de incidentes para garantir alta disponibilidade."
            }
          ]}
        />

        <ServiceSection
          id="marketing"
          title="Estratégia & Crescimento"
          subtitle="Alinhamos capacidade tecnológica com inteligência de mercado, apoiando sua gestão e impulsionando a aquisição de clientes."
          icon={LineChart}
          features={[
            {
              title: "Consultoria em Gestão Empresarial",
              desc: "Implementação de metodologias ágeis e otimização de fluxos administrativos apoiados por dados e tecnologia."
            },
            {
              title: "Inteligência de Marketing Direto",
              desc: "Campanhas estruturadas, promoção de vendas e automação de marketing para maximizar a conversão e retenção."
            },
            {
              title: "Apoio Administrativo (BPO)",
              desc: "Terceirização de processos secundários e preparação documental, liberando seu time para focar no core business."
            }
          ]}
        />
      </main>

      <footer className="bg-[#010410] border-t border-white/5 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-mono font-bold text-sm">
                Z
              </div>
              <span className="font-heading font-extrabold text-lg tracking-wider text-white">ZETRIV TECHNOLOGIES</span>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed mb-6">
              Conectando engenharia de software de ponta com inteligência estratégica para arquitetar o futuro das organizações corporativas.
            </p>
            <div className="text-xs font-mono text-muted-foreground/50">
              © {new Date().getFullYear()} Zetriv Technologies LTDA.
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Soluções</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Desenvolvimento Core</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Arquitetura Cloud</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria em TI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automação de Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> contato@zetriv.com.br
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Suporte Corporativo
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Projetos Sob Demanda
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;