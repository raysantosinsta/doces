export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const CATEGORIES = ["Todos", "Brownies", "Doces", "Bolos", "Kits", "Presentes"];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Brownie Gourmet Tradicional",
    description: "Massa super úmida com casquinha crocante e pedaços de chocolate nobre.",
    price: 12.00,
    category: "Brownies",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    isPopular: true,
  },
  {
    id: "p2",
    name: "Brownie com Ninho e Nutella",
    description: "O queridinho: brownie recheado com creme de ninho trufado e nutella pura.",
    price: 18.50,
    category: "Brownies",
    imageUrl: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop",
    isPopular: true,
  },
  {
    id: "p3",
    name: "Caixa Degustação de Brigadeiros",
    description: "Caixa com 12 unidades sortidas: Ao leite, Ninho, Churros e Pistache.",
    price: 45.00,
    category: "Doces",
    imageUrl: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Bolo Vulcão de Cenoura",
    description: "Massa fofinha de cenoura com cobertura generosa de brigadeiro cremoso.",
    price: 55.00,
    category: "Bolos",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    isPopular: true,
  },
  {
    id: "p5",
    name: "Kit Festa na Caixa",
    description: "Ideal para 2 pessoas: 1 Mini Bolo, 8 Docinhos, 2 Brownies e Salgados.",
    price: 120.00,
    category: "Kits",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "p6",
    name: "Cesta de Presente Especial",
    description: "Uma seleção premium dos nossos melhores doces em uma linda cesta decorada.",
    price: 180.00,
    category: "Presentes",
    imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
  }
];
