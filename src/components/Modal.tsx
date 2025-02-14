import { motion } from "motion/react";
import { Button } from "../components";
import styled from "styled-components";

interface OwnProps {
  imageUrl: string;
  closeModal: () => void;
}

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${(props) => props.theme.colors.overlay.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: end;
  background: ${(props) => props.theme.colors.text.primary};
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
`;

const CloseButton = styled(Button)`
  font-size: 24px;
  width: 3rem;
  cursor: pointer;
  margin: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 70vh;
`;

const Modal = ({ imageUrl, closeModal }: OwnProps) => {
  return (
    <Overlay
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContainer
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <CloseButton onClick={closeModal}>✕</CloseButton>
        <StyledImage src={imageUrl} onClick={closeModal} />
      </ModalContainer>
    </Overlay>
  );
};
export default Modal;
