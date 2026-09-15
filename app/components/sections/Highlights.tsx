"use client";

import React from 'react';
import { Section } from '../ui/Section';
import { Star } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ item }: { item: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full w-full">
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative rounded-2xl overflow-hidden aspect-square group shadow-lg cursor-pointer"
      >
        <img 
          src={item.img} 
          alt={item.name} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/20 to-transparent pointer-events-none" />
        
        {/* 3D Floating Content */}
        <div 
          style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }} 
          className="absolute inset-0 z-10 p-6 flex flex-col justify-between pointer-events-none"
        >
          <div className="self-start glass-card text-chocolate px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
            {item.badge}
          </div>
          
          <div className="glass-card p-5 rounded-xl backdrop-blur-md">
            <h3 className="font-serif text-2xl text-cream mb-1">{item.name}</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Highlights = () => {
  return (
    <Section className="bg-cream">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-chocolate mb-4 flex items-center justify-center gap-3">
          <Star className="fill-gold text-gold" size={36} /> 
          Os queridinhos da Yasmine
        </h2>
        <p className="font-sans text-chocolate-light">Aqueles que conquistam corações na primeira mordida.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Brownie com Ninho", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800", badge: "🔥 Mais pedido" },
          { name: "Bolo Vulcão", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800", badge: "❤️ Favorito" },
          { name: "Kit Festa", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800", badge: "✨ Novidade" },
        ].map((item, idx) => (
          <TiltCard key={idx} item={item} />
        ))}
      </div>
    </Section>
  );
};
