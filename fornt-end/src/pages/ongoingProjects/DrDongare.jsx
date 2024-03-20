import { Box} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Poster from '../../components/projects/poject_details/Poster'
import Amenities from '../../components/projects/poject_details/Amenities'
import Body from '../../components/projects/poject_details/Body'
import { ongoingProjects } from '../../utils/Data'
import DescriptionBox4 from '../../components/projects/poject_details/DescriptionBox4'
import Gallery from '../../components/projects/poject_details/Gallery'

const DrDongare = () => {
  const [data,setData] = useState(ongoingProjects[2])
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.name
  }, []);
  return (
    <>
      <Box>
        <Poster src={data.img2} alt={data.name} istext={true} />
        <Amenities src={data.Amenities}  alt={data.name}/>
      </Box>
      <Body>
          <DescriptionBox4 des1={data.details} des2={data.facilities} des3={data.location_advantage} />
          <Gallery  location={data.location} thumbnail={data.thumbnail} imges={data.images}  brochure={data.brochure} />
      </Body>
    </>
  )
}

export default DrDongare