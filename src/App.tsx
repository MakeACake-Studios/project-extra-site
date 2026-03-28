import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DonationsPage } from './pages/Donations';
import { 
  Settings, 
  Sword, 
  Pickaxe, 
  Wind, 
  Flame, 
  Leaf, 
  ChevronRight, 
  Copy, 
  Check, 
  ExternalLink,
  Users,
  Cpu,
  Globe,
  Shield
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FeatureCard = ({ icon: Icon, title, description, colorClass, delay = 0 }: { 
  icon: any, 
  title: string, 
  description: string, 
  colorClass: string,
  delay?: number
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-8 glass rounded-2xl hover:bg-white/10 transition-all duration-300"
  >
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", colorClass)}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-sans tracking-tight">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className={cn("w-2 h-2 rounded-full animate-pulse", colorClass)} />
    </div>
  </motion.div>
);

const RulesPage = () => {
  const rules = [
    {
      title: "Общие правила поведения",
      icon: Users,
      items: [
        "Будьте вежливы и уважайте других игроков и администрацию.",
        "Запрещены оскорбления, разжигание ненависти и спам в любом виде.",
        "Никнейм не должен содержать нецензурную лексику или оскорбления.",
        "Запрещена реклама сторонних ресурсов, не относящихся к проекту."
      ]
    },
    {
      title: "Игровой процесс и Мир",
      icon: Globe,
      items: [
        "Уважайте чужие постройки. Гриферство в любой форме строго запрещено.",
        "Механизмы из Create не должны создавать критическую нагрузку на сервер.",
        "Запрещено строительство 'лаг-машин' или бессмысленных конструкций.",
        "RPG элементы и артефакты предназначены для честной игры. Багоюз запрещен."
      ]
    },
    {
      title: "Запрещенные действия",
      icon: Shield,
      items: [
        "Использование читов, макросов и любого ПО, дающего преимущество.",
        "Эксплуатация багов игры или модов. О багах нужно сообщать администрации.",
        "Попытки дестабилизации работы сервера или экономики.",
        "Кража предметов из незаприваченных сундуков (если это не предусмотрено ивентом)."
      ]
    },
    {
      title: "Взаимодействие с Create",
      icon: Settings,
      items: [
        "Все поезда должны иметь четкие названия и не мешать движению других.",
        "Запрещено оставлять работающие механизмы без присмотра на долгое время.",
        "Фермы ресурсов должны быть оптимизированы и иметь выключатель.",
        "Администрация вправе удалить механизм, если он вызывает лаги."
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-6 max-w-5xl mx-auto"
    >
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-future font-black mb-4 uppercase tracking-tighter text-glow">Кодекс Сервера</h1>
        <p className="text-white/40 font-display">Соблюдение этих правил гарантирует комфортную игру для всех участников Project Extra.</p>
      </div>

      <div className="grid gap-8">
        {rules.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl border-primary/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <section.icon className="w-6 h-6 text-primary-light" />
              </div>
              <h2 className="text-2xl font-future font-bold uppercase tracking-tight">{section.title}</h2>
            </div>
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 font-display leading-relaxed">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 glass rounded-3xl border-primary/20 text-center bg-primary/5">
        <p className="text-white/60 italic font-display">
          Незнание правил не освобождает от ответственности. Администрация оставляет за собой право изменять правила.
        </p>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [copied, setCopied] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'rules' | 'donations'>('home');
  const serverIp = "mc.projectextra.ru";

  const copyIp = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary-light">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Settings className="w-6 h-6 text-white animate-spin-slow" />
            </div>
            <span className="font-future font-bold text-lg tracking-tighter uppercase text-glow">Project Extra</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <button 
              onClick={() => setCurrentPage('home')}
              className={cn("hover:text-primary-light transition-colors", currentPage === 'home' && "text-white")}
            >
              Главная
            </button>
            <button 
              onClick={() => setCurrentPage('rules')}
              className={cn("hover:text-primary-light transition-colors", currentPage === 'rules' && "text-white")}
            >
              Правила
            </button>
            <button 
              onClick={() => setCurrentPage('donations')}
              className={cn("hover:text-primary-light transition-colors", currentPage === 'donations' && "text-white")}
            >
              Донат
            </button>
            <a href="https://discord.gg/projectextra" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-white transition-all border border-white/5 hover:border-primary/30">
              Discord <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div key="home">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-dark/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              </div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-8"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    NeoForge • 1.21.1
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-7xl md:text-8xl font-future font-black leading-[0.9] mb-8 tracking-tighter uppercase"
                  >
                    Project <br />
                    <span className="text-primary primary-glow">Extra</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-white/60 mb-12 leading-relaxed max-w-xl font-display"
                  >
                    Уникальный опыт, объединяющий индустриальную мощь Create, 
                    магию неизведанных миров и уют фермерской жизни на базе легендарного MakeABuilders.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button 
                      onClick={copyIp}
                      className="group relative flex items-center gap-4 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all active:scale-95 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        {copied ? "Скопировано!" : serverIp}
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Онлайн", value: "42/100", icon: Users },
                  { label: "Модов", value: "20+", icon: Cpu },
                  { label: "Миров", value: "5", icon: Globe },
                  { label: "Uptime", value: "99.9%", icon: Shield },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <stat.icon className="w-5 h-5 text-primary-light" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-white/40 tracking-widest">{stat.label}</div>
                      <div className="text-xl font-bold font-display">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mods Section */}
            <section id="mods" className="py-32 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                  <h2 className="text-4xl font-future font-bold mb-4 uppercase tracking-tight">Ядро сервера</h2>
                  <p className="text-white/40 max-w-xl font-display">Мы отобрали лучшие моды и плагины, чтобы создать сбалансированный и глубокий игровой процесс.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard 
                    icon={Settings}
                    title="Create & Addons"
                    description="Постройте автоматизированные фабрики, поезда и сложные механизмы. Вращательная сила — ваше главное оружие."
                    colorClass="bg-primary"
                    delay={0.1}
                  />
                  <FeatureCard 
                    icon={Wind}
                    title="Better End & Nether"
                    description="Полное переосмысление измерений. Новые биомы, существа и ресурсы, которые заставят вас исследовать каждый уголок."
                    colorClass="bg-primary-light"
                    delay={0.2}
                  />
                  <FeatureCard 
                    icon={Leaf}
                    title="Farmer's Delight"
                    description="Расширенное кулинарное искусство. Готовьте изысканные блюда и развивайте свою ферму до невероятных масштабов."
                    colorClass="bg-primary-dark"
                    delay={0.3}
                  />
                  <FeatureCard 
                    icon={Sword}
                    title="Ice and Fire & Artifacts"
                    description="Сражайтесь с могущественными драконами, находите легендарные артефакты и исследуйте мир, полный опасностей и сокровищ."
                    colorClass="bg-accent"
                    delay={0.4}
                  />
                  <FeatureCard 
                    icon={Pickaxe}
                    title="MakeABuilders Plugin"
                    description="Мы сохранили не только дух оригинального проекта со свободой для творчества и взаимодействи, но и большинство его систем, сохранив уже привычные игрокам механики."
                    colorClass="bg-primary/60"
                    delay={0.5}
                  />
                  <FeatureCard 
                    icon={Flame}
                    title="Custom Content"
                    description="Уникальные квесты, кастомные крафты и ивенты, которые вы не найдете больше ни на одном сервере."
                    colorClass="bg-primary-light/60"
                    delay={0.6}
                  />
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 bg-white/[0.01] border-y border-white/5">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden glass p-2 rotate-3 border-primary/20">
                    <img 
                      src="https://picsum.photos/seed/minecraft-purple/800/800" 
                      alt="Server Build" 
                      className="w-full h-full object-cover rounded-2xl opacity-80 hover:opacity-100 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
                </div>

                <div>
                  <h2 className="text-5xl font-future font-bold mb-8 leading-tight uppercase tracking-tighter">
                    Наследие <br />
                    <span className="text-primary primary-glow">MakeABuilders</span>
                  </h2>
                  <div className="space-y-6 text-white/60 leading-relaxed font-display">
                    <p>
                      Project Extra — это не просто сервер с модами. Это эволюция идей 
                      полу-ванильного сервера MakeABuilders, где во главу угла всегда ставилось 
                      взаимодействие игроков и красота построек.
                    </p>
                    <p>
                      Мы взяли стабильный фундамент и добавили в него глубину. Теперь ваши 
                      постройки могут ожить благодаря механике Create, а ваши приключения 
                      станут по-настоящему опасными в обновленных мирах.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : currentPage === 'rules' ? (
          <RulesPage key="rules" />
        ) : (
          <DonationsPage key="donations" />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <span className="font-future font-bold uppercase tracking-tighter text-glow">Project Extra</span>
          </div>
          
          <div className="flex gap-10 text-xs font-mono uppercase tracking-widest text-white/40">
            <button onClick={() => setCurrentPage('rules')} className="hover:text-primary-light transition-colors">Правила</button>
            <button onClick={() => setCurrentPage('donations')} className="hover:text-primary-light transition-colors">Донат</button>
            <a href="#" className="hover:text-primary-light transition-colors">Wiki</a>
            <a href="#" className="hover:text-primary-light transition-colors">Карта</a>
          </div>

          <div className="text-xs text-white/40 font-mono text-center md:text-right">
            © 2026 Project Extra, made with ❤ by MakeACake Studios
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
}
