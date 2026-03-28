import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Star, 
  Crown, 
  Gem, 
  Check, 
  ShoppingBag,
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DonationTier = ({ 
  name, 
  price, 
  features, 
  icon: Icon, 
  colorClass, 
  recommended = false,
  delay = 0 
}: {
  name: string;
  price: string;
  features: string[];
  icon: any;
  colorClass: string;
  recommended?: boolean;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={cn(
      "relative p-8 glass rounded-3xl flex flex-col h-full border-primary/10 hover:border-primary/30 transition-all duration-300 group",
      recommended && "border-primary/40 bg-primary/5 scale-105 z-10"
    )}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-future uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        Популярный выбор
      </div>
    )}

    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg", colorClass)}>
      <Icon className="w-7 h-7 text-white" />
    </div>

    <h3 className="text-2xl font-future font-bold mb-2 uppercase tracking-tight">{name}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-4xl font-future font-black text-primary-light">{price}</span>
      <span className="text-white/40 text-sm font-display">/ месяц</span>
    </div>

    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/70 font-display">
          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          {feature}
        </li>
      ))}
    </ul>

    <button className={cn(
      "w-full py-4 rounded-2xl font-future font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
      recommended ? "bg-primary text-white" : "glass hover:bg-white/10"
    )}>
      <ShoppingBag className="w-4 h-4" />
      Выбрать
    </button>
  </motion.div>
);

export const DonationsPage = () => {
  const tiers = [
    {
      name: "Extra",
      price: "299₽",
      icon: Zap,
      colorClass: "bg-primary/40",
      features: [
        "Много-много интересных фишек"
      ]
    },
    {
      name: "Ultra",
      price: "599₽",
      icon: Star,
      colorClass: "bg-primary/60",
      recommended: true,
      features: [
        "Много-много интересных фишек",
        "Ещё больше всего интересного"
      ]
    },
    {
      name: "Legend",
      price: "1299₽",
      icon: Crown,
      colorClass: "bg-primary",
      features: [
        "Много-много интересных фишек",
        "Ещё больше всего интересного",
        "Ещё больше всего интересного"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
        <h1 className="text-6xl font-future font-black mb-6 uppercase tracking-tighter text-glow">Поддержка Проекта</h1>
        <p className="text-white/40 font-display max-w-2xl mx-auto text-lg leading-relaxed">
          Ваши пожертвования помогают нам оплачивать хостинг, разрабатывать новые системы 
          и поддерживать стабильную работу Project Extra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {tiers.map((tier, idx) => (
          <DonationTier key={idx} {...tier} delay={idx * 0.1} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-10 rounded-[40px] border-primary/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
              <ShieldCheck className="w-6 h-6 text-primary-light" />
            </div>
            <h2 className="text-2xl font-future font-bold uppercase tracking-tight">Безопасность</h2>
          </div>
          <p className="text-white/60 font-display leading-relaxed">
            Все платежи проходят через защищенные шлюзы. Мы не храним данные ваших карт. 
            Привилегии выдаются автоматически в течение 5-10 минут после оплаты.
          </p>
        </div>

        <div className="glass p-10 rounded-[40px] border-primary/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
              <CreditCard className="w-6 h-6 text-primary-light" />
            </div>
            <h2 className="text-2xl font-future font-bold uppercase tracking-tight">Способы оплаты</h2>
          </div>
          <p className="text-white/60 font-display leading-relaxed">
            Мы принимаем банковские карты (МИР, Visa, Mastercard), СБП, ЮMoney и криптовалюты. 
            Если у вас возникли проблемы, обратитесь в поддержку Discord.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-white/20 text-xs font-mono uppercase tracking-[0.3em]">
          Project Extra не является официальным продуктом Minecraft. Мы не связаны с Mojang AB.
        </p>
      </div>
    </motion.div>
  );
};
