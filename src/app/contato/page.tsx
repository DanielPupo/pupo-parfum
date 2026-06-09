import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Contato() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-slate-50">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-3xl border border-yellow-500/20 bg-slate-950/70 p-8 shadow-2xl shadow-black/40">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Fale conosco
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Estamos prontos para te atender
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Quer saber mais sobre nossos perfumes, fazer um pedido especial ou receber indicações de fragrâncias?
            Nossa equipe está à disposição para transformar sua experiência em algo único.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-yellow-400">WhatsApp</p>
              <p className="mt-1 text-slate-300">(11) 99999-0000</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-yellow-400">E-mail</p>
              <a href="mailto:contato@pupoparfums.com" className="mt-1 block text-slate-300 transition-colors hover:text-yellow-400">
                contato@pupoparfums.com
              </a>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-yellow-400">Atendimento</p>
              <p className="mt-1 text-slate-300">Segunda a sábado, das 9h às 19h.</p>
            </div>
          </div>
        </div>

        <Card className="border border-slate-800 bg-slate-950/80 shadow-2xl shadow-black/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Envie sua mensagem</CardTitle>
            <CardDescription className="text-slate-400">
              Preencha os campos abaixo para entrar em contato com a nossa equipe.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-yellow-400">Nome</p>
              <p className="mt-1 text-slate-300">Seu nome completo</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-yellow-400">Mensagem</p>
              <p className="mt-1 text-slate-300">Conte em poucas palavras o que você deseja.</p>
            </div>
            <Button className="w-full bg-yellow-500 text-slate-950 hover:bg-yellow-400">
              Enviar mensagem
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}