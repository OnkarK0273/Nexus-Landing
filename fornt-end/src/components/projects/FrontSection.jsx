import { Box, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

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

            <Box w={'100%'} >
                <Image src={data.img2} alt={data.name} width={"100%"} height={'800px'} objectFit={'fill'} />
            </Box>
            <Stack p={10} w={'100%'} >
                <Heading color={'#FDCB00'}  > {data.name} </Heading>
                <Stack gap={10}   >
                    {
                        data2?.map((el,i)=>(<Text key={i} >{el}</Text>))
                    }
                </Stack>
            </Stack>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} p={20} >

                {
                    images?.map((el,i)=>(
                        <Box p={0} >

                            <Image src={el} key={i} />
                        </Box>
                    ))
                }

            </Grid>
        </Stack>
    </Box>
  )
}

export default FrontSection