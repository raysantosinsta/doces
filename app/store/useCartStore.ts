import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  generateWhatsAppLink: (phoneNumber: string) => string;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (newItem) => set((state) => {
    const existingItem = state.items.find((item) => item.id === newItem.id);
    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return { items: [...state.items, { ...newItem, quantity: 1 }] };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  })),
  clearCart: () => set({ items: [] }),
  generateWhatsAppLink: (phoneNumber: string) => {
    const items = get().items;
    if (items.length === 0) return `https://wa.me/${phoneNumber}`;

    let message = "Olá! Gostaria de fazer o seguinte pedido:%0A%0A";
    let total = 0;

    items.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      message += `${item.quantity}x ${item.name} - R$ ${itemTotal.toFixed(2).replace('.', ',')}%0A`;
    });

    message += `%0A*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;

    return `https://wa.me/${phoneNumber}?text=${message}`;
  }
}));
