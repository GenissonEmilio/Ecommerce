export default function Header() {
  return (
    <header className="bg-[#002db3] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Emilian Shop</a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}