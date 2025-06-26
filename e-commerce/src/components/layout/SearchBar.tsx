"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <form
      className="flex items-center w-full max-w-md bg-white border rounded overflow-hidden"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Pesquisar Emilian Shop"
        className="flex-1 px-4 py-2 outline-none text-black"
      />
      <button
        type="submit"
        className="w-10 h-10 flex items-center justify-center bg-[#2C3E91] text-white p-0 m-0 cursor-pointer hover:bg-[#1A237E] transition-colors duration-300"
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
}
