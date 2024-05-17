// MenuComponent.js
import React from 'react';
import { Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const MenuComponent = ({color,fontWeight,handleSide}) => {
  
  
  return (
    <Box zIndex={20} >
      <Menu  >
            <MenuButton fontWeight={fontWeight} >
               PROJECTS
            </MenuButton>
            <MenuList bg={color}  color= "white"  borderColor={'black'}   >
                <MenuItem  bg={color} _hover={{color:"#FDCB00"}} onClick={()=>{handleSide('/completed')}} >Completed</MenuItem>
                <MenuItem  bg={color} _hover={{color:"#FDCB00"}} onClick={()=>{handleSide('/ongoing')}} >Ongoing</MenuItem>                
            </MenuList>
        </Menu>
    </Box>
  );
};

export default MenuComponent;
