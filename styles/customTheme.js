import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
export const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
        custom:  {
            bgPrimary: "#1e1a34",
            bgDarker: "#392d2d",
            textColor: "#cf2929"
        }
    },
    fontSizes: {
      xxl: "4em"
    },
    gutter: {
        sectionMargin: "1em",
        sectionPaddingY: "3em",
        sectionPaddingX: "2em",
    },
    radius: {
        sectionRadius: "0.5em",
    }
};