import React, { useEffect, useState } from 'react'
import Poster from '../../components/projects/poject_details/Poster'
import { completedProjects } from '../../utils/Data'
import { Box} from '@chakra-ui/react'
import Amenities from '../../components/projects/poject_details/Amenities'
import Body from '../../components/projects/poject_details/Body'
import ScannerBox from '../../components/projects/poject_details/ScannerBox'
import DescriptionBox2 from '../../components/projects/poject_details/DescriptionBox2'
import Gallery from '../../components/projects/poject_details/Gallery'

const TheFirst = () => {
  const [data,setData] = useState(completedProjects[1])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Box>
      <Poster src={data.img2} alt={data.name}  />
      <Amenities src={data.Amenities}  alt={data.name}/>
    </Box>
    <Body >
      
      <ScannerBox src={data.Scanner} />
        <DescriptionBox2 des1={data.details[0]} des2={data.details[1]} des3={data.details[2]} des4={data.details[3]} />
        <Gallery  location={data.location} thumbnail={data.thumbnail} imges={data.images} />
      
    </Body>
    </>
    
  )
}

export default TheFirst