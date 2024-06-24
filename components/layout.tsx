import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box position="relative" overflow="hidden">
      <Box css={{ backdropFilter: "blur(20px)" }} minHeight="100vh">
        <Box display="flex" justifyContent="flex-end" padding={4}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              style={{ display: "inline-block" }}
              key={useColorModeValue("purple", "teal")}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconButton
                aria-label="Toggle theme"
                colorScheme={useColorModeValue("purple", "teal")}
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                onClick={toggleColorMode}
              />
            </motion.div>
          </AnimatePresence>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
