import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import FrontBanner from '../components/about/FrontBanner'
import AboutDetails from '../components/about/AboutDetails'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <Box>
      <FrontBanner/>
      
      <AboutDetails/>
    </Box>
  )
}

export default About