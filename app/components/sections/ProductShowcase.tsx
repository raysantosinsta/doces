"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { PRODUCTS, CATEGORIES, Product } from '../../data/products';

export const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const { items, addItem, removeItem, updateQuantity } = useCartStore();

  const filteredProducts = activeCategory === "Todos" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <Section id="cardapio" className="bg-cream-dark/30">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-chocolate mb-4">Nosso Cardápio</h2>
        <p className="font-sans text-chocolate-light">Escolha seus favoritos e monte seu pedido.</p>
      </div>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar justify-start md:justify-center">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
              activeCategory === category 
                ? 'bg-chocolate text-cream' 
                : 'bg-cream text-chocolate-light hover:bg-cream-dark'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const cartItem = items.find(i => i.id === product.id);
            const quantity = cartItem?.quantity || 0;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isPopular && (
                      <span className="bg-gold text-chocolate px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        🔥 Mais pedido
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-rose text-cream px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        ✨ Novidade
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-chocolate font-medium">{product.name}</h3>
                  </div>
                  <p className="text-chocolate-light text-sm mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-sans font-semibold text-lg text-chocolate">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    
                    {quantity > 0 ? (
                      <div className="flex items-center bg-cream-dark rounded-full p-1">
                        <button 
                          onClick={() => quantity === 1 ? removeItem(product.id) : updateQuantity(product.id, quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-cream text-chocolate rounded-full hover:bg-gold-light transition-colors shadow-sm"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium text-chocolate">{quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-chocolate text-cream rounded-full hover:bg-chocolate-light transition-colors shadow-sm"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                        className="bg-chocolate text-cream px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-chocolate-light transition-colors"
                      >
                        <Plus size={16} />
                        Adicionar
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
