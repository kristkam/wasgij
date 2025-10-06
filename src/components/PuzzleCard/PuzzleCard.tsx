import { memo, useCallback, useState } from "react";
import { PuzzleCardHeader, PuzzleCardContent, Modal } from '../../components';
import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import styled from "styled-components";
import useUpdatePuzzle from "../../hooks/useUpdatePuzzle";
import useImagePreload from "../../hooks/useImagePreload";
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
  const { id, title, category, image, preview_image, checked } = puzzle;
  const [open, setOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const { hasError: previewError } = useImagePreload(preview_image);

  const { mutate } = useUpdatePuzzle();

  const toogleChecked = useCallback(() => 
    mutate({ id, newData: { ...puzzle, checked: !checked }}), [mutate, id, puzzle, checked]);

  const openImage = () => {
    if (preview_image && !previewError) {
      setPreviewImage(preview_image);
      setOpen(true);
    }
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
          imageProps={{ url: image, alt: title }}
          onClick={openImage}
        />
      </Card>

      <AnimatePresence>
        {open && ( 
          <Modal
            imageUrl={previewImage}
            closeModal={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(PuzzleCard);