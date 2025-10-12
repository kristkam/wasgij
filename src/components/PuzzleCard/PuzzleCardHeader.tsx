import styled from "styled-components";
import { memo, PropsWithChildren } from "react";

interface OwnProps {
  category: string;
  title: string;
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CategoryTitle = styled.h2`
  color: ${(props) => props.theme.colors.accents.title};
  text-transform: capitalize;
`;

const TextBox = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  margin: 10px 0;
  text-align: start;
`;

const PuzzleCardHeader = ({ category, title, children }: PropsWithChildren<OwnProps>) => {
  return (
    <>
      <HeaderContainer>
        <CategoryTitle>{category}</CategoryTitle>
        {children}
      </HeaderContainer>
      <TextBox key={title}>{title}</TextBox>
    </>
  );
};
export default memo(PuzzleCardHeader);
