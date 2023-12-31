import { Box } from '@chakra-ui/react'
import React from 'react'
import WelcomeSection from '../components/home/WelcomeSection'
import ProjectSection from '../components/home/ProjectSection'
import ReviewSection from '../components/home/ReviewSection'

const Home = () => {
  return (
    <Box>
      <WelcomeSection/>
      <ProjectSection/>
      <ReviewSection/>
    </Box>
  )
}

export default Home

