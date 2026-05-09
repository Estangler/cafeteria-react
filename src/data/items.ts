export type Items = {
  id: number;
  icon: string;
  label: string;
  category: string;
  price: number;
};

export const ITEMS: Items[] = [
  {
    id: 0,
    icon: "☕",
    label: "Café Especial",
    category: "Bebidas",
    price: 29.9,
  },

  {
    id: 1,
    icon: "🥐",
    label: "Croissant",
    category: "Pães",
    price: 8.5,
  },
  {
    id: 2,
    icon: "🍊",
    label: "Suco de Laranja",
    category: "Bebidas",
    price: 12.0,
  },
  {
    id: 3,
    icon: "🎂",
    label: "Bolo de Cenoura",
    category: "Doces",
    price: 18.0,
  },
  {
    id: 4,
    icon: "🥪",
    label: "Sanduíche Natural",
    category: "Salgados",
    price: 22.5,
  },
  {
    id: 5,
    icon: "💧",
    label: "Água com Gás",
    category: "Bebidas",
    price: 5.0,
  },
];
