"use client";

import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Camera } from 'lucide-react';

export const InstagramGallery = () => {
  return (
    <Section className="bg-cream">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-chocolate mb-4 flex items-center justify-center gap-3">
          <Camera size={36} className="text-chocolate" />
          Feito para adoçar seus momentos
        </h2>
        <p className="font-sans text-chocolate-light">Acompanhe as novidades no nosso Instagram.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8">
        {[
          "1579954115545-a95591f28bfc", "1606313564200-e75d5e30476c", 
          "1624353365286-3f8d62daad51", "1551024601-bec78aea704b",
          "1578985545062-69928b1d9587", "1550617931-e17a7b70dce2",
          "1558961363-fa8fdf82db35", "1606313564200-e75d5e30476c"
        ].map((id, index) => (
          <div key={index} className="aspect-square relative overflow-hidden group">
            <img 
              src={`https://images.unsplash.com/photo-${id}?q=80&w=400&auto=format&fit=crop`} 
              alt={`Instagram photo ${index}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/40 transition-colors flex items-center justify-center">
              <Camera className="text-cream opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={() => window.open('https://www.instagram.com/yasminedantasdoceria?stkn=ZDNlZDc0MzIxNw==', '_blank')}
        >
          <Camera size={20} />
          Ver Instagram
        </Button>
      </div>
    </Section>
  );
};
