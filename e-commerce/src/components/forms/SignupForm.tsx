export default function SignupForm() {
  return (
    <form className="space-y-5">
        <div>
            <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
            >
            Nome Completo
            </label>
            <input
            type="text"
            placeholder="Seu nome completo"
            id="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-[#F5F6FA] text-gray-800 focus:ring-2 focus:ring-[#2C3E91] focus:outline-none"
            />
        </div>
        <div>
            <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
            >
            Email
            </label>
            <input
            type="email"
            placeholder="Seu email"
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
    </form>
    );
}