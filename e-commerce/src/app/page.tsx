import { AdArea } from "@/components/layout/AdArea";
import Header from "@/components/layout/Header";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from "@/components/items/Product";

export default function Home() {
  return (
    <div>
      {/* Header and AdArea components are imported and used here */}
      <Header />

      <div>
        {/*Area de anuncios */}
        <AdArea />

        {/* Area de Produtos */}
        <div className="relative -mt-20 px-4 z-10">
          <div className="max-w-screen grid grid-cols-2 justify-items-center gap-4">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          
        </div>
      </div>
    </div>
  );
}
