import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black px-36 py-8 flex flex-col gap-6">
      <div className="flex justify-between items-center text-xs text-yellow-400">
        <p>&copy; {currentYear} Pupo Parfums. Todos os direitos reservados.</p>
        <p className="text-yellow-400">Feito com carinho para você.</p>
      </div>
    </footer>
  );
}
