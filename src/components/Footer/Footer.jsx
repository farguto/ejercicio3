import { Link } from "react-router-dom";

import { FooterContainerStyled, LinksContainerStyled } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled className="links">
        <Link to="/" style={{ paddingLeft: "2rem" }}>
        🏠 Dirección: Avenida Cabildo 1234
        </Link>
        <Link to="/" style={{ paddingLeft: "2rem" }}>
        📱 Teléfono:  (054) 9 11 1111 2222
        </Link>
        <Link to="/" style={{ paddingLeft: "2rem" }}>
        📧 Email: consultas@webydatos.com.ar
        </Link>
      </LinksContainerStyled>
 
    </FooterContainerStyled>
  );
};

export default Footer;
