"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-600/10 blur-3xl" />
    </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Texto */}

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">

              <Sparkles size={16} />

              Coleção Exclusiva

            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Descubra a
              <span className="block text-yellow-500">
                fragrância perfeita.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Perfumes importados cuidadosamente selecionados para quem
              valoriza elegância, presença e personalidade.
            </p>

            {/* Botões */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/produtos"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
              >
                Explorar Coleção

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="https://chatbot-frontend-iota-five.vercel.app/"
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-yellow-500 hover:bg-white/10"
              >
                <Bot size={20} />

                Especialista em Fragrâncias
              </a>

            </div>

            {/* Cards */}

            <div className="mt-16 grid grid-cols-3 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="text-3xl font-bold text-yellow-500">
                  +500
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Perfumes disponíveis
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="text-3xl font-bold text-yellow-500">
                  100%
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Produtos Originais
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="text-3xl font-bold text-yellow-500">
                  IA
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Consultor Inteligente
                </p>

              </div>

            </div>

          </div>

          {/* Imagem */}

          <div className="relative flex justify-center">

            <div className="absolute h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-3xl" />

            <Image
              src="/hero/perfume.png"
              alt="Perfume Premium"
              width={650}
              height={650}
              priority
              className="relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition duration-500 hover:scale-105"
            />

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center">

        <span className="mb-3 text-xs uppercase tracking-[0.4em] text-zinc-500">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-zinc-700">

          <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-yellow-500" />

        </div>

      </div>

    </section>
  );
}