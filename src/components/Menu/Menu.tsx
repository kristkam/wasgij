import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import styled from "styled-components";
import { MenuList } from "..";

const Container = styled.div`
  position: relative;
`;

const MenuIcon = styled(motion.svg)`
  display: flex;
  width: 34px;
  height: 34px;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.background.surface};
  border-radius: 6px;
  
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;    
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["All puzzles", "Collected puzzles", "To be puzzled"];

  return (
    <Container>
      <MenuIcon
        viewBox="0 0 40 24"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 1.5 }}
        whileHover={{ scale: 1.1 }}
      >       
        <motion.path
          d="M12 6 L28 6"
          animate={isOpen ? { d: "M12 6 L28 18" } : { d: "M12 6 L28 6" }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          d="M12 12 L28 12"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          d="M12 18 L28 18"
          animate={isOpen ? { d: "M12 18 L28 6" } : { d: "M12 18 L28 18" }}
          transition={{ duration: 0.1 }}
        />
      </MenuIcon>
      <AnimatePresence>
        {isOpen && <MenuList isOpen={isOpen} listItems={menuItems} />}
    </AnimatePresence>
    </Container>
  );
};
export default Menu;
