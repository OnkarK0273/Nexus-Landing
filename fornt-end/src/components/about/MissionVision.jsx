import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Description from '../projects/poject_details/Description'

const MissionVision = ({title,des}) => {
  return (
    <Box  >
        <Stack direction={{base:"column",lg:"row"}}  justify={'space-between'} >
            <Box><Heading color={'#FCD160'}  fontSize={{base:"32px","2xl":"48px"}} >{title}</Heading></Box>
            <Center w={{base:"100%",lg:"85%","2xl":"1060px"}} bg={'#1C1C1C'} p={{base:'30px',"2xl":"0px"}}  h={{base:"none","2xl":"170px"}} borderRadius={'20px'} >
            <Stack align={'center'} justify={'center'} direction={'row'} w={{base:"none","2xl":"975px"}} > 
              <Text lineHeight={'27px'} fontSize={{base:'18px',"2xl":"18px"}} >
                  {des}
              </Text>
          </Stack> 
            </Center>
        </Stack> 
    </Box>
  )
}

export default MissionVision