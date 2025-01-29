import { PropsWithChildren } from "react";
import styled from "styled-components";

type AppProps = {
  color?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick: () => void;
};

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary.purple};
  color: ${(props) => props.theme.colors.neutral.offWhite};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.coral};
    color: ${(props) => props.theme.colors.secondary.teal};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primary.coral};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.neutral.lightGray};
    color: ${(props) => props.theme.colors.neutral.charcoalGray};
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
