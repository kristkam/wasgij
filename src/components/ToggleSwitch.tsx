import { motion } from "motion/react";
import styled from "styled-components";

interface OwnProps<T> {
  checked: boolean;
  toggleChecked: (puzzle: T) => void;
}

const ToggleContainer = styled.div<{ checked: boolean }>`
  display: flex;
  background-color: ${props => !props.checked ? props.theme.colors.accents.primary : props.theme.colors.accents.success};
  justify-content: ${props => props.checked ? "end" : "start"};
  padding: 4px;
  border-radius: 50px;
  cursor: pointer;
  width: 50px;
  /* margin-Top: 8px; */
`;

const Toggle = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.accents.highlight};
  border-radius: 50%; 
  width: 18px; 
  height: 18px;
`;


const ToggleSwitch = <T, >({ checked, toggleChecked }: OwnProps<T>) => {
  return (
    <ToggleContainer
      checked={checked}
      onClick={(puzzle) => toggleChecked(puzzle as T)}
    >
      <Toggle
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </ToggleContainer>
  );
};
export default ToggleSwitch;
