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
  font-size: 0.9rem;
  padding: 0 16px;
  border-radius: 16px;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;
  align-content: center;

  ${(props) => props.isActive && `
    background-color: ${props.theme.colors.accents.success}; /* Sage green when active */
    color: ${props.theme.colors.background.primary}; /* Light cream text for contrast */
  `}

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.colors.accents.primary};
      color: ${(props) => props.theme.colors.background.primary};
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 10px;
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