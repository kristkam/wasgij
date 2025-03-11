import { motion } from 'motion/react'

interface OwnProps {
  size: {
    width?: string;
    height?: string;
  },
  color?: string;
}

const CheckmarkSvg = ({ size: { width = "32", height = "32" }, color = "#6A9F6A"}: OwnProps) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color}
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </motion.svg>
  );
};

export default CheckmarkSvg