import {Box, Collapse, Text, useColorModeValue} from "@chakra-ui/react";
import {ArrowDownIcon, ArrowUpIcon, MinusIcon, PlusSquareIcon} from "@chakra-ui/icons";
import {useState} from "react";

interface Props {
  title: any,
  children?: any
}

const ExpandableBox = (props: Props) => {
  const [open, toggleBox] = useState(false);
  return (
    <Box
      borderRadius="lg"
      mb={4}
      p={4}
      textAlign="left"
      bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      <Box as='button' width='100%' display='flex' justifyContent='space-between' onClick={() => toggleBox(!open)}>
        {props.title}
        { open ? <MinusIcon/> : <PlusSquareIcon/> }
      </Box>
      <Collapse in={open}>
        {props.children}
      </Collapse>
    </Box>
  )
}

export default ExpandableBox;
