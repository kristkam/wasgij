import { motion } from 'motion/react'

interface OwnProps {
  size?: {
    width: string;
    height: string;
  },
  color?: string;
}

const MagnifyingGlassSvg = ({ size = { width: "32", height: "32" }, color = "#6B7280" }: OwnProps) => {
  const { width, height } = size;
  
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.circle 
        cx="11" 
        cy="11" 
        r="8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path 
        d="m21 21-4.35-4.35"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default MagnifyingGlassSvg