import { Box, HStack, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from "react-icons/fa";

const ReviewContainer = ({data}) => {

    const variant = useBreakpointValue(
        {
          base: 10,
          md:15,
          lg: 25,
          xl:35
        } 
    )

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
    }

    const {name,review,img} = data
  return (
    <Stack direction={{base:"column",md:"row"}}  border={'0px'} borderColor={'white'} p='20px' alignItems={'center'} justifyContent={'center'}  >
                <Box w={{base:"80%",md:'30%'}} border={'0px'} borderColor={'white'} p={{base:0,md:5}} >
                    <Image  src={img} width={{base:"40%",md:'50%',lg:"40%","2xl":"40%"}} objectFit={'cover'} m={'auto'} />
                </Box>
                <Stack width={{base:"80%",md:'60%'}} justifyContent={'space-between'}  border={'0px'} borderColor={'white'}  pr={0} >
                    <Text fontSize={{base:"sm",md:"sm",lg:"md",xl:"lg"}}  >
                        {truncateText(review,variant)}
                    </Text>
                    <Stack direction={{base:"column",md:'row'}}  border={'0px'} borderColor={'white'} alignItems={'center'} gap={5} >
                        <Heading  size={{base:"sm",md:'md'}} >{name}</Heading>
                        <HStack>
                            <FaStar color='gold' />
                            <FaStar color='gold' />
                            <FaStar color='gold' />
                            <FaStar color='gold' />
            
                        </HStack>
                    </Stack>
                </Stack>
            </Stack>
  )
}

export default ReviewContainer