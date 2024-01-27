import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Listpoints from './Listpoints'
import Description from './Description'

const DescriptionBox4 = ({des1,des2,des3}) => {
  return (
    <Stack direction={'column'} gap={'40px'} >
        <Description des={des1} />
        <Stack direction={{base:"column",lg:'row'}}  justify={{base:"space-between","2xl":'space-around'}}   gap={{base:"20px",lg:"0px"}} >
            <Stack direction={'column'} gap={'20px'} w={{base:"100%",lg:'550px'}} >
                <Listpoints title={'Facilities'} data={des2}/>
            </Stack>
            <Box w={{base:"100%",lg:'600px'}} >
                <Listpoints title={'Location advantage'} data={des3}/>
            </Box>
        </Stack>
    </Stack>
  )
}

export default DescriptionBox4