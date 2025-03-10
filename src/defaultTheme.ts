export const lightTheme = {
  colors: {
    background: {
      primary: "#D6D6E0", // Softer off-white for a more comfortable look
      secondary: "#F2F2F5", // Less harsh secondary background
      surface: "#E5E5EC", // Muted surface color for UI elements
    },
    accents: {
      primary: "#C29AD6", // Softer pastel purple for interactive elements
      secondary: "#D6A8A2", // Gentle warm tone for secondary buttons, hovers
      highlight: "#C0B6A6", // Muted beige/taupe for highlights without being too bold
      success: "#85C785" // Gentle green with a fresh feel
    },
    text: {
      primary: "#4A4A55", // Soft dark gray for main text (easier on the eyes)
      secondary: "#6A6A78", // Mid-gray for metadata, subtext
      disabled: "#A8A8B5", // Lighter gray for disabled text, placeholders
    },
    status: {
      success: "#85C785", // Lighter green for success indicators
      error: "#D68A8A",   // Softer red for errors
      warning: "#C6A376"  // Muted warm tone for warnings
    },
    overlay: {
      primary: "rgba(242, 242, 245, 0.5)", // Softer light overlay
      secondary: "rgba(229, 229, 236, 0.8)", // Gentle overlay for depth
    },
  },
  typography: {
    fontSize: '16px',
    fontFamily: `'Arial', sans-serif`,
  }
};


export const darkTheme = {
  colors: {
    background: {
      primary: "#1E1E2E",
      secondary: "#2A2A3C",
      surface: "#34344A", // containers, button or UI elements
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
