import { memo } from "react";
import { motion } from "motion/react";
import styled from "styled-components";

interface OwnProps<T> {
  listItems: T[];
  isOpen: boolean;
}

const Container = styled(motion.ul)`
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.theme.colors.text.disabled};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text.primary};
  list-style: none;
  padding: 5px;
  margin-top: 5px;
  width: 150px;
  text-align: start;
`;

const navVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { 
      staggerChildren: 0.07, 
      delayChildren: 0.2 
    },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { 
      staggerChildren: 0.05, 
      staggerDirection: -1 
    },
  },
};
const ListItem = styled(motion.li)`
  text-align: start;
  cursor: pointer;
  padding: 4px 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accents.secondary};
  }
`;

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.5 }
  }
}

const MenuList = <T extends string>({ listItems, isOpen }: OwnProps<T>) => {
  return (
    <Container
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
    >
      {listItems.map((item) => (
        <ListItem
          key={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          variants={itemVariants}
        >
          {item}
        </ListItem>
      ))}
    </Container>
  )
};

export default memo(MenuList);