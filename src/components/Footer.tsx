import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-36">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-slate-950/5 p-4 text-xs text-slate-400 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="space-y-1">
          <p className="font-medium text-slate-700">&copy; {currentYear} Pupo Parfums. Todos os direitos reservados.</p>
          <p className="text-yellow-500">Feito com carinho para você.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm sm:justify-end">
          <Link href="/politicas" className="text-slate-500 hover:text-yellow-600 transition-colors duration-200">
            Políticas
          </Link>
          <Link href="/termos" className="text-slate-500 hover:text-yellow-600 transition-colors duration-200">
            Termos
          </Link>
          <Link href="/redes-sociais" className="text-slate-500 hover:text-yellow-600 transition-colors duration-200">
            Redes Sociais
          </Link>
        </div>
      </div>
    </footer>
  );
}
