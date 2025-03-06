import { motion } from "motion/react";

function MoonSvg () {
  return (
    <motion.svg
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="yellow"
      // stroke="#34344A"
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </motion.svg>
  );
};

export default MoonSvg;