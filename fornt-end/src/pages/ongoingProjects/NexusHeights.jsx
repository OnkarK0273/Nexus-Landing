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
  const [data] = useState(ongoingProjects[1])
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.name
  }, []);

  return (
    <>
    <Box>
      <Poster src={data.img2} alt={data.name} mobsrc={data.mob_img} />
      <Amenities src={data.Amenities}  alt={data.name} w={'1059px'}  h={'161px'} />
    </Box>
    <Body>
        <ScannerBox src={data.Scanner} />
        <DescrptionBox1 des={data.details}  features={data.list2}  facilities={data.list1} />
        <Gallery  location={data.location} thumbnail={data.thumbnail} imges={data.images}  brochure={data.brochure} />
    </Body>
    </>
    
  )
}

export default NexusHeights