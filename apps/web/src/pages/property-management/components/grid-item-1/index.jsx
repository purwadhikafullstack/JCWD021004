import { Button, Badge, Box, Flex, GridItem, Text } from '@chakra-ui/react';
import { FaUsers, FaChartLine, FaRegBell } from 'react-icons/fa';
import { FiHome, FiShoppingCart, FiPackage } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function GridItem1() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('properties');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);

    switch (buttonId) {
      case 'home':
        navigate('/');
        break;
      case 'orders':
        navigate('');
        break;
      case 'properties':
        navigate('');
        break;
      case 'customers':
        navigate('');
        break;
      case 'analytics':
        navigate('');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <>
      <Box>
        <GridItem colSpan={1} bg="FAFBFB">
          <Flex direction="column" h="full" p={4}>
            <Flex
              align="center"
              borderBottom="1px"
              borderColor="gray.200"
              pb={5}
            >
              <Box
                bg={'#FFB700'}
                h={'50px'}
                w={'260px'}
                borderRadius={'5px'}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  as="a"
                  display="flex"
                  align="center"
                  fontSize={'22px'}
                  fontWeight="bold"
                  color={'black'}
                >
                  Management Property
                </Text>
              </Box>
              <Button ml="auto" size="sm" bg={'black'} color={'white'}>
                <FaRegBell boxSize={4} />
              </Button>
            </Flex>

            <Box>
              <Flex direction="column" fontSize="16px" fontWeight="bold" p={2}>
                <Text
                  as="a"
                  display="flex"
                  alignItems="center"
                  p={2}
                  h={'50px'}
                  rounded="lg"
                  color={'gray.500'}
                  transition="all"
                  bg={activeButton === 'home' ? 'gray.100' : ''}
                  _hover={{ color: 'black', bg: 'gray.100' }}
                  mb={2}
                  onClick={() => handleButtonClick('home')}
                >
                  <Box mr={'5'}>
                    <FiHome style={{ fontSize: '22px' }} />
                  </Box>
                  Home
                </Text>
                <Text
                  as="a"
                  display="flex"
                  alignItems="center"
                  p={2}
                  h={'50px'}
                  rounded="lg"
                  color={'gray.500'}
                  transition="all"
                  bg={activeButton === 'orders' ? 'gray.100' : ''}
                  _hover={{ color: 'black', bg: 'gray.100' }}
                  mb={2}
                  onClick={() => handleButtonClick('orders')}
                >
                  <Box mr={'5'}>
                    <FiShoppingCart style={{ fontSize: '22px' }} />
                  </Box>
                  Orders
                  <Badge
                    ml="auto"
                    flexShrink={0}
                    h={6}
                    w={6}
                    borderRadius="full"
                    bg={'black'}
                    color={'white'}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    6
                  </Badge>
                </Text>
                <Text
                  as="a"
                  display="flex"
                  alignItems="center"
                  p={2}
                  h={'50px'}
                  rounded="lg"
                  color={'gray.500'}
                  transition="all"
                  bg={activeButton === 'properties' ? 'gray.100' : ''}
                  _hover={{ color: 'black', bg: 'gray.100' }}
                  mb={2}
                  onClick={() => handleButtonClick('properties')}
                >
                  <Box mr={'5'}>
                    <FiPackage style={{ fontSize: '22px' }} />
                  </Box>
                  Properties
                </Text>
                <Text
                  as="a"
                  display="flex"
                  alignItems="center"
                  p={2}
                  h={'50px'}
                  rounded="lg"
                  color={'gray.500'}
                  transition="all"
                  bg={activeButton === 'customers' ? 'gray.100' : ''}
                  _hover={{ color: 'black', bg: 'gray.100' }}
                  mb={2}
                  onClick={() => handleButtonClick('customers')}
                >
                  <Box mr={'5'}>
                    <FaUsers style={{ fontSize: '22px' }} />
                  </Box>
                  Customers
                </Text>
                <Text
                  as="a"
                  display="flex"
                  alignItems="center"
                  p={2}
                  h={'50px'}
                  rounded="lg"
                  color={'gray.500'}
                  transition="all"
                  bg={activeButton === 'analytics' ? 'gray.100' : ''}
                  _hover={{ color: 'black', bg: 'gray.100' }}
                  mb={2}
                  onClick={() => handleButtonClick('analytics')}
                >
                  <Box mr={'5'}>
                    <FaChartLine style={{ fontSize: '22px' }} />
                  </Box>
                  Analytics
                </Text>
              </Flex>
            </Box>

            <Box mt={'3'}>
              {/* Upgrade to Pro Card */}
              <Box bg="white" shadow="md" rounded="lg" p={4}>
                <Text fontSize="xl" fontWeight="bold" color={'black'} mb={'3'}>
                  Upgrade to Pro
                </Text>
                <Text color="gray.600">
                  Unlock all features and get unlimited access to our support
                  team
                </Text>
                <Button mt={3} w="full" size="sm" bg={'black'} color={'white'}>
                  Upgrade
                </Button>
              </Box>
            </Box>
          </Flex>
        </GridItem>
      </Box>
    </>
  );
}

export default GridItem1;
