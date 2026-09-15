"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { MapPin, MessageCircle } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

const WHATSAPP_NUMBER = "5585996958917";

export const Hero = () => {
  const { generateWhatsAppLink, items } = useCartStore();

  const handleWhatsAppClick = () => {
    const link = generateWhatsAppLink(WHATSAPP_NUMBER);
    window.open(link, '_blank');
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('cardapio');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop" 
          alt="Doces Artesanais" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/50 to-chocolate/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 border border-cream/20 text-cream text-sm"
        >
          <MapPin size={14} />
          <span>Fortaleza - CE | Delivery e retirada</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight"
        >
          Yasmine Dantas <br/> <span className="text-gold italic">Doceria</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-cream-dark mb-10 font-sans max-w-2xl font-light"
        >
          Adoçando momentos inesquecíveis.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 text-lg px-8 py-4 bg-green-500 hover:bg-green-600 text-white focus:ring-green-500"
          >
            <MessageCircle size={24} />
            {items.length > 0 ? "Concluir Pedido" : "Fazer pedido"}
          </Button>
          
          <Button 
            variant="outline-light" 
            onClick={scrollToMenu}
            className="text-lg px-8 py-4"
          >
            Ver cardápio
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
