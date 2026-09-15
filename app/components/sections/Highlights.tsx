import React from 'react';
import { Section } from '../ui/Section';
import { Star } from 'lucide-react';

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
        {/* Mocking 3 top items for the highlight section */}
        {[
          { name: "Brownie com Ninho", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800", badge: "🔥 Mais pedido" },
          { name: "Bolo Vulcão", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800", badge: "❤️ Favorito" },
          { name: "Kit Festa", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800", badge: "✨ Novidade" },
        ].map((item, idx) => (
          <div key={idx} className="relative rounded-2xl overflow-hidden aspect-square group shadow-md">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 to-transparent" />
            
            <div className="absolute top-4 left-4 bg-gold text-chocolate px-3 py-1 rounded-full text-xs font-bold shadow-md">
              {item.badge}
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <h3 className="font-serif text-2xl mb-1">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
