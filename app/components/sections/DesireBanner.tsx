"use client";

import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export const DesireBanner = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('cardapio');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section noPadding className="w-full max-w-none">
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2000" 
          alt="Doces Premium" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-chocolate/40 mix-blend-multiply" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h2 className="font-serif text-4xl md:text-6xl text-cream mb-8 leading-tight">
            "Seu momento merece um doce especial."
          </h2>
          <Button 
            variant="secondary"
            size="lg"
            onClick={scrollToMenu}
            className="text-lg font-semibold shadow-xl"
          >
            Fazer meu pedido
          </Button>
        </div>
      </div>
    </Section>
  );
};
