"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProdutoProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque: boolean;
}

export default function CardProduto({
  id,
  title,
  description,
  price,
  imageSrc,
  destaque,
}: ProdutoProps) {
  const { addToCart } = useCart();

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-[0_20px_80px_rgba(234,179,8,.12)]">

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Badge */}

      {destaque && (
        <span className="absolute right-5 top-5 z-20 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-black">
          Mais Vendido
        </span>
      )}

      {/* Imagem */}

      <div className="relative flex h-72 items-center justify-center overflow-hidden">

        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-8 transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Conteúdo */}

      <div className="space-y-4 p-6">

        {/* Avaliação */}

        <div className="flex items-center gap-1">

          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={15}
              className="fill-yellow-500 text-yellow-500"
            />
          ))}

          <span className="ml-2 text-xs text-zinc-400">
            (4.9)
          </span>

        </div>

        {/* Nome */}

        <h3 className="text-2xl font-bold text-white transition group-hover:text-yellow-500">
          {title}
        </h3>

        {/* Descrição */}

        <p className="line-clamp-2 text-sm leading-7 text-zinc-400">
          {description}
        </p>

        {/* Características */}

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
            Amadeirado
          </span>

          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
            Longa Fixação
          </span>

        </div>

        {/* Preço */}

        <div>

          <span className="text-xs uppercase tracking-widest text-zinc-500">
            A partir de
          </span>

          <h2 className="mt-1 text-3xl font-black text-yellow-500">
            {formattedPrice}
          </h2>

        </div>

        {/* Botões */}

        <div className="flex gap-3">

          <button
            className="flex-1 rounded-2xl bg-yellow-500 py-4 font-bold text-black transition duration-300 hover:bg-yellow-400"
          >
            Comprar Agora
          </button>

          <button
            onClick={() =>
              addToCart({
                id,
                title,
                price,
              })
            }
            className="rounded-2xl border border-white/10 bg-zinc-900 px-5 transition duration-300 hover:border-yellow-500 hover:bg-zinc-800"
          >
            <ShoppingCart
              size={20}
              className="text-white"
            />
          </button>

        </div>

      </div>

    </article>
  );
}