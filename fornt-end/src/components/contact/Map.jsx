import { AspectRatio, Box } from "@chakra-ui/react";
import React from "react";

const Map = () => {
  return (
    <Box h={{ base: "40vh", md: "50vh" }}>
      <AspectRatio width={"100%"} height={"100%"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.492229038112!2d74.2263074755176!3d16.702274084072748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100727b53dbfb%3A0x6e0692f7193b9ab7!2sempire%20tower%20ADV.%20NOTARY%20..DCRUZ!5e0!3m2!1sen!2sin!4v1704974572993!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ borderRadius: "10px" }}
        ></iframe>
      </AspectRatio>
    </Box>
  );
};

export default Map;
