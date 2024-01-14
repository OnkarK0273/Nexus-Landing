'use client'

import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react'

export default function WhatsappRipple() {
  const size = '60px'
  const color = 'green'

  const pulseRing = keyframes`
	0% {
    transform: scale(0.40);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      >
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar src="/images/logos/whatsapp.png" size="full" position="absolute" top={0} />
      </Box>
    </Flex>
  )
}