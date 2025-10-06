import { Chip } from "../../components";
import { Puzzle, PuzzleCategory } from "../../types/types";
import useStore from "../../store/useCustomStore";
import styled from "styled-components";

interface OwnProps {
  puzzleCategories: PuzzleCategory[];
  puzzlesGroupedByCategory: Record<PuzzleCategory, Puzzle[]>;
}

const Container = styled.div`
  display: flex;
  gap: 8px;
  height: 28px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: start;
    max-width: 350px;
    height: 28px;
  }
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 8px;
`;

const PuzzleCategoryList = ({ puzzleCategories, puzzlesGroupedByCategory }: OwnProps) => {
  const activeChip = useStore.use.activeChip();
  const { setActiveChip } = useStore.use.actions();

  function handleSetActiveChip(category: PuzzleCategory) {
    setActiveChip(category !== activeChip ? category : "");
  };

  return (
    <Container>
      {puzzleCategories.map((category) => (
        <Chip
          key={category}
          isActive={activeChip === category}
          onClick={() => handleSetActiveChip(category)}
        >
          <span>
            {category}
            {activeChip === category && <StyledSpan>{puzzlesGroupedByCategory[category].length}</StyledSpan>}
          </span>
        </Chip>
      ))}
    </Container>
  );
};

export default PuzzleCategoryList;
