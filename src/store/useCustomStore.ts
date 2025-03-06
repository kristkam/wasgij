import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  searchTerm?: string;
  activeChip: string;
}

type Action = {
  setSearchTerm: (searchTerm: string) => void;
  setActiveChip: (activeChip: string) => void;
}

// client state
const useCustomStore = create<State & Action>()(
  devtools((set) => ({
    searchTerm: undefined,
    setSearchTerm: (searchTerm) => set(() => ({ searchTerm })),
    activeChip: "",
    setActiveChip: (activeChip) => set(() => ({ activeChip })),
  }))
);

export default useCustomStore;
