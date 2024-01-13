import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { projectData } from '../../utils/Data'
import ProjectContainer from './ProjectContainer'

const ProjectSection = () => {
    

  return (
    <VStack  gap={0} id='Projects'   >

        {
            projectData.map((el,index)=><ProjectContainer key={index} data={el} index={index} />)
        }

    </VStack>
  )
}

export default ProjectSection