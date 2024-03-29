import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.div`
  height: 100px;
  background-color: #113a78;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    color: white;
    background-color: black;
    font-size: 0.9rem;
  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
