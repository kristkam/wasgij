import { motion } from 'motion/react'

const CheckmarkSvg = () => {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#6A9F6A"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </motion.svg>
  );
};

export default CheckmarkSvg