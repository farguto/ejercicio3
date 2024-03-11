
import CardProducto from './CardProducto';

import {useSelector} from "react-redux"
import { ProductosContainer } from './CardsProductosStyles';


const CardsProductos = () => {
  let products = useSelector((state)=> state.products.products)
  return (
    <>
      <ProductosContainer>
          {Object.entries(products).map(([,tecnos]) =>
          tecnos.map((tecno)=><CardProducto key={tecno.id} {...tecno} />)
          )}
      </ProductosContainer>

      
    </>
  );
};

export default CardsProductos;
