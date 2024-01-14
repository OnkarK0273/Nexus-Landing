// MenuComponent.js
import React from 'react';
import { Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';


const MenuComponent = () => {
 

  return (
    <Box>
      <Menu  >
            <MenuButton >
                Projects
            </MenuButton>
            <MenuList bg={'black'}  color= "white"  borderColor={'black'}   >
                <MenuItem  bg={'black'} _hover={{color:"#FDCB00"}}  >Completed</MenuItem>
                <MenuItem  bg={'black'} _hover={{color:"#FDCB00"}}>Working</MenuItem>
               
                
            </MenuList>
        </Menu>
    </Box>
  );
};

export default MenuComponent;
