"use client";

import { AdArea } from "@/components/layout/AdArea";
import Header from "@/components/layout/Header";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ProductArea } from "@/components/layout/ProductArea";

export default function Home() {
  const isMdOrLarge = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {/* Header */}
      <Header />

      <div>
        {/*Area de anuncios */}
        {isMdOrLarge && <AdArea />}

        {/* Area de Produtos em oferta */}
        <div className="p-4">
          <ProductArea areaName={"Produtos em Oferta"}/>
        </div>

        {/* Area de Produtos em Destaque */}
        <div className="p-4">
          <ProductArea areaName={"Produtos em Destaque"}/>
        </div>
      </div>
    </div>
  );
}
