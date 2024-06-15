import { extendTheme } from "@chakra-ui/react";
import { modalTheme } from "./theme/modal";

export const theme = extendTheme({
  components: { Modal: modalTheme },
});
