"use client";

import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MapPin, Motorbike, Store, Star } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

const WHATSAPP_NUMBER = "5585996958917";

export const DeliveryInfo = () => {
  const { generateWhatsAppLink } = useCartStore();

  return (
    <Section className="bg-chocolate text-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-4xl mb-4 text-gold">🛵 Delivery ou retirada</h2>
            <div className="flex items-center gap-2 text-cream-dark">
              <MapPin size={20} className="text-rose" />
              <span className="text-lg">Fortaleza - CE</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 bg-chocolate-light p-3 rounded-xl h-fit">
                <Motorbike size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-1">Delivery</h3>
                <p className="text-cream-dark">Receba seu pedido fresquinho onde estiver.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-chocolate-light p-3 rounded-xl h-fit">
                <Store size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-1">Retirada</h3>
                <p className="text-cream-dark">Faça seu pedido e retire na nossa doceria.</p>
              </div>
            </div>
          </div>

          <Button 
            variant="secondary" 
            onClick={() => window.open(generateWhatsAppLink(WHATSAPP_NUMBER), '_blank')}
            className="w-full sm:w-auto mt-4"
          >
            📲 Pedir pelo WhatsApp
          </Button>
        </div>

        {/* Google Reviews Block */}
        <div className="bg-cream text-chocolate p-8 rounded-3xl text-center shadow-2xl mt-8 md:mt-0">
          <h3 className="font-serif text-2xl mb-2">⭐ Sua experiência importa</h3>
          <div className="flex justify-center gap-1 text-gold mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={28} fill="currentColor" />
            ))}
          </div>
          <p className="mb-8 font-medium">Avalie a Yasmine Dantas Doceria no Google e nos ajude a adoçar mais vidas.</p>
          <Button variant="primary" fullWidth className="bg-chocolate hover:bg-chocolate-light">
            Avaliar no Google
          </Button>
        </div>

      </div>
    </Section>
  );
};
