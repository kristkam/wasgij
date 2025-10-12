import { motion } from "motion/react";

interface OwnProps {
  size?: {
    width: string;
    height: string;
  };
  color?: string;
  crossSize?: "s" | "sm" | "m" | "ml" | "l";
}

const CloseSvg = (props: OwnProps) => {
  const { 
    size: { width = "32", height = "32" }, 
    color = "#E0E0E0", 
    crossSize = "m" 
  } = props;

  const crossCoordinates = {
    s: { start: 8, end: 16 },
    sm: { start: 6.5, end: 17.5 },
    m: { start: 5, end: 19 },
    ml: { start: 4, end: 20 },
    l: { start: 3, end: 21 },
  };

  const { start, end } = crossCoordinates[crossSize];

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
        rotate: 90,
        stroke: "#34344A",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.line
        x1={end}
        y1={start}
        x2={start}
        y2={end}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.line
        x1={start}
        y1={start}
        x2={end}
        y2={end}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default CloseSvg;
