import { PropsWithChildren } from "react";
import styled from "styled-components";

type AppProps = {
  color?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick: () => void;
};

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.background.surface};
  color: ${(props) => props.theme.colors.text.primary};
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.colors.accents.primary};
      color: ${(props) => props.theme.colors.background.surface};
    }
  }

  &:active {
    background-color: ${(props) => props.theme.colors.accents.highlight};
    color: ${(props) => props.theme.colors.background.primary};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.background.surface};
    color: ${(props) => props.theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;

const Button = ({ color, type, onClick, children }: PropsWithChildren<AppProps>) => {
  return (
    <StyledButton color={color} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
