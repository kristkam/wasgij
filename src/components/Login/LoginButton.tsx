import { motion } from "motion/react";
import { memo, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledMotionButton = styled(motion.button)`
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.colors.accents.primary};
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.colors.accents.secondary};
    }
  }
`;

const LoginButton = memo(({ children, isShaking }: PropsWithChildren<{ isShaking: boolean }>) => {
  return (
    <StyledMotionButton
      type="submit"
      animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </StyledMotionButton>
  );
});

export default LoginButton;