import { Box } from '@chakra-ui/react'
import React from 'react'
import WelcomeSection from '../components/home/WelcomeSection'
import ProjectSection from '../components/home/ProjectSection'
import ReviewSection from '../components/home/ReviewSection'
import Animation from '../components/home/Animation'

const Home = () => {
  return (
    <Box  >
      <WelcomeSection/>
      {/* <Animation/> */}
      <ProjectSection/>
      <ReviewSection/>
    </Box>
  )
}

export default Home

