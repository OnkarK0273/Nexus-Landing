import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const FrontBanner = () => {
  return (
    <Box>
        <Box  >
            <Image src='/images/about.png' alt='about' height={{base:"450px",md:"600px",lg:'700px',xl:"720px"}} width={'100%'} objectFit={'cover'} />
        </Box>
    </Box>
  )
}

export default FrontBanner