export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  sizes: string;
  fabric: string;
  season: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'wb-001',
    name: 'PURE Oversized Set',
    price: 12900,
    currency: 'RUB',
    sizes: '46-60 Oversize',
    fabric: 'Premium Lining - Warm Fabric',
    season: 'Autumn, Winter, Spring',
    description: 'Elegant oversized set featuring a half-zip sweatshirt and maxi skirt with side slit. Crafted from premium warm fabric with refined piping details.',
    image: '/images/products/1 copy.webp'
  },
  {
    id: 'wb-002',
    name: 'PURE Sporty Elegance Set',
    price: 11900,
    currency: 'RUB',
    sizes: '42-60 Oversize',
    fabric: 'Premium Lining - Warm Fabric',
    season: 'Autumn, Winter, Spring',
    description: 'Contemporary sporty set with half-zip top and maxi skirt featuring elegant side slit. Premium warm fabric with contrasting piping.',
    image: '/images/products/2 copy.webp'
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
