import { motion } from "motion/react";
import { PropsWithChildren } from "react";
import styled from "styled-components";

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

const MenuListItem = ({ children }: PropsWithChildren) => {
  return (
    <ListItem 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.9 }}
      variants={itemVariants}
    >
      {children}
    </ListItem>
  );
};
export default MenuListItem;
