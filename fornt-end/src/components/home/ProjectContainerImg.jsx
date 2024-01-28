import { Box } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";
const ProjectContainerImg = ({img,name}) => {
  return (
    <Box
          border={"0px"}
          borderColor={"white"}
          w={{ base: "100%", lg: "50%" }}
          display={{ base: "none", lg: "block" }}
        >
          {/* <Image src={data.img} alt={data.name} width={'90%'} m={'auto'}  objectFit={'contain'} borderRadius={'10px'}    /> */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            transition={{ duration: "0.5" }}
            whileInView={{ opacity: 1, x: 1 }}
          >
            <img
              src={img}
              alt={name}
              width={"90%"}
              style={{
                margin: "auto",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </motion.div>
    </Box>
  )
}

export default ProjectContainerImg