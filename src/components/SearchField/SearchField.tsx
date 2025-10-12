import { ChangeEvent, useTransition } from "react";
import { MagnifyingGlass } from "../../svg";
import useStore from '../../store/useCustomStore';
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 6px 6px 6px 42px;
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
    padding: 8px 8px 8px 46px;
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
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    left: 14px;
  }
`;

const SearchField = () => {
  const { setSearchTerm } = useStore.use.actions();
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    startTransition(() => {
      setSearchTerm(event.target.value);
    });
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
        style={{ opacity: isPending ? 0.3 : 1 }}
      />
    </SearchContainer>
  );
};

export default SearchField;
