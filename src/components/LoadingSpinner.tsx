import { motion } from "motion/react";
import styled from "styled-components";

const Spinner = styled(motion.div)`
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  border: 4px solid #3b82f6; /* Blue color */
  border-top-color: transparent;
  border-radius: 50%;
  margin-top: 20px;
`;

const LoadingSpinner = () => {
  return (
    <Spinner
      animate={{ rotate: [0, 360] }}
      transition={{ 
        duration: 1, 
        repeat: Infinity, 
        easing: "linear" 
      }}
    />
  )
};

export default LoadingSpinner