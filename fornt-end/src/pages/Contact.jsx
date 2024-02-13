import React, { useEffect } from 'react'
import Body from '../components/projects/poject_details/Body'
import { AspectRatio, Box } from '@chakra-ui/react'
import ContactForm from '../components/contact/ContactForm'
import Map from '../components/contact/Map'

const Contactus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'TheNexusGroup | Contact'
      }, []);
  return (
    <Box mt={{base:"60px",md:"80px","2xl":"100px"}} >
        <Body>
            <ContactForm/>
            <Map/>
        </Body>
    </Box>
  )
}

export default Contactus