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
        <Box >
          <Description des={aboutDetails.des[0]} />
        </Box>
        <Box  >
          <Description des={aboutDetails.des[1]} />
        </Box>
        <Box>
          <Description des={aboutDetails.des[2]} />
        </Box>
        <MissionVision title={'Mission:'} des={aboutDetails.mission} />
        <MissionVision title={'Vision:'} des={aboutDetails.vision} />
    </Body>
  )
}

export default AboutDetails

