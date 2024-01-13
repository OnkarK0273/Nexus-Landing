import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';

const Carousel = () => {
  const images = [
    { name: 'Image 1', url: '/images/projects/The-First.jpg' },
    { name: 'Image 2', url: '/images/projects/Nexus-One.jpg' },
    { name: 'Image 3', url: '/images/projects/Nexus-Heights.jpg' },
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const preSlide = ()=>{
    setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval as needed (3000 milliseconds = 3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex, images.length]);

  return (
    <Box display="flex" alignItems="center" flexDir={'row-reverse'} >
      <Box flex={1} overflow="hidden" maxWidth="70%">
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].name}
          width="100%"
          transition="transform 0.5s ease-in-out"
          transform="translateX(0)"
          _hover={{ transform: 'scale(1.1)' }} // Optional: Add a hover effect
        />
      </Box>
      <Box flex={1} marginLeft="20px">
        <Heading >{images[currentIndex].name}</Heading>
        <Button onClick={nextSlide} mt={4}>
          Next
        </Button>
        <Button onClick={preSlide} mt={4}  isDisabled={currentIndex ===0} >
          prw
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
