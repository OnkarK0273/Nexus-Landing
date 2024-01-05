import { Box, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { AnimatePresence,motion, useAnimation } from 'framer-motion'
const Welcome1 = () => {
    
  return (
    <div>
        <Box  >
            
                    <Text fontSize={{base:"2xl",md:"2xl",lg:"2xl"}} fontWeight={"bold"}  color={'black'} >

                        About US

                    </Text>
            
        </Box>
    </div>
  )
}

export default Welcome1