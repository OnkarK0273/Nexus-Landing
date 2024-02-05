import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, 
  } from '@chakra-ui/react'
import Slick from '../Slick'
import { drDongeVideoURL } from '../../../utils/Data'
import Modalvideo from './Modalvideo'
const GalleryModal = ({ isOpen,imges,onClose}) => {
    
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'70%'}  isCentered>
        <ModalOverlay bg={'blackAlpha.800'} />
        <ModalContent  w={{base:"400px",md:"600px",lg:"900px",xl:"1100px"}}  bg='whiteAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)' p={'10px'} >
          <ModalHeader color={'white'} >Gallery</ModalHeader>
          <ModalCloseButton  color={'white'} />
          <ModalBody>
            {
              imges[0] === drDongeVideoURL ? <Modalvideo images={imges[0]}  /> : <Slick images={imges} />  }
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GalleryModal
