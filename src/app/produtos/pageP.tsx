import CardProduto from "@/components/CardProduto"
import products from "../../../produtos.json"

export default function Produtos() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-slate-50">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-yellow-500/20 bg-slate-950/70 p-8 shadow-2xl shadow-black/40">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Coleção completa
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Descubra todos os perfumes da Pupo Parfums
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Explore fragrâncias pensadas para cada momento, estação e ocasião.
            Cada perfume foi selecionado para entregar sofisticação, presença e personalidade.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
          <span>
            <strong className="text-white">{products.length}</strong> perfumes disponíveis
          </span>
          <span className="text-slate-400">Estilo, elegância e personalidade em cada aroma.</span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((produto) => (
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
      </section>
    </div>
  )
}