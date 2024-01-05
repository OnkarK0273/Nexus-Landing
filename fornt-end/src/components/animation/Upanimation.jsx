import React from 'react'
import {motion} from 'framer-motion'
const Upanimation = ({children}) => {
  return (
    <motion.div  
                            initial={{opacity:0,y:80}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:'1'}}
     > 
        {children}
     </motion.div>
  )
}

export default Upanimation