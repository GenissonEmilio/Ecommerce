"use client"

import React from "react";

export default function LoginPage() {
  const [remember, setRemember] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1D2B66]">
      {/* Container */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-lg">
        
        {/* Logo + Nome */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2C3E91]">
            <img
              src="/images/logo.png"
              alt="Emilian Shop"
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="ml-3 text-2xl font-bold text-[#2C3E91]">Emilian Shop</h1>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8 text-[#2C3E91]">
          Seja Bem-Vindo
        </h2>

        {/* Formulário de Login */}
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

        {/* Login com Google */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center bg-black py-3 rounded-lg border hover:bg-neutral-800 transition-colors duration-200">
            <img
              src="/images/google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Ou faça login com o Google
          </button>
        </div>

        {/* Link para registro */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Não tem uma conta?{" "}
          <a href="#" className="text-[#2C3E91] hover:underline">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
}
