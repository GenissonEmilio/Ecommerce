"use client";

import { AdArea } from "@/components/layout/AdArea";
import Header from "@/components/layout/Header";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductArea } from "@/components/layout/ProductArea";
import { CarouselProductArea } from "@/components/layout/CarouselProductArea";

export default function Home() {

  return (
    <div>
      {/* Header */}
      <Header />

      <div>
        {/*Area de anuncios */}
        <AdArea />

        {/* Area de Produtos em Carrossel */}
        <div className="p-4">
          <CarouselProductArea />
        </div>

        {/* Area de Produtos em oferta */}
        <div className="p-4">
          <ProductArea areaName={"Produtos em Oferta"} />
        </div>

        {/* Area de Produtos em Destaque */}
        <div className="p-4">
          <ProductArea areaName={"Produtos em Destaque"} />
        </div>
      </div>
    </div>
  );
}
