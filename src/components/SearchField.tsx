import styled from "styled-components";

interface SearchFieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.background.surface};
  border-radius: 6px;
  width: 450px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.background.surface};
  color: ${(props) => props.theme.colors.text.secondary};

  @media (max-width: 768px) {
    width: 350px;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accents.primary};
  };
`;

const SearchField = ({ onChange }: SearchFieldProps) => {
  return (
    <Input
      type="search"
      onChange={onChange}
      placeholder="Search..."
    />
  );
};

export default SearchField;
