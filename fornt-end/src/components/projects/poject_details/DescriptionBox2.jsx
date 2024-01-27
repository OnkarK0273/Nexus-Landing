import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Description from './Description'
import Listpoints from './Listpoints'

const DescriptionBox2 = ({des1,des2,des3,des4}) => {
  return (
    <Box>
        <Stack direction={{base:"column",lg:'row'}}  justify={{base:"space-between","2xl":'space-around'}}   gap={{base:"20px",lg:"0px"}} >
              <Stack direction={'column'} gap={'20px'} w={{base:"100%",lg:'796px'}} >
                <Description des={des1} />
                <Description des={des2} />
                <Listpoints  data={des3}/>
              </Stack>
              <Box w={{base:"100%",lg:'371px'}} >
                <Description des={des4} />
              </Box>
        </Stack>
    </Box>
  )
}

export default DescriptionBox2