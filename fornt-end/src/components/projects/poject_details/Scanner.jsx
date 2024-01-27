import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Scanner = ({src,alt}) => {
  return (
    <Box  border={'0px'} borderColor={'teal'}  >
        <Box>
            <Image src={src} alt={alt}  m={'auto'}/>
        </Box>
    </Box>
  )
}

export default Scanner