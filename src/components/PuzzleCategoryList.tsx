import styled from "styled-components";
import Chip from "./Chip";

type PuzzleCategory = "original" | "mystery" | "christmas" | "destiny";

type Puzzle = {
  id: string;
  title: string;
  category: PuzzleCategory;
  image_url: string;
  checked: boolean;
};

interface OwnProps {
  puzzleCategories: PuzzleCategory[];
  totalPuzzles: number;
  puzzlesGroupedByCategory: Record<PuzzleCategory, Puzzle[]>;
}


const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 4px;
  }
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 6px;
  color: ${(props) => props.theme.colors.text.secondary};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.text.secondary};
  padding: 4px;
`;


const PuzzleCategoryList = ({ puzzleCategories, puzzlesGroupedByCategory }: OwnProps) => {
  return (
    <Container>
      {puzzleCategories.map((category) => (
        <Chip 
          key={category}
          isActive={category.toLowerCase() === "original"} 
          onClick={() => undefined}
        >
          <div>
            {category}        
            <StyledSpan>{puzzlesGroupedByCategory[category].length}</StyledSpan>
          </div>

        </Chip>
      ))}
    </Container>
  );
};

export default PuzzleCategoryList;
