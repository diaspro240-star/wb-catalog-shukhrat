import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl tracking-[0.2em] font-light text-center">PURE</h1>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-wide mb-4">New Collection</h2>
          <p className="text-neutral-600 text-lg tracking-wide">Premium Oversized Sets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-light tracking-wide group-hover:text-neutral-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm tracking-wider">{product.sizes}</p>
                <p className="text-lg font-light">
                  {product.price.toLocaleString('ru-RU')} {product.currency}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-neutral-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-neutral-500 text-sm tracking-wider">© 2025 PURE. Premium Fashion.</p>
        </div>
      </footer>
    </main>
  );
}
