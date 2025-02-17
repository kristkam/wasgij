import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

interface OwnProps {
  isActive: boolean;
  onClick: () => void;
  children: string | ReactNode;
};

const StyledChip = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => props.theme.colors.background.surface};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;

  ${(props) => props.isActive && `
    background-color: ${props.theme.colors.accents.success};
  `}

  &:hover {
    background-color: ${(props) => props.theme.colors.accents.secondary};
    color: ${(props) => props.theme.colors.text.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Chip = ({ isActive, onClick, children }: PropsWithChildren<OwnProps>) => {
  return (
    <StyledChip isActive={isActive} onClick={onClick}>
      {children}
    </StyledChip>
  )
};

export default Chip