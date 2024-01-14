'use client'

import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
 
  Image,
 
  IconButton,
  
} from '@chakra-ui/react'
import { FaArrowCircleLeft } from "react-icons/fa"
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function ProjectCursol() {
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
    <Box w={{base:'80%',lg:"900px",xl:"60%",'2xl':"45%"}} m={'auto'} border={'0px'} borderColor={'teal'} py={'20px'} >
      <Stack
        align={'center'}
        justify={'space-between'}
        gap={10}
        direction={{ base: 'column', md: 'row' }}>
        <Stack  spacing={{ base: 5, md: 10 }} border={'0px'} borderColor={'teal'} >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            textAlign={'left'}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Write once,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
            {images[currentIndex].name}
            </Text>
          </Heading>
          
        </Stack>
        <Flex
          
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={{base:"290px",md:'350px',lg:"500px",'2xl':"600px"}}>
          
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
            isDisabled={currentIndex ===0}
            onClick={preSlide}
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<FaArrowCircleLeft color={'tomato'} size={35} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'15%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
              zIndex={30}
            />
            <IconButton
            onClick={nextSlide}
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<FaArrowCircleRight color={'tomato'} size={35} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              right={'0%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
              zIndex={30}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={images[currentIndex].url}
              transition="transform 0.5s ease-in-out"
                transform="translateX(0)"
                _hover={{ transform: 'scale(1.1)' }}
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}



