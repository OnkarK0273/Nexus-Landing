import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Description from '../projects/poject_details/Description'

const MissionVision = ({title,des}) => {
  return (
    <Box>
        <Stack direction={{base:"column",lg:"row"}}  justify={'space-between'} >
            <Box><Heading color={'#FCD160'} >{title}</Heading></Box>
            <Box w={{base:"100%",lg:"85%"}} bg={'#1C1C1C'} p={'10px'}  borderRadius={'20px'} >
            <Description des={des} />
            </Box>
        </Stack>
    </Box>
  )
}

export default MissionVision