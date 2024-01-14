import React from 'react'

import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
const Welcome2 = () => {
  const des = "Our commitment to crafting exceptional living spaces goes beyond building homes; we curate lifestyles. With successful projects like The First and The Hub, epitomizing refined urban living and modern luxury, we continue to redefine real estate excellence."

  const variant = useBreakpointValue(
    {
      base: 0,
      md: 20,
      lg: 30,
     
    "2xl":40    } 
  )

  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
  }

  


  return (
    <div>
        <Box   display={{base:"none",md:"block"}} fontSize={'middum'} border={'0px'} borderColor={'black'}  >
            
                <Text>
                {truncateText(des,variant)}
                </Text>
            
            </Box>
    </div>
  )
}

export default Welcome2