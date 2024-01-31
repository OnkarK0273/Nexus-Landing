import { Center, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const GalleryRight = ({location}) => {
  return (
    <Stack direction={'column'} gap={'30px'}  justify={'center'} align={{base:'center',lg:"center",xl:"baseline"}} >
        <Center w={{base:"70%",md:"50%",lg:'300px',"2xl":"363px"}} h={{base:"50px",lg:'70px',"2xl":"79x"}}  bg={'#FCD160'}  borderRadius={'20px'} cursor={'pointer'} mt={'20px'} _hover={{color:"black"}} >
            <Text fontSize={{base:"15px",md:"20px","2xl":"28px"}}  >Download Brochure</Text>
        </Center>
        <HStack w={{base:"100%",lg:'80%',xl:"462px"}} cursor={'pointer'} >
            <Image src='https://res.cloudinary.com/dzvja514w/image/upload/v1705855643/NexusGroup.com/Projects/Isolation_Mode_jodr7e.svg' alt='location' />
            <Text fontSize={{base:"15px",md:"20px"}} >{location}</Text>
        </HStack>
    </Stack>
  )
}

export default GalleryRight