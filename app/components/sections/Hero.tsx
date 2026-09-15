"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { CameraIcon, MapPin } from 'lucide-react';
import { useRef } from 'react';
import { useCartStore } from '../../store/useCartStore';
import { Button } from '../ui/Button';

const WHATSAPP_NUMBER = "5585996958917";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { generateWhatsAppLink, items } = useCartStore();

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/yasminedantasdoceria?stkn=ZDNlZDc0MzIxNw==', '_blank');
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('cardapio');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <img
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop"
          alt="Doces Artesanais"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/50 to-chocolate/30 mix-blend-multiply" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 border border-cream/20 text-cream text-sm"
        >
          <MapPin size={14} />
          <span>Fortaleza - CE | Delivery e retirada</span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-tight"
          >
            Yasmine Dantas <br/> <span className="text-gold italic">Doceria</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
            onClick={handleInstagramClick}
            className="flex items-center gap-2 text-lg px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white focus:ring-pink-600"
          >
            <CameraIcon size={24} />
            Visitar Instagram
          </Button>

          <Button
            variant="outline-light"
            onClick={scrollToMenu}
            className="text-lg px-8 py-4"
          >
            Ver cardápio
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
