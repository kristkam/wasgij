export type PuzzleCategory = "original" | "mystery" | "christmas" | "destiny";

export type Puzzle = {
  id: string;
  title: string;
  category: PuzzleCategory;
  image_url: string;
  checked: boolean;
};
