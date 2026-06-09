import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import products from "../../produtos.json"

export default function Home() {
  const produtosEmDestaque = products.filter(
    (produto) => produto.destaque === true
  )

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="overflow-hidden rounded-3xl border border-yellow-500/10 bg-slate-950/70 shadow-2xl shadow-black/40">
          <Carrossel />
        </div>

        <div className="rounded-3xl border border-yellow-500/20 bg-slate-950/70 p-8 shadow-2xl shadow-black/40 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Coleção exclusiva
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Produtos em destaque
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Os melhores perfumes selecionados para você, com sofisticação e personalidade.
          </p>
        </div>

        {/* Grid de Vendas Otimizado */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produtosEmDestaque.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageSrc={produto.imageSrc}
              destaque={produto.destaque}
            />
          ))}
        </div>
      </div>
    </div>
  )
}