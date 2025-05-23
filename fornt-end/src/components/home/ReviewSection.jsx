import { Box} from '@chakra-ui/react'
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
        <Box w={{base:"90%",md:'80%',lg:"80%","2xl":"56%"}} m={'auto'} py={{base:'20px',md:'30px'}}  >

            <Headier text={'Review'}  />
            <Slide>
                {
                    data?.map((el,i)=><ReviewContainer data={el} key={i}/>)
                }
            </Slide>

        </Box>
    </Box>
  )
}

export default ReviewSection