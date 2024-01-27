import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'

const Amenities = ({src,alt,h,w}) => {
  return (
    <Center bg={'#1C1C1C'} p={'20px'} border={'0px'} borderColor={'teal'} >
        <Box    >
            <Image src={src} alt={alt} h={h} w={w}  margin={'auto'} />
        </Box>
    </Center>
  )
}

export default Amenities