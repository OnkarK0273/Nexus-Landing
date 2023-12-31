import { Box } from '@chakra-ui/react'
import React from 'react'
import FrontBanner from '../components/about/FrontBanner'
import AboutDetails from '../components/about/AboutDetails'

const About = () => {
  return (
    <Box>
      <FrontBanner/>
      <AboutDetails/>
    </Box>
  )
}

export default About