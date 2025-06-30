import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { FaReact, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full overflow-x-hidden">
      {/* Parte 1: logo, barra de pesquisa, carrinho */}
      <div className="bg-[#2C3E91] text-white p-4 flex flex-wrap items-center gap-4 h-16">
        {/* Logo + nome */}
        <div className="flex items-center flex-shrink-0">
          <FaReact className="text-1xl" />
          <Link
            href="/"
            className="ml-2 font-bold whitespace-nowrap flex-shrink-0"
          >
            Emilian Shop
          </Link>
        </div>

        {/* SearchBar central */}
        <div className="flex-1 min-w-[20%]">
          <SearchBar />
        </div>

        {/* Carrinho */}
        <Link
          href="/cart"
          className="text-white hover:text-gray-300 transition-colors duration-300 flex-shrink-0"
        >
          <FaShoppingCart className="text-2xl" />
        </Link>
      </div>

      {/* Parte 2: menu, login e signup */}
      <div className="bg-[#1D2B66] p-2 h-10 flex items-center justify-between">
        <div className="flex items-center text-white ml-0">
          <Menu />
          <span>Todos</span>
        </div>

        <div className="flex items-center">
          <Link
            href="/login"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white hover:text-gray-300 transition-colors duration-300 ml-4"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
