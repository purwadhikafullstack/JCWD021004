import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function SignupTenant() {
  const navigate = useNavigate();
  return (
    <>
      <Box bg="#003580" color="white" height={'80vh'}>
        <Flex
          justifyContent={'space-between'}
          alignItems="center"
          px="4"
          py="4"
          mx="40px"
        >
          <Heading as="h1" fontSize="2xl" fontWeight="bold">
            Relaxin.com
          </Heading>
          <Flex align="center">
            <Flex align="center">
              <Text fontSize="sm">Already a partner?</Text>
              <Button
                bg="#003580"
                color={'white'}
                _hover={{ bg: '#003580' }}
                onClick={() => navigate('/signin-tenant')}
              >
                Sign in
              </Button>
              <Button color={'black'} bg={'white'}>
                Help
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex height="50vh" align="center" justify="center" mt={'30px'}>
          <HStack spacing="8">
            <Box>
              <Box height="30vh" width="700px">
                <VStack align="start">
                  <Text fontSize="5xl" fontWeight="bold" marginBottom="25px">
                    List your property on
                  </Text>
                  <Text
                    fontSize="4xl"
                    padding={'2'}
                    fontWeight="bold"
                    marginBottom="40px"
                    bg={'#FFB700'}
                    h={'50px'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    rounded={'lg'}
                  >
                    Relaxin.com
                  </Text>
                  <Text mt="6" fontSize="lg" align="start">
                    Whether hosting is your side passion or full-time job,
                    register your vacation rental on Relaxin.com to reach
                    travelers worldwide
                  </Text>
                  <Text mt="6" fontSize="lg" colorScheme="#2A6F97">
                    Join 29,279,209 other listings already on Relaxin.com
                  </Text>
                </VStack>
              </Box>
            </Box>
            <Box bg="white" color="#003580" p="8" rounded="lg">
              <Heading fontSize={'28px'} color={'black'}>
                Get started now!
              </Heading>
              <Divider borderWidth="1px" my={'5'} />
              <Text mt="4" fontSize="sm" my={'3'}>
                Already started registration?
              </Text>
              <Button
                mt="2"
                bg="black"
                color={'white'}
                _hover={{ bg: '#003580', color: 'white' }}
                onClick={() => navigate('/signdata-tenant')}
              >
                Continue your registration
              </Button>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default SignupTenant;
