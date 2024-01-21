import { Heading } from '@chakra-ui/react'
import React from 'react'

const Headier = ({text}) => {
  return (
    <Heading textAlign={'center'} mb={0} fontSize={'32px'} >
        {text}
    </Heading>
  )
}

export default Headier