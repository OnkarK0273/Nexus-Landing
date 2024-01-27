import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Description = ({des}) => {
  return (
    <Box>
        <Text>
            {des}
        </Text>
    </Box>
  )
}

export default Description