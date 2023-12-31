import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Headier from './Headier'
import { reviewData } from '../../utils/Data'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ReviewContainer from './ReviewContainer';

const ReviewSection = () => {
    const [data,setData] = useState([])

    useEffect(()=>{

        setData(reviewData)

    },[])
  return (
    <Box>
        <Box w={{base:"90%",md:'80%',lg:"80%"}} m={'auto'} py={10}  >

            <Headier text={'Review'}  />
            <Slide>
                {
                    data?.map((el)=><ReviewContainer data={el}/>)
                }
            </Slide>

        </Box>
    </Box>
  )
}

export default ReviewSection