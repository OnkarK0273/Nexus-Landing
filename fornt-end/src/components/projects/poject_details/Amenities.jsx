import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'

const Amenities = ({src,alt,h,w}) => {
  return (
    <Center bg={'#1C1C1C'} p={{base:"20px","2xl":"0px"}} h={{base:"none","2xl":"297"}}   border={'0px'} borderColor={'teal'} >
        <Box   h={{base:"none","2xl":h}} w={{base:"none","2xl":w}} >
            <Image src={src} alt={alt} w={'100%'}   margin={'auto'} />
        </Box>
    </Center>
  )
}

export default Amenities