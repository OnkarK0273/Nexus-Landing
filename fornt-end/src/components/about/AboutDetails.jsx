import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { aboutDetails } from '../../utils/Data'
import Upanimation from '../animation/Upanimation'
import Opacityanimation from '../animation/Opacityanimation'
import Body from '../projects/poject_details/Body'
import Description from '../projects/poject_details/Description'
import MissionVision from './MissionVision'

const AboutDetails = () => {
  return (
    <Body>
        <Stack direction={{base:"column",lg:'row'}} justify={{base:"flex-start",lg:"space-between"}} >
          <Box w={{base:"100%",lg:'550px',"2xl":"680px"}} >
            <Description des={aboutDetails.des[0]} />
          </Box>
          <Box w={{base:"100%",lg:'550px',"2xl":"680px"}} >
            <Description des={aboutDetails.des[1]} />
          </Box>
        </Stack>

        <Box>
          <Description des={aboutDetails.des[2]} />
        </Box>
        
        <MissionVision title={'Mission:'} des={aboutDetails.mission} />
        <MissionVision title={'Vision:'} des={aboutDetails.vision} />
    </Body>
  )
}

export default AboutDetails

