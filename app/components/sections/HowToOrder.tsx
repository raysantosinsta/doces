import React from 'react';
import { Section } from '../ui/Section';
import { MousePointerClick, ShoppingBag, MessageCircle, HeartHandshake } from 'lucide-react';

export const HowToOrder = () => {
  const steps = [
    { icon: <MousePointerClick size={32} />, title: "01", desc: "Escolha seus doces" },
    { icon: <ShoppingBag size={32} />, title: "02", desc: "Monte seu pedido" },
    { icon: <MessageCircle size={32} />, title: "03", desc: "Envie pelo WhatsApp" },
    { icon: <HeartHandshake size={32} />, title: "04", desc: "Receba ou retire" }
  ];

  return (
    <Section className="bg-cream-dark/50">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-chocolate mb-4">🛵 Peça em poucos passos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative">
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-chocolate-light/20 z-0" />
        
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-cream shadow-md flex items-center justify-center text-chocolate mb-6 border border-gold/20">
              {step.icon}
            </div>
            <h3 className="font-serif text-2xl text-gold mb-2">{step.title}</h3>
            <p className="font-sans text-chocolate font-medium text-lg">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
