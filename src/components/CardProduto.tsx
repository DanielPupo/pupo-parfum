import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

// 1. Tipagem das propriedades do produto
interface CardProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  id,
  destaque
}: CardProdutoProps) {

  // 2. Formatação de moeda BRL nativa
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/85 pt-0 shadow-2xl shadow-black/30">
      {/* Selo de destaque absoluto sobreposto no canto superior direito do card */}
      {destaque && (
        <Badge variant="secondary" className="absolute right-3 top-3 z-30 border border-yellow-500/30 bg-yellow-500/15 text-yellow-300 shadow-sm">
          Destaque
        </Badge>
      )}

      {/* Container de imagem do produto com Image do Next.js para otimização e SEO */}
      <div className="relative mt-4 aspect-video w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-sm text-slate-400">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="border-t border-slate-800 bg-slate-900/60">
        {/* Exibição do botão com o preço formatado */}
        <Button className="w-full bg-yellow-500 font-semibold text-slate-950 hover:bg-yellow-400">
          {formattedPrice}
        </Button>
      </CardFooter>
    </Card>
  )
}