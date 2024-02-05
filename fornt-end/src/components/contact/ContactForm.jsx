import {

  Box,
  Heading,
 
  Button,
  VStack,

  Input,

  Textarea,
  useBoolean,

  Stack,
} from "@chakra-ui/react";
import { color } from "framer-motion";

import { useState } from "react";

export default function ContactForm() {

  return (
    <Box w={{ base: "100%", md: "80%" }} m={"auto"}>
      <Heading fontSize={"32px"} mb={"20px"} color={"#FCD160"}>
        Enquiry Form
      </Heading>
      <VStack
        border={"0px"}
        borderColor={"white"}
        gap={"20px"}
        align={"flex-start"}
      >
        <Stack
          w={"100%"}
          gap={"20px"}
          direction={{ base: "column", md: "row" }}
        >
          <Input type="text" placeholder="Enter name" bg={"#1C1C1C"} border={'1px'} focusBorderColor="#FCD160" />
          <Input type="number" placeholder="Enter Phone No." bg={"#1C1C1C"} border={'1px'} focusBorderColor="#FCD160"  />
        </Stack>
        <Box w={"100%"}>
          <Input type="email" placeholder="Enter Email" bg={"#1C1C1C"} border={'1px'} focusBorderColor="#FCD160"  />
        </Box>
        <Box w={"100%"}>
          <Textarea
            placeholder="Enter your query"
            size={"lg"}
            height={"150px"}
            bg={"#1C1C1C"}
            border={'1px'} focusBorderColor="#FCD160"  
          />
        </Box>
        <Button bg={"#FCD160"} variant="solid">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}
