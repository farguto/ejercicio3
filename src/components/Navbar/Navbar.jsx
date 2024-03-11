import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";

function Navbar() {
  return (
    <NavbarContainerStyled>
      <ModalCart />

      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dv9a5qgfw/image/upload/v1710187795/webydatos.png"
            alt="Logo"
            style={{ width: "100px" }}
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to="/">
            <LinkContainerStyled home></LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <Link to="/SobreNosotros">
          <LinkContainerStyled home></LinkContainerStyled>
          Sobre Nosotros
        </Link>

 

        <Link to="/Contacto">
          <LinkContainerStyled home></LinkContainerStyled>
          Contacto
        </Link>

        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
