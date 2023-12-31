import { Link } from '@chakra-ui/react';
import React from 'react'
import * as Scroll from "react-scroll";

const ScrollNav = ({children,name}) => {

  return (
    <Scroll.Link
        activeClass="active"
        to={name}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
            {
                children
            }
    </Scroll.Link>
  )
}

export default ScrollNav