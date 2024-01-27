import { Center } from '@chakra-ui/react'
import React from 'react'
import Scanner from './Scanner'
import { projectsDetailsCSS } from '../../../utils/projectcss'

const ScannerBox = ({src}) => {
  return (
    <Center bg={projectsDetailsCSS.scanner.bg} w={projectsDetailsCSS.scanner.w} h={projectsDetailsCSS.scanner.h} p={projectsDetailsCSS.scanner.p} borderRadius={projectsDetailsCSS.scanner.borderRadius} >
          <Scanner src={src} />
    </Center>
  )
}

export default ScannerBox