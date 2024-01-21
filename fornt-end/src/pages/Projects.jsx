import React, { useEffect } from 'react'
import FrontSection from '../components/projects/FrontSection'
import { Box } from '@chakra-ui/react'

const ProjectsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <FrontSection/>
    </Box>
  )
}

export default ProjectsDetails