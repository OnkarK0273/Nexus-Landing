import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const WelcomeSection = () => {
  return (
    <Box  backgroundColor={"white"} >
        <Box  >
            <Image src='/images/welcome.png' />
        </Box>
        <Stack h={'200px'}  justifyContent={"center"} align={"center"} flexDir={"column"} >
            <Stack direction={"row"}  color={"#556258"}  justify={"center"} align={'center'}  gap={'40px'}  >
                <Box>
                    <Text fontSize={"3xl"} fontWeight={"bold"}  color={'black'} >
                    About US
                    </Text>
                </Box>
                <Box w={{md:"450px",lg:"540px"}} p={'10px'} display={{base:"none",md:"block"}} fontSize={'middum'} border={'0px'} borderColor={'black'} >
                    <Text  >
                    Nestled amidst nature’s beauty, our premium eco & agro resort
                    offers an enchanting escape for those seeking serenity and opulence.
                    Experience the heights of comfort in our exquisite accommodations,
                    </Text>
                </Box>
            </Stack>
            <Box>
                <Button mt={5} p={"10px"} w={{base:"100px",md:'180px'}} fontSize={{base:"md",md:"xl"}} fontWeight={"bold"} color={'#FDCB00'} backgroundColor={'black'}>
                    Know More
                </Button>
            </Box>
        </Stack>

    </Box>
  )
}

export default WelcomeSection