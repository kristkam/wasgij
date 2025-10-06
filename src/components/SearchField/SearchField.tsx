import { ChangeEvent } from "react";
import { MagnifyingGlass } from "../../svg";
import useStore from '../../store/useCustomStore';
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 6px 6px 6px 42px; /* Add left padding for the icon */
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
    padding: 8px 8px 8px 46px; /* Adjust padding for mobile */
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accents.primary};
  };
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* Allows clicking through the icon to focus the input */
  z-index: 1;

  @media (max-width: 768px) {
    left: 14px; /* Slightly more space on mobile for better visual balance */
  }
`;

// add magnifying glass icon
const SearchField = () => {
  const { setSearchTerm } = useStore.use.actions();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <IconWrapper>
        <MagnifyingGlass size={{ width: "20", height: "20" }} />
      </IconWrapper>
      <Input
        type="search"
        onChange={handleChange}
        placeholder={"Search..."}
      />
    </SearchContainer>
  );
};

export default SearchField;
