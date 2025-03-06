import { useState } from "react";
import { PuzzleCardHeader, PuzzleCardContent, Modal } from '../../components';
import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import styled from "styled-components";
import useUpdatePuzzle from "../../hooks/useUpdatePuzzle";
import { AnimatePresence } from "motion/react";
import { Puzzle } from "../../types/types";

interface OwnProps {
  puzzle: Puzzle
};

const Card = styled.div`
  flex: 1 0 300px;
  padding: 24px;
  margin: 16px;
  border: 1px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background.surface};
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const PuzzleCard = ({ puzzle }: OwnProps) => {
  const { id, title, category, image_url, checked } = puzzle;
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const { mutate } = useUpdatePuzzle();

  const toogleChecked = () => 
    mutate({ id, newData: { ...puzzle, checked: !checked }});

  const openImage = () => {
    setOpen(!open);
    setImageUrl(image_url);
  }

  return (
    <>
      <Card key={id}>
        <PuzzleCardHeader category={category} title={title}>
          <ToggleSwitch
            checked={checked}
            toggleChecked={toogleChecked}
          />
        </PuzzleCardHeader>
        <PuzzleCardContent 
          imageProps={{ url: image_url, alt: title }}
          onClick={openImage}
        />
      </Card>

      <AnimatePresence>
        {open && ( 
          <Modal
            imageUrl={imageUrl}
            closeModal={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PuzzleCard;