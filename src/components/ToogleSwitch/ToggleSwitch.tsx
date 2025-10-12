import { motion } from "motion/react";
import { memo } from "react";
import styled from "styled-components";

interface OwnProps<T> {
  checked: boolean;
  toggleChecked: (puzzle: T) => void;
};

const TOGGLE_COLORS = {
  off: {
    background: "#9CA3AF",    
    ball: "#FFFFFF"        
  },
  on: {
    background: "#10B981",
    ball: "#FFFFFF"       
  }
};

const ToggleContainer = styled.div<{ checked: boolean }>`
  display: flex;
  background-color: ${props => props.checked ? TOGGLE_COLORS.on.background : TOGGLE_COLORS.off.background};
  justify-content: ${props => props.checked ? "end" : "start"};
  padding: 2px;
  border-radius: 50px;
  cursor: pointer;
  width: 3em;
  border: 1px solid ${props => props.checked ? TOGGLE_COLORS.on.background : "#9CA3AF"};
`;

const Toggle = styled(motion.div)<{ checked: boolean }>`
  background-color: ${(props) => props.checked ? TOGGLE_COLORS.on.ball : TOGGLE_COLORS.off.ball};
  border-radius: 50%; 
  width: 18px; 
  height: 18px;
  box-sizing: border-box;
`;


const ToggleSwitch = <T, >({ checked, toggleChecked }: OwnProps<T>) => {
  return (
    <ToggleContainer
      checked={checked}
      onClick={(puzzle) => toggleChecked(puzzle as T)}
    >
      <Toggle
        checked={checked}
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

export default memo(ToggleSwitch);
