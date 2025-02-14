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

const MenuListItem = ({ children }: PropsWithChildren) => {
  return (
    <ListItem>{children}</ListItem>
  )
}
export default MenuListItem