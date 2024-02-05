import React from 'react'
import Body from '../projects/poject_details/Body'
import { Box, Stack, VStack } from '@chakra-ui/react'
import { footerData } from '../../utils/Data'
import SocialStack from './SocialStack'
import FooterRight from './FooterRight'

const Footer2 = () => {
  return (
    <Box  bg={'#393939'} h={{base:'480px',md:"380px",lg:"250px"}} >
        <Body>
            <Stack direction={{base:"column",lg:'row'}} h={'150px'} borderBottom={{base:"0px",lg:'1px'}} borderColor={'white'}  >
                <VStack p={'10px'} w={{base:"100%",lg:"50%"}} borderRight={{base:"0px",lg:'1px'}}  borderBottom={{base:"1px",lg:'0px'}}  pb={{base:"20px",lg:"none"}} borderColor={'white'}  align={'flex-start'} justify={'space-evenly'} >
                  {
                    footerData.map((el,i)=><SocialStack src={el.src} text={el.text} key={i} link={el.link}  />)
                  }
                </VStack>
                <FooterRight/>
            </Stack>
        </Body>
    </Box>
  )
}

export default Footer2