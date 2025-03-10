export type PuzzleCategory = "original" | "mystery" | "christmas" | "destiny";

export type Puzzle = {
  id: string;
  title: string;
  category: PuzzleCategory;
  image_url: string;
  checked: boolean;
};

export type Themes = "light" | "dark";

export type DefaultTheme = {
  colors: {
    background: {
      surface: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    accents: {
      primary: string;
      highlight: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
    },
    overlay: {
      primary: string;
      secondary: string;
    },
  }
  typography: {
    fontSize: string;
    fontFamily: string;
  }
};