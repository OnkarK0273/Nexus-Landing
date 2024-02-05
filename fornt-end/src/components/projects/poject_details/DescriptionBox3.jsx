import React from 'react'
import Description from './Description'
import Listpoints from './Listpoints'
import { Box, Stack } from '@chakra-ui/react'

const DescriptionBox3 = ({des1,des2,des3,des4,des5}) => {
  return (
    <Stack direction={{base:"column",lg:'row'}}  justify={"space-between"}   gap={{base:"20px",lg:"0px"}} >
        <Stack direction={'column'} gap={'20px'} w={{base:"100%",lg:'579px'}} >
            <Description des={des1}  w={'659px'} />
            <Description des={des2}  w={'659px'} />
            <Listpoints  data={des3}  w={'659px'}/>
            <Description des={des4}  w={'659px'}/>
        </Stack>
        <Box w={{base:"100%",lg:'509px'}} >
            <Description des={des5}w={'509px'}  />
        </Box>
    </Stack>
  )
}

export default DescriptionBox3