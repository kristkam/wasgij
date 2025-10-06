import { memo, useMemo } from "react";
import PuzzleCard from "./PuzzleCard";
import { Puzzle } from "../../types/types";
import useWindowResize from "../../hooks/useWindowResize";
import styled from "styled-components";

interface OwnProps {
  puzzleList: Array<Puzzle>;
}

const PuzzleContainer = styled.div<{ containerHeight: number }>`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  height: ${(props) => `${props.containerHeight}px`};
  overflow: auto;
  border: 1px solid ${(props) => props.theme.colors.background.surface};
  border-radius: 6px;
`;

const PuzzleCardList = ({ puzzleList }: OwnProps) => {
  const containerHeight = useWindowResize();
  const memoizedContainerHeight = useMemo(() => containerHeight - 200 , [containerHeight]);
  
  return (
    <PuzzleContainer containerHeight={memoizedContainerHeight}>
      {puzzleList.map((puzzle) => <PuzzleCard key={puzzle.id} puzzle={puzzle} /> )}
    </PuzzleContainer>
  )
};


export default memo(PuzzleCardList);