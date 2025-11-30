import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getProductById, products } from '@/lib/products';
import { ProductDetail } from '@/components/product-detail';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Product not found</h1>
          <Link href="/" className="text-neutral-600 hover:text-black transition-colors">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-neutral-600 hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm tracking-wide">Back</span>
          </Link>
          <h1 className="text-2xl tracking-[0.2em] font-light">PURE</h1>
          <div className="w-20"></div>
        </div>
      </header>

      <ProductDetail product={product} />
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
