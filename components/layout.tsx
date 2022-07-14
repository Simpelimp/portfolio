import {Box, IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";
import backgroundLottie from "../assets/lotties/background-1.json";
import Lottie from "lottie-react";

const Layout = ({ children }) => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box position='relative' overflow='hidden'>
      <Box position='absolute' width='100vw' height='100vh' opacity={ useColorModeValue('0.3', '0.1')}>
        {/*<Lottie animationData={backgroundLottie} loop={true}></Lottie>*/}
      </Box>
      <Box
        css={{ backdropFilter: useColorModeValue('grayscale(100%) blur(0px)', 'blur(20px)') }}
        minHeight='100vh'
      >
        <Box
          display='flex'
          justifyContent='flex-end'
          padding={4}
        >
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'teal')}
            icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
            onClick={toggleColorMode}
          />
        </Box>
        {children}
      </Box>
    </Box>
  )
}

export default Layout;
