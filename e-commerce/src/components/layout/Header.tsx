import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { FaReact, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-[#2C3E91] text-white p-4 flex flex-nowrap items-center gap-4 w-full overflow-x-auto">
      {/* Logo + nome */}
      <div className="flex items-center flex-shrink-0">
        <FaReact size={25} />
        <Link
          href="/"
          className="ml-2 text-lg font-bold whitespace-nowrap flex-shrink-0"
        >
          Emilian Shop
        </Link>
      </div>

      {/* SearchBar central */}
      <div className="flex-1 min-w-[150px] max-w-[300px]">
        <SearchBar />
      </div>

      {/* Carrinho */}
      <Link
        href="/cart"
        className="text-white hover:text-gray-300 transition-colors duration-300 flex-shrink-0"
      >
        <FaShoppingCart size={25} />
      </Link>

      {/* Menu */}
      <div className="flex-shrink-0">
        <Menu />
      </div>
    </header>
  );
}
