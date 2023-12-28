import React from 'react'
import { Box, HStack, Image } from '@chakra-ui/react';

const Navbar = () => {

  const padding_l_r = '120px'
  const padding_t_b = '40px'
  const font_size = 'large'
  return (
    <Box pl={padding_l_r} pr={padding_l_r}  pt={padding_t_b} pb={padding_t_b} >
      <HStack justifyContent={"space-between"} >
        <Box  >
          <Image height={'80px'} width={"80px"} src='/images/Nexus-Logo-02.png'/>
        </Box>
        <Box>
          <HStack gap={'40px'} >
            <Box fontSize={font_size} >Home</Box>
            <Box fontSize={font_size}>About</Box>
            <Box fontSize={font_size}>Projects</Box>
            <Box fontSize={font_size}>Contact US</Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default Navbar