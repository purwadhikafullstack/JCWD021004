import {
  Box,
  Button,
  Text,
  Center,
  Stack,
  VStack,
  Heading,
  Image,
} from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../assets/images/signin/Image1.png';

function SigninScreen() {
  const navigate = useNavigate();

  const handleChange1 = () => {
    navigate('/signin-user');
  };

  const handleChange2 = () => {
    navigate('/signin-tenant');
  };

  return (
    <>
      <Center height={'85vh'} marginTop={'40px'}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}
          margin={'50'}
          padding={'35px'}
          boxShadow={'base'}
          width={'500px'}
        >
          <Box>
            <VStack>
              <Heading color={'black'} fontSize={'30px'}>
                {' '}
                Welcome to Relaxin.com!
              </Heading>
              <Text color={'black'} fontSize={'14px'}>
                {' '}
                Select login as the user or tenant first to continue.{' '}
              </Text>
            </VStack>
          </Box>
          <Box marginTop={'70px'}>
            <Image src={Image1} />
          </Box>
          <Box width={'350px'} marginTop={'10%'}>
            <Button
              bg="#1A72DD"
              color={'white'}
              width={'100%'}
              borderRadius={'10px'}
              height={'50px'}
              onClick={handleChange1}
            >
              {' '}
              Log in as User{' '}
            </Button>
          </Box>
          <Text fontSize={'14px'} color={'black'}>
            {' '}
            Or{' '}
          </Text>
          <Box width={'350px'}>
            <Button
              bg="#1A72DD"
              color={'white'}
              width={'100%'}
              borderRadius={'10px'}
              height={'50px'}
              onClick={handleChange2}
            >
              {' '}
              Log in as Tenant{' '}
            </Button>
          </Box>

          <Box position="relative" margin={'27px 0'}>
            <Text color={'black'}>All rights reserved.</Text>
            <Text color={'black'}>Copyright (2023-2024) - Relaxin.com™ </Text>
          </Box>
        </Stack>
      </Center>
      <ToastContainer />
    </>
  );
}

export default SigninScreen;
