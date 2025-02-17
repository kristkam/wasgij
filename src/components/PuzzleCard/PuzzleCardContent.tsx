import { motion } from "motion/react";
import styled from "styled-components";

interface OwnProps {
  imageProps: {
    url: string;
    alt: string;
  };
  onClick: () => void;
}

const Image = styled.img`
  width: 220px;
  height: auto;
  cursor: pointer;
`;

const PuzzleCardContent = ({ imageProps, onClick }: OwnProps) => {
  const { url, alt } = imageProps;

  return (
    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
      <Image src={url} alt={alt} onClick={onClick} />
    </motion.div>
  );
};
export default PuzzleCardContent;
