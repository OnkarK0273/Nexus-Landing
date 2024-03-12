import React, { useEffect, useState } from 'react'
import { completedProjects } from '../../utils/Data'
import Body from '../../components/projects/poject_details/Body'
import { Box } from '@chakra-ui/react'
import Poster from '../../components/projects/poject_details/Poster'
import Amenities from '../../components/projects/poject_details/Amenities'
import DescriptionBox3 from '../../components/projects/poject_details/DescriptionBox3'
import Gallery from '../../components/projects/poject_details/Gallery'

const TheHub = () => {
  const [data,setData] = useState(completedProjects[0])
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.name
  }, []);
  return (
    <>
      <Box>
        <Poster src={data.img2} alt={data.name}  />
        {/* <Amenities src={data.Amenities}  alt={data.name}/> */}
      </Box>
      <Body>
        <DescriptionBox3  des1={data.details[0]} des2={data.details[1]} des3={data.details[2]} des4={data.details[3]} des5={data.details[4]} />

        <Gallery  location={data.location} thumbnail={data.thumbnail} imges={data.images}   brochure={data.brochure} />

      </Body>
    </>
  )
}

export default TheHub