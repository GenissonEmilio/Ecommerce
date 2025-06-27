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
        <div className="relative z-50 ml-1">
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
            {shouldRender && (
                <div>
                    
                </div>
            )}
        </div>
    );
};
