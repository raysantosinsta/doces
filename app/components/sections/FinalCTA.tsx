"use client";

import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { useCartStore } from '../../store/useCartStore';
import { Candy } from 'lucide-react';

const WHATSAPP_NUMBER = "5585996958917";

export const FinalCTA = () => {
  const { generateWhatsAppLink } = useCartStore();

  return (
    <Section noPadding className="w-full max-w-none bg-cream border-t border-gold/20">
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="font-serif text-5xl md:text-7xl text-chocolate mb-6 flex items-center justify-center gap-4">
          <Candy size={56} /> 
          Deu vontade?
        </h2>
        <p className="font-sans text-xl text-chocolate-light mb-10 max-w-2xl mx-auto">
          Escolha seus doces favoritos, monte seu pedido e venha adoçar seu dia conosco!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-sans text-lg px-10 shadow-xl"
            onClick={() => window.open(generateWhatsAppLink(WHATSAPP_NUMBER), '_blank')}
          >
            🟢 Fazer meu pedido
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="font-sans text-lg px-10"
            onClick={() => {
              document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver cardápio
          </Button>
        </div>
      </div>
    </Section>
  );
};
