import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Nebula Oyster",
    description: "Pacific oyster, yuzu foam, liquid nitrogen pearls.",
    price: "24",
    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=2670&auto=format&fit=crop",
    category: "starter",
    featured: true
  },
  {
    id: 2,
    name: "Obsidian Wagyu",
    description: "A5 Wagyu, charcoal crust, smoked blackberry reduction.",
    price: "85",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop",
    category: "main",
    featured: true
  },
  {
    id: 3,
    name: "Lunar Truffle",
    description: "White truffle risotto, gold leaf, parmesan crisp.",
    price: "45",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2b?q=80&w=2600&auto=format&fit=crop",
    category: "main",
    featured: true
  },
  {
    id: 4,
    name: "Solar Sphere",
    description: "Mango sphere, chili thread, coconut ash.",
    price: "18",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce0fa?q=80&w=2670&auto=format&fit=crop",
    category: "dessert",
    featured: true
  },
  {
    id: 5,
    name: "Quantum Sashimi",
    description: "Bluefin tuna, jalapeño emulsion, crispy rice.",
    price: "32",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd43ca?q=80&w=2670&auto=format&fit=crop",
    category: "starter",
    featured: false
  },
  {
    id: 6,
    name: "Gravity Burger",
    description: "Dry-aged blend, bone marrow aioli, brioche bun.",
    price: "28",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2700&auto=format&fit=crop",
    category: "main",
    featured: false
  },
  {
    id: 7,
    name: "Stardust Mousse",
    description: "70% dark chocolate, raspberry dust, popping candy.",
    price: "16",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=2670&auto=format&fit=crop",
    category: "dessert",
    featured: false
  },
  {
    id: 8,
    name: "Plasma Mary",
    description: "Clarified tomato water, vodka, spice sphere.",
    price: "18",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2670&auto=format&fit=crop",
    category: "cocktail",
    featured: false
  }
];

// Configuration for colors based on index in a list or category can also reside here
export const CARD_COLORS = ["bg-pop-blue", "bg-pop-pink", "bg-pop-yellow", "bg-pop-cream"];
export const TEXT_COLORS = ["text-white", "text-black", "text-black", "text-black"];