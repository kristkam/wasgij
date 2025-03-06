import { motion } from "motion/react";
import { CheckmarkSvg } from "..";

const Checkmark = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{
        scale: [0.2, 1.2],
        opacity: [0, 1],
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      style={{ marginTop: "0.5rem" }}
    >
      <CheckmarkSvg />
    </motion.div>
  );
};

export default Checkmark;
