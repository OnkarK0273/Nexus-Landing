import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { projectsDetailsCSS } from '../../../utils/projectcss'

const Body = ({children}) => {
  return (
    <Box w={projectsDetailsCSS.body.w} m={projectsDetailsCSS.body.m} py={projectsDetailsCSS.body.py}  border={projectsDetailsCSS.body.border} borderColor={projectsDetailsCSS.body.borderColor} >
        <Stack direction={'column'} gap={'40px'} >
        {
            children
        }
        </Stack>
    </Box>
  )
}

export default Body