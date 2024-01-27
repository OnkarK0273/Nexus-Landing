import { VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {  ongoingProjects } from '../../utils/Data'
import ProjectContainer from '../../components/home/ProjectContainer'

const Projectmapongoing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <VStack>
        {
          ongoingProjects.map((el,index)=><ProjectContainer key={index} data={el} index={index} />)
        }
    </VStack>
  )
}

export default Projectmapongoing