import React from 'react'
import Description from './Description'
import Listpoints from './Listpoints'
import { Box, Stack } from '@chakra-ui/react'

const DescriptionBox3 = ({des1,des2,des3,des4,des5}) => {
  return (
    <Stack direction={{base:"column",lg:'row'}}  justify={{base:"space-between","2xl":'space-around'}}   gap={{base:"20px",lg:"0px"}} >
        <Stack direction={'column'} gap={'20px'} w={{base:"100%",lg:'579px'}} >
            <Description des={des1} />
            <Description des={des2} />
            <Listpoints  data={des3}/>
            <Description des={des4} />
        </Stack>
        <Box w={{base:"100%",lg:'509px'}} >
            <Description des={des5} />
        </Box>
    </Stack>
  )
}

export default DescriptionBox3