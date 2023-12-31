import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomeSection = () => {
    const navigate = useNavigate()
    
      
    // handleside
    const handleSide = (val)=>{
      navigate(val)
      
    }


  return (
    <Box  backgroundColor={"white"} >
        <Box height={{base:"500px",md:"500px",lg:"700px",xl:"740px","2xl":"900px",}} w={'100%'} >
            <Image src='/images/welcome.png' width={'100%'} height={'100%'}  objectFit={'cover'} />
        </Box>
        <Stack h={{base:"150px",md:"200px",lg:'220px'}}  justifyContent={"center"} align={"center"} flexDir={"column"} pb={10} pt={5} >
            <Stack direction={"row"}  color={"#556258"}  justify={"center"} align={'center'}  gap={'40px'}  >
                <Box>
                    <Text fontSize={{base:"2xl",md:"2xl",lg:"2xl"}} fontWeight={"bold"}  color={'black'} >
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
            <Box  >
                <Button mt={5} p={"10px"} w={{base:"120px",md:'180px'}} fontSize={{base:"md",md:"xl",lg:"2xl"}} fontWeight={"bold"} color={'#FDCB00'} backgroundColor={'black'} onClick={()=>handleSide("/contact")} >
                    Know More
                </Button>
            </Box>
        </Stack>

    </Box>
  )
}

export default WelcomeSection