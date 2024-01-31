import React, { useEffect } from 'react'
import ProjectContainer from '../../components/home/ProjectContainer'
import { completedProjects } from '../../utils/Data'
import { VStack } from '@chakra-ui/react'

const Projectmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <VStack mt={{base:"60px",md:"80px","2xl":"100px"}} >
        {
          completedProjects.map((el,index)=><ProjectContainer key={index} data={el} index={index} />)
        }
      </VStack>
    </>
  )
}

export default Projectmap