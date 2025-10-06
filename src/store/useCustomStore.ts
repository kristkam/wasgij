import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createSelectors from "./selectors";

type State = {
  searchTerm?: string;
  activeChip: string;
  menuFilter: string;
  theme: string;
  actions: Action;
}

type Action = {
  setSearchTerm: (searchTerm: string) => void;
  setActiveChip: (activeChip: string) => void;
  setMenuFilter: (menuFilter: string) => void;
  setTheme: (theme: string) => void;
}

// client state
const useCustomStore = create<State & Action>()(
  devtools((set) => ({
    searchTerm: undefined,
    activeChip: "",
    menuFilter: "All puzzles",
    theme: "dark",
    actions: {
      setSearchTerm: (searchTerm) => set(() => ({ searchTerm })),
      setActiveChip: (activeChip) => set(() => ({ activeChip })),
      setMenuFilter: (menuFilter) => set(() => ({ menuFilter })),
      setTheme: (theme) => set(() => ({ theme }))
    }
  }))
);

export default createSelectors(useCustomStore);