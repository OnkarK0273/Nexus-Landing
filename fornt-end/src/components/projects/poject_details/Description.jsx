import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Description = ({des,w}) => {
  return (
    <Box w={{base:"none","2xl":w}}  >
        <Text lineHeight={'27px'} fontSize={'18px'} >
            {des}
        </Text>
    </Box>
  )
}

export default Description