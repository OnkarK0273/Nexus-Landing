import { Box, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

import Upanimation from '../animation/Upanimation'
import Opacityanimation from '../animation/Opacityanimation'
import Slick from './Slick'
import Carousel from './Carsoual'



const FrontSection = () => {
const [data,setData] = useState({})
const [data2,setData2] = useState([])
const [images,setImages] = useState([])

useEffect(()=>{
    const sessionData = JSON.parse(sessionStorage.getItem("data"))
    setData(sessionData)
    setData2(sessionData.details)
    setImages(sessionData.images)

},[])



    


  return (
    <Box>
        <Stack  >
            <Opacityanimation>
            <Box w={'100%'} height={{base:"500px",sm:"600px",md:"600px",lg:"700px",xl:"750px","2xl":"1200px"}}  border={'0px'} borderColor={'white'} >
                <Image src={data.img2} alt={data.name} width={"100%"} height={'100%'} objectFit={{base:"cover",xl:"cover"}} />
            </Box>
            </Opacityanimation>
                       
                <Stack  w={'80%'} m={'auto'} pt={10} >
                    <Heading color={'#FDCB00'}  > {data.name} </Heading>
                    <Stack gap={5}   >
                        {
                            data2?.map((el,i)=>(  <Upanimation><Text key={i} >{el}</Text></Upanimation> ))
                        }
                    </Stack>
                </Stack>
            
            <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={6} p={20}  display={{base:"none",md:"grid"}} >

                {
                    images?.map((el,i)=>(
                        <Box p={0} >
                            <Upanimation>
                            <Image src={el} key={i} />
                            </Upanimation>
                        </Box>
                    ))
                }

            </Grid>
            <Box display={{base:"block",md:"none"}} >
                <Slick images={images}/>
            </Box>
            <Carousel/>

        </Stack>
    </Box>
  )
}

export default FrontSection