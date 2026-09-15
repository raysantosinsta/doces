"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCartStore, CartItem } from '../store/useCartStore';

const WHATSAPP_NUMBER = "5585996958917";

export const CartFloatingButton = () => {
  const { items, generateWhatsAppLink } = useCartStore();
  
  const totalItems = items.reduce((acc, item: CartItem) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item: CartItem) => acc + (item.price * item.quantity), 0);

  const handleOrder = () => {
    const link = generateWhatsAppLink(WHATSAPP_NUMBER);
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-50 md:bottom-6 md:left-auto md:right-6 md:w-96 md:p-0"
        >
          <div className="bg-chocolate text-cream p-4 rounded-2xl shadow-2xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-sans text-sm opacity-90">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
              <span className="font-serif font-bold text-lg">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <button
              onClick={handleOrder}
              className="bg-gold text-chocolate px-6 py-3 rounded-full font-serif font-medium flex items-center gap-2 hover:bg-gold-light transition-colors"
            >
              <ShoppingBag size={20} />
              <span>Ver Pedido</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
