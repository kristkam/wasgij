import { motion } from "motion/react";
import { Button } from "..";
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
  gap: 5px;
  align-items: end;
  background: #F2F2F5;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
`;

const CloseButton = styled(Button)`
  font-size: 24px;
  width: 3rem;
  cursor: pointer;
  margin-bottom: 5px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 768px) {
    height: 100%;
    width: 45vh;
  }
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
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={closeModal}>✕</CloseButton>
        <StyledImage 
          src={imageUrl} 
          onClick={closeModal}
          loading="eager"
          decoding="async"
        />
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
