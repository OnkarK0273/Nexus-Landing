import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const Listpoints = ({data,title,w}) => {
  
  return (
    <Box  w={{base:"none","2xl":w}} >
        <Heading fontSize={'32px'}  color={'#FCD160'} mb={'10px'} >
          {
            title
          }
        </Heading>
        <UnorderedList gap={'30px'} >
        {
            data?.map((el,i)=><ListItem key={i} mb={'10px'} fontSize={'18px'} >{el}</ListItem>)
        }
        </UnorderedList>
    </Box>
  )
}

export default Listpoints