"use client";

import React from "react";

export default function LoginForm() {
    const [remember, setRemember] = React.useState(false);

    return (
        <form className="space-y-5">
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                >
                Login
                </label>
                <input
                type="email"
                placeholder="Email ou número de telefone"
                id="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-[#F5F6FA] text-gray-800 focus:ring-2 focus:ring-[#2C3E91] focus:outline-none"
                />
            </div>

            <div>
                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
                >
                Senha
                </label>
                <input
                type="password"
                placeholder="Digite sua senha"
                id="password"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-[#F5F6FA] text-gray-800 focus:ring-2 focus:ring-[#2C3E91] focus:outline-none"
                />
            </div>

            {/* Toggle de Lembrar-me */}
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                <button
                    type="button"
                    onClick={() => setRemember(!remember)}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
                    remember ? "bg-[#2C3E91]" : "bg-gray-300"
                    }`}
                >
                    <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                        remember ? "translate-x-4" : "translate-x-0"
                    }`}
                    />
                </button>
                <span className="text-gray-600">Lembrar-me</span>
                </div>

                <a href="#" className="text-[#2C3E91] hover:underline">
                Esqueceu a senha?
                </a>
            </div>


            <button
                type="submit"
                className="w-full bg-[#2C3E91] text-white py-3 rounded-lg hover:bg-[#1D2B66] transition duration-200"
            >
                Entrar
            </button>
            </form>
    );
}