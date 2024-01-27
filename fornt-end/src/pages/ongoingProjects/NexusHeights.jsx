import React, { useEffect, useState } from 'react'
import Poster from '../../components/projects/poject_details/Poster'
import { ongoingProjects } from '../../utils/Data'
import { Box } from '@chakra-ui/react'
import Amenities from '../../components/projects/poject_details/Amenities'

import Body from '../../components/projects/poject_details/Body'
import ScannerBox from '../../components/projects/poject_details/ScannerBox'

import DescrptionBox1 from '../../components/projects/poject_details/DescrptionBox1'
import Gallery from '../../components/projects/poject_details/Gallery'

const NexusHeights = () => {
  const [data,setData] = useState(ongoingProjects[1])
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
        <DescrptionBox1 des={data.details}  features={data.features}  facilities={data.facilities} />
        <Gallery  location={data.location} thumbnail={data.thumbnail} imges={data.images} />
    </Body>
    </>
    
  )
}

export default NexusHeights