import { memo, useTransition } from "react";
import { motion } from "motion/react";
import useStore from "../../store/useCustomStore";
import { Checkmark } from "../../svg";
import styled, { useTheme } from "styled-components";

interface OwnProps<T> {
  listItems: T[];
  isOpen: boolean;
}

const Container = styled(motion.ul)`
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.theme.colors.background.secondary};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text.primary};
  list-style: none;
  padding: 5px;
  margin-top: 5px;
  width: 175px;
  text-align: start;
`;

const ListItem = styled(motion.li)`
  text-align: start;
  cursor: pointer;
  padding: 4px 5px;
  border-radius: 4px;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.colors.accents.primary};
      color: ${(props) => props.theme.colors.background.primary};
    }
  }
`;

const StyledActiveMenuFilter = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
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
};

const MenuList = <T extends string>({ listItems, isOpen }: OwnProps<T>) => {
  const activeMenuFilter = useStore.use.menuFilter();
  const { setMenuFilter } = useStore.use.actions();
  const [isPending, startTransition] = useTransition();
  const theme = useTheme();

  const handleListItemClick = (item: T) => {
    startTransition(() => {
      setMenuFilter(item);
    });
  };

  
  return (
    <Container
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      style={{ opacity: isPending ? 0.9 : 1 }}
    >
      {listItems.map((item) => (
        <ListItem
          key={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          variants={itemVariants}
          onClick={() => handleListItemClick(item)}
        >
          {activeMenuFilter === item ? (
            <StyledActiveMenuFilter>
              {item}
              <Checkmark size={{ width: "24", height: "24" }} color={theme.colors.accents.highlight} />
            </StyledActiveMenuFilter>
          ) : (
            item
          )}
        </ListItem>
      ))}
    </Container>
  )
};

export default memo(MenuList);