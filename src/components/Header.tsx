'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"

export default function Header() {

  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  return (
    <header className="relative w-full h-16 bg-black border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo da empresa"
            width={50}
            height={70}
            className="h-12 w-auto object-contain"
          />
          <h1 className="text-lg font-bold text-yellow-600">
            Pupo Parfums
          </h1>
        </div>


        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm font-medium text-yellow-600 hover:text-yellow-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/produtos" className="text-sm font-medium text-yellow-600 hover:text-yellow-400 transition-colors duration-200">
            Produtos
          </Link>
          <Link href="/contato" className="text-sm font-medium text-yellow-600 hover:text-yellow-400 transition-colors duration-200">
            Contato
          </Link>
        </nav>
        <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-200 hover:text-yellow-400 transition-colors duration-200 ease-in-out focus:outline-none"
        aria-label={ isOpen ? "Fechar menu" : "Abrir menu" }
        >
          { isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>

        {/*Menu mobile - renderização condicional */}
        <nav className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4 z-40 overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            Contato
          </Link>
        </nav>

    </header>
  );
}
