import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        className="navbar-top"
        padding={'6px'}
        bg={'#013B94'}
        alignItems={'center'}
        height={'82px'}
        justifyContent={'space-between'}
        boxShadow={'base'}
      >
        <Grid className="Navbar-left" padding={'16px'} alignItems={'center'}>
          <Text
            paddingLeft={'20px'}
            fontSize={'24px'}
            fontWeight={'700'}
            color={'white'}
            lineHeight={'20px'}
          >
            Relaxin.com
          </Text>
        </Grid>
        <Flex
          className="Navbar-right"
          padding={'16px'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Grid padding={'16px'} borderRight={'1px solid #D3D0D0'}>
            <Button
              color="white"
              bg={'#013B94'}
              padding={'9px 11px'}
              _hover={{ bg: 'white', color: 'brand.lightred' }}
              _active={{
                opacity: '50%',
              }}
              onClick={() => navigate('/signup')}
            >
              List your property
            </Button>
          </Grid>
          <Grid
            gridGap={'16px'}
            padding={'16px'}
            gridTemplateColumns={'1fr 1fr'}
          >
            <Button
              color="brand.lightred"
              bg={'white'}
              width={'88px'}
              padding={'9px 11px'}
              _hover={{
                opacity: '80%',
              }}
              _active={{
                opacity: '50%',
              }}
              onClick={() => navigate('/signup')}
            >
              Register
            </Button>
            <Button
              color="brand.lightred"
              bg={'white'}
              width={'88px'}
              padding={'9px 11px'}
              _hover={{
                opacity: '80%',
              }}
              _active={{
                opacity: '50%',
              }}
              onClick={() => navigate('/signin-screen')}
            >
              Sign in
            </Button>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
