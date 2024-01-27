import React, { useEffect, useState } from 'react'
import Poster from '../../components/projects/poject_details/Poster'
import { ongoingProjects } from '../../utils/Data'
import { Box, Center, Stack } from '@chakra-ui/react'
import Amenities from '../../components/projects/poject_details/Amenities'
import Scanner from '../../components/projects/poject_details/Scanner'
import { projectsDetailsCSS } from '../../utils/projectcss'
import Body from '../../components/projects/poject_details/Body'
import ScannerBox from '../../components/projects/poject_details/ScannerBox'
import Description from '../../components/projects/poject_details/Description'
import Gallery from '../../components/projects/poject_details/Gallery'

const NexusOne = () => {
  const [data,setData] = useState(ongoingProjects[0])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Box>
      <Poster src={data.img2} alt={data.name}  />
      <Amenities src={data.Amenities}  alt={data.name}/>
    </Box>
    <Body> 
      <ScannerBox src={data.Scanner} />
        <Box w={{base:"100%",lg:'771px'}} m={'auto'} >
          <Description des={data.details} />
        </Box>
        <Gallery  location={data.location} thumbnail={data.thumbnail} imges={data.images} />
      
    </Body>
    </>
    
  )
}

export default NexusOne