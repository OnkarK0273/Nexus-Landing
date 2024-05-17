import { Box, HStack, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const ReviewContainer = ({data}) => {
const [toggle,setToggle] = useState(true)
    const variant = useBreakpointValue(
        {
          base: 15,
          md:25,
          lg: 20,
          xl:25
        } 
    )

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
    }

    const {name,review,img,title} = data
  return (
    <Stack direction={{base:"column",md:"row"}}  border={'0px'} borderColor={'white'} p='20px' alignItems={'center'} justifyContent={'center'}  >
                {/* <Box w={{base:"80%",md:'30%'}}  borderColor={'white'} p={{base:0,md:5}} >
                    <Image  src={img} width={{base:"40%",md:'50%',lg:"40%","2xl":"40%"}} objectFit={'cover'} m={'auto'}  borderRadius={'10px'}/>
                </Box> */}
                <Stack width={{base:"80%",md:'60%'}} justifyContent={'space-between'}  border={'0px'} borderColor={'white'}  pr={0} >
                    <Stack direction={{base:"column",md:'row'}}  border={'0px'} borderColor={'white'} alignItems={{base:"left",md:'center'}} gap={5} >
                        <Heading  size={{base:"sm",md:'md'}} >{name}</Heading>
                        <HStack>
                            <FaStar color='gold' />
                            <FaStar color='gold' />
                            <FaStar color='gold' />
                            <FaStar color='gold' />
                            <FaStar color='gold' />
            
                        </HStack>
                    </Stack>
                    <Heading  size={{base:"sm",md:'md'}} mt={'20px'} >"{title}"</Heading>
                    <Text size={{base:"sm",md:'md'}}  >
                        {toggle?truncateText(review,variant):truncateText(review,review.length)}
                    </Text>
                    <Text color='gold' cursor={'pointer'}  onClick={()=>setToggle(!toggle)} >{toggle?"🡳 Read more..":"🡱 Read less.."}</Text>
                    
                </Stack>
            </Stack>
  )
}

export default ReviewContainer