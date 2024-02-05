import { Box } from '@chakra-ui/react'
import React from 'react'

const Modalvideo = ({images}) => {
  return (
    <Box
      m='auto'
      position={'relative'}
      
    //   height={{base:"300px",md:'80vh'}}
      w={"100%"}
      borderRadius={'20px'}
      overflow={'hidden'}>

        <Box  
            // height={{base:"350px",md:"505px",lg:"75vh"}} 
            border="0px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            p='5px'
        >
            <video controls width="100%" height={'100%'} >
                <source src={images} type="video/webm" />
            </video>

        </Box>    

    </Box>
  )
}

export default Modalvideo