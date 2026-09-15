"use client";

import React, { useRef } from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';

export const DesireBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('cardapio');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section noPadding className="w-full max-w-none overflow-hidden">
      <div ref={ref} className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2000" 
            alt="Doces Premium" 
            className="w-full h-[140%] object-cover -top-[20%] relative"
          />
          <div className="absolute inset-0 bg-chocolate/40 mix-blend-multiply" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl text-cream mb-8 leading-tight"
          >
            "Seu momento merece um doce especial."
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              variant="secondary"
              size="lg"
              onClick={scrollToMenu}
              className="text-lg font-semibold shadow-xl"
            >
              Fazer meu pedido
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
