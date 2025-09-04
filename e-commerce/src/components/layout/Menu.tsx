"use client";

import React, { useState } from "react";
import { FaHome, FaThLarge, FaBox, FaShoppingCart, FaClipboardList, FaUser, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative z-50 ml-1">
      {/* Botão Hambúrguer */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] bg-transparent cursor-pointer z-50"
      >
        <span className={`w-[25px] h-[3px] bg-white rounded transition-transform duration-300 ${isOpen ? "translate-y-[8px] rotate-45" : ""}`}></span>
        <span className={`w-[25px] h-[3px] bg-white rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`w-[25px] h-[3px] bg-white rounded transition-transform duration-300 ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`}></span>
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 backdrop-blur-sm bg-white/5 z-40 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Menu de opções */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-[#1D2B66] text-white p-6 transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Botão Fechar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 flex flex-col justify-center items-center gap-[5px] bg-transparent cursor-pointer"
        >
            <span className={`w-[25px] h-[3px] bg-white rounded transition-transform duration-300 ${isOpen ? "translate-y-[2px] rotate-58" : ""}`}></span>
            <span className={`w-[25px] h-[3px] bg-white rounded transition-transform duration-300 ${isOpen ? "-translate-y-[6px] -rotate-60" : ""}`}></span>
        </button>

        <ul className="space-y-6 text-lg font-medium mt-10">
          <li><Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-gray-300"><FaHome /> Início</Link></li>
          <li><Link href="/categories" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-gray-300"><FaThLarge /> Categorias</Link></li>
          <li><Link href="/products" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-gray-300"><FaBox /> Produtos</Link></li>
          <li><Link href="/cart" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-gray-300"><FaShoppingCart /> Carrinho</Link></li>
          <li><Link href="/orders" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-gray-300"><FaClipboardList /> Meus Pedidos</Link></li>
          <li><Link href="/profile" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-gray-300"><FaUser /> Minha Conta</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-gray-300"><FaInfoCircle /> Sobre</Link></li>
        </ul>
      </div>
    </div>
  );
}
