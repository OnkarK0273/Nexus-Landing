import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const Animation = () => {
  const scrollRef = useRef(null);

  return (
    <Box ref={scrollRef} style={{ overflow: 'scroll', height: '500px' }}>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 1 }}
      >
        <Text>
          Nestled amidst nature’s beauty, our premium eco & agro resort offers an enchanting escape for those seeking serenity and opulence. Experience the heights of comfort in our exquisite accommodations.
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 1 }}
      >
        <Text>About Us</Text>
      </motion.div>
    </Box>
  );
};

export default Animation;
