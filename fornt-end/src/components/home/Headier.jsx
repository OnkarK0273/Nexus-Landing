import { Heading } from '@chakra-ui/react'
import React from 'react'

const Headier = ({text}) => {
  return (
    <Heading textAlign={'center'} mb={{base:5,md:0}} fontSize={'32px'} >
        {text}
    </Heading>
  )
}

export default Headier