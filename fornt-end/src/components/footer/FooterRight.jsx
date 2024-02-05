import { Box, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { footerIcons, socialLinks } from "../../utils/Data";

const FooterRight = () => {
  return (
    <Stack
      ml={{base:"0px",lg:"20px"}}
      p={"10px"}
      direction={{ base: "column", lg: "row" }}
      w={{ base: "100%", lg: "50%" }}
      justify={'space-between'}
    >
      <VStack align={"flex-start"} justify={"space-around"} gap={'20px'}  >
        <Text w={'375px'} >Welcome to refined urban living and modern luxury.</Text>
        <HStack gap={"20px"}>
            <Link href={socialLinks.fb}  target="_blank" >
                <Image src={footerIcons.fb} alt="fb"  width={'22px'} height={'22px'} />
            </Link>
            <Link href={socialLinks.insta}  target="_blank" >
                <Image src={footerIcons.insta} alt="insta"  width={'22px'} height={'22px'} />
            </Link>
        </HStack>
      </VStack>
      <Box>
        <Link href={socialLinks.creadai}  target="_blank" >
        <Image
          src={footerIcons.creadai}
          alt="creadai"
          height={"120px"}
          width={"140px"}
          />
          </Link>
      </Box>
    </Stack>
  );
};

export default FooterRight;
