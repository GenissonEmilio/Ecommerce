"use client";

import SignupForm from "@/components/forms/SignupForm";
import React from "react";

export default function SignupPage() {
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
          Crie sua conta
        </h2>

        {/* Formulário de Registro */}
        <SignupForm />

        {/* Botão de Registrar */}
        <button
          type="submit"
          className="w-full mt-6 bg-[#2C3E91] text-white py-3 rounded-lg font-medium hover:bg-[#1a2a70] transition-colors duration-200"
        >
          Registrar
        </button>

        {/* Registrar com Google */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center bg-black py-3 rounded-lg border hover:bg-neutral-800 transition-colors duration-200">
            <img
              src="/images/google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Registre-se com o Google
          </button>
        </div>

        {/* Link para login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Já tem uma conta?{" "}
          <a href="/login" className="text-[#2C3E91] hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}
