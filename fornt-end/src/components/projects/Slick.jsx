import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Modalvideo from './poject_details/Modalvideo';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,

};
const videoURL = "https://res.cloudinary.com/dzvja514w/video/upload/v1707118296/NexusGroup.com/Projects/Dr%20Dongare%20Colony/Dr._Dongre_Colony_Nexus_v4_1_i5lvzo.mp4"
export default function Slick({images}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);
  console.log(slider)
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '55%', md: '50%' });
  const side = useBreakpointValue({ base: '5%', md: '10px' });

  // These are the images used in the slide
 

  return (
    <Box
      m='auto'
      position={'relative'}
     
      height={{base:"300px",md:'80vh'}}
      w={"100%"}
      borderRadius={'20px'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon "rgba(199,174,146,1.00)"*/}
      
      <IconButton
        aria-label="left-arrow"
        bg='whiteAlpha.400'
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -80%)'}
        zIndex={1}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg='whiteAlpha.400'
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -80%)'}
        zIndex={1}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((url, index) =>
          <Box
            key={index}
            height={{base:"350px",md:"505px",lg:"75vh"}} 
            border="0px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='contain'
            backgroundImage={`url(${url})`}
            p='5px'
          />
        )}
      </Slider>
    </Box>
  );
}