export const Product = () => {
  return (
    <div className="w-[150px] h-[250px] bg-white text-black rounded-md shadow-md border flex-shrink-0 flex flex-col p-4">
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded mb-4">
        <span className="text-gray-400">Product Image</span>
      </div>

      <h2 className="text-lg font-semibold">Product Title</h2>
      <p className="text-sm text-gray-600 mt-1">
        Short description of the product goes here.
      </p>

      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};
