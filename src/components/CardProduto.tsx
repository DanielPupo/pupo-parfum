"use client";
import { useCart } from "@/context/CartContext";

import Image from "next/image"

interface ProdutoProps {
  id: number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque: boolean
}

export default function CardProduto({ id, title, description, price, imageSrc, destaque }: ProdutoProps) {
  const { addToCart } = useCart();
  // Formatador de moeda para Real (BRL)
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-slate-950/80 hover:shadow-2xl hover:shadow-yellow-500/5">

      {/* Badge de Destaque Elegante */}
      {destaque && (
        <span className="absolute top-4 right-4 z-10 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400 border border-yellow-500/20 backdrop-blur-md">
          Destaque
        </span>
      )}

      {/* Container da Imagem com tamanho fixo e Zoom no Hover */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-900/50 flex items-center justify-center">
        <div className="absolute inset-0 bg-radial from-transparent to-slate-950/50 z-10" />
        {/* Usando uma tag img estilizada ou component Image do Next */}
        <img
          src={imageSrc}
          alt={title}
          className="h-4/5 w-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Bloco de Informações com alturas controladas */}
      <div className="mt-6 flex flex-col flex-grow">
        <h3 className="line-clamp-1 text-lg font-bold text-white transition-colors group-hover:text-yellow-400">
          {title}
        </h3>

        {/* line-clamp-2 garante exatamente 2 linhas de descrição, mantendo o alinhamento */}
        <p className="mt-2 line-clamp-2 h-10 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Preço e Botão */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-900">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500">Apenas</span>
            <span className="text-xl font-black text-white tracking-tight">{formattedPrice}</span>
          </div>

          <button className="cursor-pointer rounded-xl bg-yellow-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-yellow-400 active:scale-95 shadow-lg shadow-yellow-500/10">
            Comprar
          </button>

          <button
            onClick={() => addToCart({ id, title, price })}
            className="bg-yellow-500 text-slate-950 p-2 rounded-xl"
          >
            Adicionar ao Carrinho
          </button>
    
        </div>
      </div>
    </div>
  )
}