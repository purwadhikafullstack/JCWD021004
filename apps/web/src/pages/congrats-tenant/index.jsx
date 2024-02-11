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

function CongratsTenant() {
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
              <Text fontSize="sm">Do you need help?</Text>

              <Button ml={'5'} color={'black'} bg={'white'}>
                Help
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex height="50vh" align="center" justify="center" mt={'30px'}>
          <HStack spacing="8">
            <Box>
              <Box height="30vh" width="900px">
                <VStack align="start">
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    marginBottom="25px"
                    textAlign={'left'}
                  >
                    Congratulations!
                  </Text>
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    marginBottom="25px"
                    textAlign={'left'}
                  >
                    your partner account has been successfully created.
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
                    Thank you
                  </Text>
                  <Text mt="6" fontSize="lg" align="start">
                    Silahkan login kembali, menggunakan akun mitra anda.
                  </Text>
                </VStack>
              </Box>
            </Box>
            <Box bg="white" color="#003580" p="8" rounded="lg">
              <Heading fontSize={'28px'} color={'black'}>
                Login
              </Heading>
              <Divider borderWidth="1px" my={'5'} />
              <Text mt="4" fontSize="sm" my={'3'}>
                Already started?
              </Text>
              <Button
                mt="2"
                bg="black"
                color={'white'}
                _hover={{ bg: '#003580', color: 'white' }}
                onClick={() => navigate('/signin-screen')}
              >
                Login
              </Button>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default CongratsTenant;
