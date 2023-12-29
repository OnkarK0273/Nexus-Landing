import { Heading } from '@chakra-ui/react'
import React from 'react'

const Headier = ({text}) => {
  return (
    <Heading textAlign={'center'} mb={10} >
        {text}
    </Heading>
  )
}

export default Headier