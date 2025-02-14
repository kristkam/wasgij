import { motion } from "motion/react";
import styled from "styled-components";
import MenuListItem from "./MenuListItem";

interface OwnProps<T> {
  listItems: T[];
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

const MenuList = <T extends string>({ listItems }: OwnProps<T>) => {
  return (
    <Container
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {listItems.map((item) => (
        <MenuListItem key={item}>{item}</MenuListItem>  
      ))}
    </Container>
  )
}
export default MenuList