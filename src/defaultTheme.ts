export const lightTheme = {
  colors: {
    background: "#F5F5F5",
    surface: "#FFFFFF",
    primary: {
      purple: "#A259FF",
      yellow: "#FEC601",
      coral: "#FF6F61",
    },
    secondary: {
      teal: "#00B4D8",
      softBlue: "#90E0EF",
    },
    neutral: {
      offWhite: "#F5F5F5",
      charcoalGray: "#333333",
      lightGray: "#CCCCCC",
    },
    special: {
      correctGreen: "#4CAF50",
      warningAmber: "#FFC107",
      errorRed: "#F44336",
    },
  },
  typography: { fontSize: "16px", fontFamily: "'Arial', sans-serif" },
};

export const darkTheme = {
  colors: {
    background: {
      // primary: "#34344A",
      primary: "#1E1E2E", // Original value: #1E1E2E
      secondary: "#2A2A3C",
      surface: "#34344A", // Original value: #34344A containers, button or UI elements
      // surface2: "#1E1E2E", // containers, button or UI elements
    },
    accents: {
      primary: "#8F6A9F", // interactive elements
      secondary: "#A67C75", // secondary buttons, hover states, or subtle UI details.
      highlight: "#C2B8A3", // use sparingly for notices, warnings, highlights, or key information that needs attention
      success: "#6A9F6A"
    },
    text: {
      primary: "#E0E0E0", // main
      secondary: "#B8B8C6", // subtext, metadata, or descriptions
      disabled: "#7A7A8C", // disabled buttons, placeholder text, or UI hints
    },
    status: {
      success: "#6A9F6A", // Green for checked items
      error: "#BF6A6A",   // Example red for errors
      warning: "#C2A36A"  // Example yellow for warnings
    },
    overlay: {
      primary: "rgba(0, 0, 0, 0.5)",
      secondary: "rgba(42, 42, 60, 0.8)",
    },
  },
  typography: {
    fontSize: '16px',
    fontFamily: `'Arial', sans-serif`,
  }
};
