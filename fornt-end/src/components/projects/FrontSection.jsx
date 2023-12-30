import { Box, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import Carousel from './Slick'



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

console.log(data.details)

    


  return (
    <Box>
        <Stack  >

            <Box w={'100%'} height={{base:"500px",sm:"600px",md:"600px",lg:"700px",xl:"750px","2xl":"1200px"}}  border={'0px'} borderColor={'white'} >
                <Image src={data.img2} alt={data.name} width={"100%"} height={'100%'} objectFit={{base:"cover",xl:"fill"}} />
            </Box>
            <Stack p={10} w={'100%'} >
                <Heading color={'#FDCB00'}  > {data.name} </Heading>
                <Stack gap={5}   >
                    {
                        data2?.map((el,i)=>(<Text key={i} >{el}</Text>))
                    }
                </Stack>
            </Stack>
            <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={6} p={20}  display={{base:"none",md:"grid"}} >

                {
                    images?.map((el,i)=>(
                        <Box p={0} >

                            <Image src={el} key={i} />
                        </Box>
                    ))
                }

            </Grid>
            <Box display={{base:"block",md:"none"}} >
                <Carousel images={images}/>
            </Box>


        </Stack>
    </Box>
  )
}

export default FrontSection