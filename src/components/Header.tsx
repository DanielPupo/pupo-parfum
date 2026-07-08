"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  User,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <Image
            src="/logo/logo.png"
            alt="Pupo Parfum"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              PUPO
            </h1>

            <span className="text-xs uppercase tracking-[0.35em] text-yellow-500">
              PARFUMS
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}

        <nav className="hidden lg:flex items-center gap-10">

          <Link
            href="/"
            className="text-sm text-white transition hover:text-yellow-500"
          >
            Início
          </Link>

          <Link
            href="/masculinos"
            className="text-sm text-white transition hover:text-yellow-500"
          >
            Masculinos
          </Link>

          <Link
            href="/femininos"
            className="text-sm text-white transition hover:text-yellow-500"
          >
            Femininos
          </Link>

          <Link
            href="/arabes"
            className="text-sm text-white transition hover:text-yellow-500"
          >
            Árabes
          </Link>

          <Link
            href="/presentes"
            className="text-sm text-white transition hover:text-yellow-500"
          >
            Presentes
          </Link>

        </nav>

        {/* BUSCA */}

        <div className="hidden xl:flex relative w-80">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Buscar perfume..."
            className="
              w-full
              rounded-full
              border
              border-white/10
              bg-white/5
              py-3
              pl-11
              pr-5
              text-sm
              text-white
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-yellow-500
              focus:bg-white/10
            "
          />

        </div>

        {/* AÇÕES */}

        <div className="flex items-center gap-5">

          <button className="hidden md:flex text-white transition hover:text-yellow-500">
            <Heart size={22} />
          </button>

          <button className="hidden md:flex text-white transition hover:text-yellow-500">
            <User size={22} />
          </button>

          {/* CARRINHO */}

          <button className="relative flex text-white transition hover:text-yellow-500">

            <ShoppingBag size={24} />

            {totalItems > 0 && (
              <span
                className="
                  absolute
                  -right-2
                  -top-2
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500
                  text-[10px]
                  font-bold
                  text-black
                "
              >
                {totalItems}
              </span>
            )}

          </button>

          {/* MENU MOBILE */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>
            {/* OVERLAY */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-20 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* MENU MOBILE */}

      <div
        className={`
          lg:hidden
          absolute
          top-20
          left-0
          w-full
          overflow-hidden
          border-t
          border-white/10
          bg-[#0B0B0B]/95
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            isOpen
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-6 py-6">

          {/* BUSCA MOBILE */}

          <div className="relative mb-8">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Buscar perfume..."
              className="
                w-full
                rounded-full
                border
                border-white/10
                bg-white/5
                py-3
                pl-11
                pr-4
                text-white
                placeholder:text-gray-400
                outline-none
                focus:border-yellow-500
              "
            />

          </div>

          {/* LINKS */}

          <nav className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-white transition hover:text-yellow-500"
            >
              Início
            </Link>

            <Link
              href="/masculinos"
              onClick={() => setIsOpen(false)}
              className="text-white transition hover:text-yellow-500"
            >
              Masculinos
            </Link>

            <Link
              href="/femininos"
              onClick={() => setIsOpen(false)}
              className="text-white transition hover:text-yellow-500"
            >
              Femininos
            </Link>

            <Link
              href="/arabes"
              onClick={() => setIsOpen(false)}
              className="text-white transition hover:text-yellow-500"
            >
              Árabes
            </Link>

            <Link
              href="/presentes"
              onClick={() => setIsOpen(false)}
              className="text-white transition hover:text-yellow-500"
            >
              Presentes
            </Link>

          </nav>

          {/* AÇÕES */}

          <div className="mt-10 grid grid-cols-3 gap-4">

            <button
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-4
                text-white
                transition
                hover:border-yellow-500
                hover:bg-white/10
              "
            >
              <Heart size={22} />
              <span className="text-xs">Favoritos</span>
            </button>

            <button
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-4
                text-white
                transition
                hover:border-yellow-500
                hover:bg-white/10
              "
            >
              <User size={22} />
              <span className="text-xs">Conta</span>
            </button>

            <button
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-4
                text-white
                transition
                hover:border-yellow-500
                hover:bg-white/10
              "
            >
              <ShoppingBag size={22} />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    right-5
                    top-3
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-500
                    text-[10px]
                    font-bold
                    text-black
                  "
                >
                  {totalItems}
                </span>
              )}

              <span className="text-xs">
                Carrinho
              </span>

            </button>

          </div>

        </div>

      </div>

    </header>
  );
}