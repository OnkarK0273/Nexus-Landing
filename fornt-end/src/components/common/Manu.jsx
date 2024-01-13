// MenuComponent.js
import React, { useState } from 'react';
import { Box, Menu, MenuButton, MenuList, MenuItem, Text,Button } from '@chakra-ui/react';


const MenuComponent = () => {
 

  return (
    <Box>
      <Menu  >
            <MenuButton >
                Projects
            </MenuButton>
            <MenuList bg={'black'}  color= "white"     >
                <MenuItem  bg={'black'} _hover={{color:"#FDCB00"}}  >Completed</MenuItem>
                <MenuItem  bg={'black'} _hover={{color:"#FDCB00"}}>Working</MenuItem>
               
                
            </MenuList>
        </Menu>
    </Box>
  );
};

export default MenuComponent;
