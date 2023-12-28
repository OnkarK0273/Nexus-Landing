import { Box, Heading, Image, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react'

const ProjectContainer = ({data,index}) => {

  return (
    <Box>
        <Stack direction={{base:index%2===0?"column-reverse":"column",md:index%2===0?"row":"row-reverse"}} justifyContent={'space-between'}  gap={'150px'} border={'1px'} borderColor={"white"}>
            <Box  border={'1px'} borderColor={"white"}  >
                <Image src={data.img} alt={data.name} w={"100%"}  objectFit={'fill'} />
            </Box>
            <VStack gap={10} align={"flex-start"}  >
                <Box>
                    <Heading color={'#FDCB00'} >{data.name}</Heading>
                </Box>
                <Box>
                    <Text>{data.des}</Text>
                </Box>
                <Box>
                    <Text color={'#FDCB00'}>Know more</Text>
                </Box>
            </VStack>
        </Stack>
    </Box>
  )
}

export default ProjectContainer