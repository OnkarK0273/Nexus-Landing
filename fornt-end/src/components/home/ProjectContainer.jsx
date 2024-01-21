import { Box, Heading, Image, Stack, VStack ,Text, useBreakpointValue} from '@chakra-ui/react'
import { motion} from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectContainer = ({data,index}) => {
    const navigate = useNavigate()
    
    const variant = useBreakpointValue(
        {
          base: 0,
          md: 20,
          lg: 50,
          xl:150
        } 
    )

    const handleSession = (el)=>{

        sessionStorage.setItem("data",JSON.stringify(el))
        navigate('/projectsDetails')

    }

    

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
    }


  return (
    <Box backgroundColor={index%2===1?"#232222":"black"} px={{base:5 ,md:28}}  py={{base:'20px',md:'30px'}} border={'0px'}  borderColor={'teal'} w={{base:"100%","2xl":"1440px"}} >
      
        <Stack direction={{base:index%2===0?"column-reverse":"column-reverse",lg:index%2===0?"row":"row-reverse"}} justifyContent={'space-between'}  gap={'55px'} border={'0px'} borderColor={"white"}>
            
        
            <Box  border={'0px'} borderColor={"white"} w={{base:"100%",lg:"50%"}} display={{base:"none",lg:"block"}} >
               
                {/* <Image src={data.img} alt={data.name} width={'90%'} m={'auto'}  objectFit={'contain'} borderRadius={'10px'}    /> */}
        <motion.div
                    initial={{opacity:0,x:80}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,x:1}}
        >
                <img src={data.img} alt={data.name} width={'90%'} style={{ margin:'auto',objectFit:"contain",borderRadius:"10px"}} />
               
        </motion.div>
            </Box>
            <VStack gap={5} align={{base:"center" , lg:"flex-start"}} w={{base:"100%",lg:"50%"}} >
                <Box>
                <motion.div
                            initial={{opacity:0,x:-80}}
                            transition={{duration:"0.5"}}
                            whileInView={{ opacity: 1 ,x:1}}        
                >
                    <Heading color={'#FDCB00'} fontSize={'32px'} >{data.name}</Heading>
                 </motion.div>
                </Box>
                <Box  border={'0px'} borderColor={"white"} w={{base:"100%",lg:"50%"}} display={{base:"block",lg:"none"}} >
                    <Image src={data.img} alt={data.name} width={'90%'} m={'auto'}  objectFit={'contain'} borderRadius={'10px'} />
                </Box>
                <Box display={{base:"none",lg:"block"}}  >
                <motion.div
                            initial={{opacity:0,x:-80}}
                            transition={{duration:"0.5"}}
                            whileInView={{ opacity: 1 ,x:1}}        
                >
                    <Text display={{base:"none",lg:"block"}} >{ truncateText(data.des, variant)}</Text>
                </motion.div>
                </Box>
                <Box cursor={'pointer'} >
                <motion.div
                            initial={{opacity:0,x:-80}}
                            transition={{duration:"0.5"}}
                            whileInView={{ opacity: 1 ,x:1}}        
                >
                    <Text color={'#FDCB00'} onClick={()=>handleSession(data)} >Know more</Text>
                </motion.div>
                </Box>
            </VStack>

        </Stack>
       
    </Box>
  )
}

export default ProjectContainer