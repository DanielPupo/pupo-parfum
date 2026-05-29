import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Pupo Parfum",
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
      className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header/>
        <main className="flex-1 bg-black">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
