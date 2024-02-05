import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import WelcomeSection from '../components/home/WelcomeSection'
import ProjectSection from '../components/home/ProjectSection'
import ReviewSection from '../components/home/ReviewSection'
import Whatsapp from '../components/common/whatsapp'
import Contact from '../components/contact/ContactForm'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box  >
      <WelcomeSection/>
      <ProjectSection/>
      <ReviewSection/>
      {/* <Contact/> */}
      <Whatsapp/>
    </Box>
  )
}

export default Home

