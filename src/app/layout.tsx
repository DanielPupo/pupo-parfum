import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/CartContext";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Pupo Parfums",
  description: "A melhor perfumaria do mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"    
      className={cn("h-full", "antialiased", roboto.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        {/* 2. Envolva o conteúdo com o CartProvider */}
        <CartProvider>
          <Header />
          <main className="flex-1 bg-black">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
