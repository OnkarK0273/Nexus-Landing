import React from 'react'
import GalleryImg from './GalleryImg'
import { Box, Heading, Stack } from '@chakra-ui/react'
import GalleryRight from './GalleryRight'

const Gallery = ({thumbnail,location,imges,brochure}) => {
  return (
    <Box border={'0px'} borderColor={'teal'} >
            <Heading mb={'20px'} fontSize={'32px'} color={'#FCD160'} >Gallery</Heading>
            <Stack direction={{base:"column",lg:"row"}}  justify={{base:"space-between","2xl":"space-between"}}  >
              <GalleryImg thumbnail={thumbnail} imges={imges}/>
              <GalleryRight location={location} brochure={brochure} />
            </Stack>
            {/* <Slick images={data.images} /> */}
    </Box>
  )
}

export default Gallery