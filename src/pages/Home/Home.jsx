import { useRef } from "react";
import Categorias from "../../components/Categorias/Categorias";
import Hero from "../../components/Hero/Hero";
import CardsProductos from "../../components/Productos/CardsProductos";
 

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
 
} from "./HomeStyles";

function Home() {
  const productsRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero doScroll={doScroll} />

 

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2 style={{ textAlign: 'center' }}>Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

      {/* Populares Section*/}
   
      <ProductosWrapper ref={productsRef}>
        <h2 style={{ textAlign: 'center' }}>Nuestros productos</h2>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
