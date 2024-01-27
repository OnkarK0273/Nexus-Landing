import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Opacityanimation from '../../animation/Opacityanimation'

const Poster = ({src,alt}) => {
  return (
    <Box>
        <Opacityanimation>
            <Box w={'100%'} height={{base:"500px",sm:"600px",md:"600px",lg:"700px",xl:"1080px"}}  border={'0px'} borderColor={'white'} >
                <Image src={src} alt={alt} width={"100%"} height={'100%'} objectFit={{base:"cover",xl:"cover"}} />
            </Box>
        </Opacityanimation>
    </Box>
  )
}

export default Poster