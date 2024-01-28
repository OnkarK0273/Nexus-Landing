import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import ProjectContainerImg from "./ProjectContainerImg";
import ProjectContainerContent from "./ProjectContainerContent";

const ProjectContainer = ({ data, index }) => {
  return (
    <Box
      backgroundColor={index % 2 === 1 ? "#232222" : "black"}
      px={{ base: 5, md: 28 }}
      py={{ base: "20px", md: "30px" }}
      border={"0px"}
      borderColor={"teal"}
      w={{ base: "100%", "2xl": "1440px" }}
    >
      <Stack
        direction={{
          base: index % 2 === 0 ? "column-reverse" : "column-reverse",
          lg: index % 2 === 0 ? "row" : "row-reverse",
        }}
        justifyContent={"space-between"}
        gap={"55px"}
        border={"0px"}
        borderColor={"white"}
      >
        <ProjectContainerImg img={data.img} name={data.name} />
        <ProjectContainerContent
          img={data.img}
          name={data.name}
          path={data.path}
          des={data.des}
        />
      </Stack>
    </Box>
  );
};

export default ProjectContainer;
