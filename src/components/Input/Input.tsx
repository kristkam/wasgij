import { memo } from "react";
import styled from "styled-components";

interface OwnProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.background.surface};
  background-color: ${(props) => props.theme.colors.background.surface};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text.secondary};

  &::placeholder {
    color: ${(props) => props.theme.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accents.primary};
  };
`;

const Input = ({ type, placeholder, value, onChange }: OwnProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(Input);