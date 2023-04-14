import styled from "styled-components";
import { motion } from "framer-motion";


export const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  color: black;
  font-size: 5em;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 2s ease-in-out;
`