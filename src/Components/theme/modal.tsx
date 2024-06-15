import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const xl = defineStyle({
  px: "8",
  py: "2",
  fontSize: "2xl",
});

const sm = defineStyle({
  fontSize: "md",
  py: "6",
});

const sizes = {
  xl: definePartsStyle({ header: sm, dialog: xl }),
};

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: "blackAlpha.200", //change the background
  },
  dialog: {
    borderRadius: "md",
    bg: `purple.100`,
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
});
