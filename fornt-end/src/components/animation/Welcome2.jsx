import React, { useRef } from 'react'
import { AnimatePresence,motion, useAnimation } from 'framer-motion'
import { Box, Text } from '@chakra-ui/react'
const Welcome2 = () => {
    
  return (
    <div>
        <Box w={{md:"450px",lg:"540px"}} p={'10px'} display={{base:"none",md:"block"}} fontSize={'middum'} border={'0px'} borderColor={'black'}  >
            
                <Text>
                    Nestled amidst nature’s beauty, our premium eco & agro resort
                    offers an enchanting escape for those seeking serenity and opulence.
                    Experience the heights of comfort in our exquisite accommodations,
                </Text>
            
            </Box>
    </div>
  )
}

export default Welcome2