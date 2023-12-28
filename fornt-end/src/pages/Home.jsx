import { Box } from '@chakra-ui/react'
import React from 'react'
import WelcomeSection from '../components/home/WelcomeSection'
import ProjectSection from '../components/home/ProjectSection'

const Home = () => {
  return (
    <Box>
      <WelcomeSection/>
      <ProjectSection/>
    </Box>
  )
}

export default Home