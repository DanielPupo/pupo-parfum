"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Contato() {
  const [nome, setNome] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleSubmeter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome || !mensagem) {
      alert("Por favor, preencha todos os campos do formulário.")
      return
    }
    
    // Feedback interativo para o usuário
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso para nossa equipe de perfumistas.`)
    
    // Limpa o formulário
    setNome("")
    setMensagem("")
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-slate-50">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        
        {/* Bloco de Informações Corporativas */}
        <div className="flex flex-col justify-between rounded-3xl border border-yellow-500/20 bg-slate-950/70 p-8 shadow-2xl shadow-black/40">
          <div>
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
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition-colors hover:border-slate-700">
                <p className="text-sm font-semibold text-yellow-400">WhatsApp</p>
                <p className="mt-1 text-slate-300 font-medium">(11) 99999-0000</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition-colors hover:border-slate-700">
                <p className="text-sm font-semibold text-yellow-400">E-mail</p>
                <a href="mailto:contato@pupoparfums.com" className="mt-1 block text-slate-300 transition-colors hover:text-yellow-400 font-medium">
                  contato@pupoparfums.com
                </a>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition-colors hover:border-slate-700">
                <p className="text-sm font-semibold text-yellow-400">Atendimento</p>
                <p className="mt-1 text-slate-300">Segunda a sábado, das 9h às 19h.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário Interativo */}
        <Card className="border border-slate-800 bg-slate-950/80 shadow-2xl shadow-black/30 backdrop-blur-md rounded-3xl">
          <CardHeader className="pt-8 px-8">
            <CardTitle className="text-2xl font-bold text-white">Envie sua mensagem</CardTitle>
            <CardDescription className="text-slate-400">
              Preencha os campos abaixo para entrar em contato com a nossa equipe.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8 pt-0">
            <form onSubmit={handleSubmeter} className="space-y-5">
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-yellow-400">Nome</label>
                <input 
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-yellow-500/50 focus:bg-slate-900"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-yellow-400">Mensagem</label>
                <textarea 
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Conte em poucas palavras o que você deseja..."
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-yellow-500/50 focus:bg-slate-900"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-yellow-500 py-6 text-sm font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20">
                Enviar mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}