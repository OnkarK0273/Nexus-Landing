import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Description from './Description'
import Listpoints from './Listpoints'

const DescrptionBox1 = ({des,facilities,features}) => {
  return (
    <Box>
        <Stack direction={{base:"column",lg:'row'}}  justify={'space-between'}  >
              <Stack direction={'column'} gap={'20px'} w={{base:"100%",lg:'577px'}} >
                <Description des={des} />
                <Listpoints title={'Facilities:'}  data={facilities}/>
              </Stack>
              <Box w={{base:"100%",lg:'509px'}} >
                <Listpoints title={'Project Features:'}  data={features}/>
              </Box>
          </Stack>
          
    </Box>
  )
}

export default DescrptionBox1