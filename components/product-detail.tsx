'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering:\n${product.name}\nSize: ${product.sizes}\nPrice: ${product.price.toLocaleString('ru-RU')} ${product.currency}`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-[calc(100vh-73px)]">
      <div className="relative bg-neutral-50 lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-neutral-300 border-t-black rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      <div className="px-8 py-12 lg:px-16 lg:py-20 flex flex-col">
        <div className="max-w-xl">
          <div className="mb-8">
            <h2 className="text-4xl font-light tracking-wide mb-4">{product.name}</h2>
            <p className="text-3xl font-light mb-6">
              {product.price.toLocaleString('ru-RU')} {product.currency}
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-sm tracking-wider text-neutral-500 mb-2">SIZES</h3>
              <p className="text-lg font-light">{product.sizes}</p>
            </div>

            <div>
              <h3 className="text-sm tracking-wider text-neutral-500 mb-2">FABRIC</h3>
              <p className="text-lg font-light">{product.fabric}</p>
            </div>

            <div>
              <h3 className="text-sm tracking-wider text-neutral-500 mb-2">SEASON</h3>
              <p className="text-lg font-light">{product.season}</p>
            </div>

            <div>
              <h3 className="text-sm tracking-wider text-neutral-500 mb-2">DESCRIPTION</h3>
              <p className="text-base leading-relaxed text-neutral-700">{product.description}</p>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppOrder}
            className="w-full h-14 text-base tracking-wide bg-black hover:bg-neutral-800 transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Order via WhatsApp
          </Button>

          <div className="mt-12 border-t border-neutral-200 pt-12">
            <h3 className="text-sm tracking-wider text-neutral-500 mb-6">VIRTUAL TRY-ON</h3>
            <div
              id="spree-try-on-container"
              className="min-h-[400px] bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200"
            >
              <p className="text-neutral-400 text-sm tracking-wide">Virtual Try-On Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
