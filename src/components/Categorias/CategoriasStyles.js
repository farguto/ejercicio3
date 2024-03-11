import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
 
  flex-direction: column;
  width: 200px;
  cursor: pointer;

  h2 {
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }

  img {
    padding-top: 7px;
    padding-bottom: 7px;
    width: 100%;
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--btn-gradient);
  border-radius: 15px;
`;
