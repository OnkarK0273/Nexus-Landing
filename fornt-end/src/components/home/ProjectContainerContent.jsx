import { Box, Heading, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const ProjectContainerContent = ({name,img,des,path}) => {

  const navigate = useNavigate();

  const variant = useBreakpointValue({
    base: 0,
    md: 20,
    lg: 50,
    xl: 150,
  });

  const handleSession = (el) => {
    navigate(el);
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    return (
      words.slice(0, maxWords).join(" ") +
      (words.length > maxWords ? "..." : "")
    );
  };

  return (
  <Box 
    border={"0px"}
    borderColor={"white"}
    w={{ base: "100%", lg: "50%" }} >
    <VStack
          w={'90%'}
          m={'auto'}
          gap={5}
          align={{ base: "center", lg: "flex-start" }}
        >
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              transition={{ duration: "0.5" }}
              whileInView={{ opacity: 1, x: 1 }}
            >
              <Heading color={"#FDCB00"} fontSize={"32px"}>
                {name}
              </Heading>
            </motion.div>
          </Box>
          <Box
            border={"0px"}
            borderColor={"white"}
            w={{ base: "100%", lg: "50%" }}
            display={{ base: "block", lg: "none" }}
            onClick={() => handleSession(path)}
            cursor={'pointer'}
          >
            <Image
              src={img}
              alt={name}
              width={"90%"}
              m={"auto"}
              objectFit={"contain"}
              borderRadius={"10px"}
            />
          </Box>
          <Box display={{ base: "none", lg: "block" }}  w={'90%'} >
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              transition={{ duration: "0.5" }}
              whileInView={{ opacity: 1, x: 1 }}
            >
              <Text display={{ base: "none", lg: "block" }} fontSize={'18px'} >
                {truncateText(des, variant)}
              </Text>
            </motion.div>
          </Box>
          <Box cursor={"pointer"}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              transition={{ duration: "0.5" }}
              whileInView={{ opacity: 1, x: 1 }}
            >
              <Text color={"#FDCB00"} onClick={() => handleSession(path)}>
                Know more
              </Text>
            </motion.div>
          </Box>
    </VStack>
  </Box> 
  )
}

export default ProjectContainerContent