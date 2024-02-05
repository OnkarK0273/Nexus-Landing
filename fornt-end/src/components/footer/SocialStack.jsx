import { HStack, Image } from '@chakra-ui/react'
import React from 'react'

const SocialStack = ({src,text,link}) => {
  return (
    <HStack gap={'20px'} >
        <Image src={src} alt ={text}  width={'22px'} height={'22px'} />
        <a href={link}  target='_blank' >
            {text}
        </a>
    </HStack>
  )
}

export default SocialStack