import { Center, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const GalleryRight = ({location,brochure}) => {
  return (
    <Stack direction={'column'} gap={'30px'}  justify={'center'} align={{base:'center',lg:"center",xl:"baseline"}}  border={'0px'} borderColor={'white'} >
        {/* <Center w={{base:"70%",md:"50%",lg:'300px',"2xl":"363px"}} h={{base:"50px",lg:'70px',"2xl":"79x"}}   bg='#393939' borderRadius={'20px'} cursor={'pointer'} mt={'20px'} _hover={{color:"black",bg:'#FCD160'}} >
            <Link fontSize={'18px'} fontWeight={'bold'} target='_blank'  href={brochure} >Download Brochure</Link>
        </Center> */}
        <HStack w={{base:"100%",lg:'80%',xl:"462px"}} cursor={'pointer'} >
            <Image src='https://res.cloudinary.com/dzvja514w/image/upload/v1705855643/NexusGroup.com/Projects/Isolation_Mode_jodr7e.svg' alt='location' />
            <Text fontSize={'18px'} >{location}</Text>
        </HStack>
    </Stack>
  )
}

export default GalleryRight