export const lightTheme = {
  colors: {
    background: {
      primary: "#F8FAFC", // Cool light blue-gray background - crisp and clean
      secondary: "#F1F5F9", // Slightly deeper cool gray - for subtle layering
      surface: "#F3F2F0", // Cool light slate - for cards and elevated elements
      // surface: "#E2E8F0", // Cool light slate - for cards and elevated elements
    },
    accents: {
      primary: "#3B82F6", // Vibrant blue - cool primary action color
      secondary: "#6366F1", // Indigo - cool secondary interaction color
      highlight: "#06B6D4", // Cyan/teal - cool highlight and success color
      success: "#06B6D4", // Cyan - cool positive color
      title: "#334155" // Cool dark slate - strong and readable
    },
    text: {
      primary: "#1E293B", // Deep cool slate - main text, crisp and readable
      secondary: "#64748B", // Medium cool gray - secondary text
      disabled: "#CBD5E1", // Light cool gray - disabled states
    },
    status: {
      success: "#06B6D4", // Cyan - cool, modern success indicator
      error: "#EF4444",   // Cool red - clear error indication
      warning: "#F59E0B"  // Amber - neutral warning tone
    },
    overlay: {
      primary: "rgba(51, 65, 85, 0.15)", // Cool slate overlay - using the title color for consistency
      secondary: "rgba(229, 181, 157, 0.8)", // Warm peach overlay - using the secondary accent color
    },
  },
  typography: {
    fontSize: '16px',
    fontFamily: `'Arial', sans-serif`,
  }
};

export const lightTheme2 = {
  colors: {
    background: {
      primary: "#FEFEFE", // Pure white for maximum clarity
      secondary: "#F9F7F4", // Warm off-white with subtle beige undertone
      surface: "#F0EDE8", // Light warm gray for cards and containers
    },
    accents: {
      primary: "#D97706", // Warm amber/orange - main interactive color
      secondary: "#EAB308", // Bright yellow - hover states and secondary actions  
      highlight: "#EAB308", // Bright yellow - for toggle balls and highlights
      success: "#EAB308", // Bright yellow for success states
      title: "#1F2937" // Rich dark gray for excellent readability
    },
    text: {
      primary: "#1F2937", // Rich dark gray for excellent readability
      secondary: "#6B7280", // Medium gray for secondary text
      disabled: "#9CA3AF", // Light gray for disabled states
    },
    status: {
      success: "#EAB308", // Bright yellow for success states
      error: "#DC2626",   // Rich red for errors
      warning: "#D97706"  // Warm amber for warnings (consistent with primary)
    },
    overlay: {
      primary: "rgba(0, 0, 0, 0.1)", // Subtle dark overlay for modals
      secondary: "rgba(229, 181, 157, 0.8)", // Warm peach overlay - using the secondary accent color
    },
  },
  typography: {
    fontSize: '16px',
    fontFamily: `'Arial', sans-serif`,
  }
};

export const lightTheme3 = {
  colors: {
    background: {
      primary: "#E9E6D1", // Soft cream - main canvas color
      secondary: "#F5F3E8", // Lighter cream - for subtle layering
      surface: "#F0EDE4", // Warm off-white - for cards and elevated elements
    },
    accents: {
      primary: "#A9D4DA", // Soft blue-gray - main interactive color
      secondary: "#E3B59D", // Warm peach - secondary interactions and hover states
      highlight: "#C2DEC5", // Soft sage green - highlights and success states
      success: "#C2DEC5", // Sage green - positive actions
      title: "#A96030" // Rich brown - strong and readable for titles
    },
    text: {
      primary: "#A96030", // Rich brown - main text, warm and readable
      secondary: "#8B6F47", // Medium brown - secondary text
      disabled: "#C4B299", // Light brown - disabled states
    },
    status: {
      success: "#C2DEC5", // Soft sage green - gentle success indicator
      error: "#D4A574",   // Muted orange-brown - gentle error indication
      warning: "#E3B59D"  // Warm peach - gentle warning tone
    },
    overlay: {
      primary: "rgba(169, 96, 48, 0.15)", // Brown overlay - using the title color for consistency
      secondary: "rgba(229, 181, 157, 0.8)", // Warm peach overlay - using the secondary accent color
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
      success: "#6A9F6A",
      title: "#ffc107"
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
