import { Box, Heading, Image, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import GalleryModal from './GalleryModal'

const GalleryImg = ({thumbnail,imges}) => {
const [opacity,setOpacity] = useState({img:"80%",text:"0%"})
const { isOpen, onOpen, onClose } = useDisclosure()
    const mouseHower = ()=>{
        setOpacity({img:"50%",text:"100%"})
    }
    const mouseExit = ()=>{
        setOpacity({img:"80%",text:"0%"})
    }
    const openModal = ()=>{
        onOpen()
    }
  return (
    <Box w={{base:"100%",lg:'600px'}} cursor={'pointer'}  position="relative" onMouseEnter={mouseHower} onMouseLeave={mouseExit} onClick={openModal}  >
        <Image src={thumbnail} opacity={opacity.img} alt={'Thumbnail'} width={'100%'} objectFit={'cover'}/>
        <Heading position="absolute"
        top="45%"
        left="40%" opacity={opacity.text} color={'#FCD160'} onClick={openModal} >View</Heading>
        <GalleryModal isOpen={isOpen}  onClose={onClose} imges={imges} />
    </Box>
  )
}

export default GalleryImg