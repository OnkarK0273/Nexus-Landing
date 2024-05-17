import { AspectRatio, Box } from "@chakra-ui/react";
import React from "react";

const Map = () => {
  return (
    <Box h={{ base: "40vh", md: "50vh" }}>
      <AspectRatio width={"100%"} height={"100%"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2168262827986!2d74.23810227545933!3d16.716029684061223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64e2ac9501880c6f%3A0x444a67b6f261e108!2sNexus%20Group!5e0!3m2!1sen!2sin!4v1713181109280!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ borderRadius: "10px" }}
        ></iframe>
      </AspectRatio>
    </Box>
  );
};

export default Map;
{/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}