import { ChangeEvent } from "react";
import useCustomStore from "../../store/useCustomStore";
import styled from "styled-components";

const Input = styled.input`
  padding: 6px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.background.surface};
  border-radius: 6px;
  height: 34px;
  width: 450px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.background.surface};
  color: ${(props) => props.theme.colors.text.secondary};

  @media (max-width: 768px) {
    width: 300px;
    height: 40px;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accents.primary};
  };
`;

// add magnifying glass icon
const SearchField = () => {
  const setSearchTerm = useCustomStore(state => state.setSearchTerm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Input
      type="search"
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchField;
