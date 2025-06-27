"use client";

import React, { useState, useEffect } from "react";

export default function Menu() {
    const [isOpen, setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setOpen(!isOpen);
        }, 250);
    };

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timeout = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <div className="relative z-50 ml-4">
            {/* Botão Hambúrguer */}
            <button
                onClick={handleClick}
                className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] border-none bg-transparent cursor-pointer z-50"
            >
                <span className={`w-[25px] h-[3px] bg-white rounded transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-[8px] rotate-45" : ""}`}></span>
                <span className={`w-[25px] h-[3px] bg-white rounded transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`w-[25px] h-[3px] bg-white rounded transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`}></span>
            </button>

            {/* Menu de opções */}
            {/* 
                {shouldRender && (
                <div className={`absolute top-20 right-0 w-[200px] bg-white shadow-lg p-4 rounded-lg z-40 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    <ul className="space-y-2">
                        <li><a href="#home" onClick={() => setOpen(false)} className="block text-black px-2 py-1 hover:bg-blue-500 rounded">Home</a></li>
                        <li><a href="#sobre" onClick={() => setOpen(false)} className="block text-black px-2 py-1 hover:bg-blue-500 rounded">Sobre</a></li>
                        <li><a href="#projetos" onClick={() => setOpen(false)} className="block text-black px-2 py-1 hover:bg-blue-500 rounded">Projetos</a></li>
                        <li><a href="#contato" onClick={() => setOpen(false)} className="block text-black px-2 py-1 hover:bg-blue-500 rounded">Contatos</a></li>
                    </ul>
                </div>
            )}
            */}
        </div>
    );
};
