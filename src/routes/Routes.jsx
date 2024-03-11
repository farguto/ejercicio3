import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros";
import Contacto from "../pages/Contacto/Contacto";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
 

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/SobreNosotros" element={<SobreNosotros />} />
      <Route path="/Contacto" element={<Contacto />} />
 
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
