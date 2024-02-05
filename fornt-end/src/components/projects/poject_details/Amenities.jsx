import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'

const Amenities = ({src,alt,h,w}) => {
  return (
    <Center bg={'#1C1C1C'}  py={'20px'}   border={'0px'} borderColor={'teal'} >
        <Box   h={{base:"100px",md:"100px","2xl":h}} w={{base:"80%",md:"80%","2xl":w}} >
            <Image src={src} alt={alt} w={'100%'}  h={'100%'} margin={'auto'} />
        </Box>
    </Center>
  )
}

export default Amenities