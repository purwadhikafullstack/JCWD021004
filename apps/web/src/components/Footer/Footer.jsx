import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
      className="footer-container"
      padding={'15px'}
      bg={'white'}
      position={'fixed'}
      bottom={0}
      width={'100%'}
    >
      <Flex
        className="footer-bottom"
        flexDir={'column'}
        gap={'5px'}
        alignItems={'center'}
      >
        <Box>
          <Flex
            flexDir={'row'}
            gap={'16px'}
            fontSize={'14px'}
            fontWeight={'bold'}
            color={'black'}
            marginBottom={'15px'}
          >
            <Box paddingRight={'15px'} borderRight={'1px solid #D3D0D0'}>
              <Link color={'black'}>About Relaxin.com</Link>
            </Box>
            <Box paddingRight={'15px'} borderRight={'1px solid #D3D0D0'}>
              <Link color={'black'}>Terms & Conditions</Link>
            </Box>
            <Box paddingRight={'15px'} borderRight={'1px solid #D3D0D0'}>
              <Link color={'black'}>How we work</Link>
            </Box>
            <Box paddingRight={'15px'} borderRight={'1px solid #D3D0D0'}>
              <Link color={'black'}>Privacy & Cookie Statement</Link>
            </Box>
            <Box>
              <Link color={'black'}>Help Center</Link>
            </Box>
          </Flex>
        </Box>
        <Text fontSize={'14px'} color={'black'}>
          Copyright © 2023 - 2024 Relaxin.com™. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
