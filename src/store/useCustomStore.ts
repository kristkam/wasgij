import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  searchTerm?: string;
  activeChip: string;
  menuFilter: string;
  theme: string;
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
    setSearchTerm: (searchTerm) => set(() => ({ searchTerm })),
    activeChip: "",
    setActiveChip: (activeChip) => set(() => ({ activeChip })),
    menuFilter: "All puzzles",
    setMenuFilter: (menuFilter) => set(() => ({ menuFilter })),
    theme: "dark",
    setTheme: (theme) => set(() => ({ theme })),
  }))
);

export default useCustomStore;
