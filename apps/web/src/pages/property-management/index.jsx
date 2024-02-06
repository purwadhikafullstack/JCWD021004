import {
  Button,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  VStack,
  Avatar,
} from '@chakra-ui/react';
import {
  FaTrash,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaQuestionCircle,
} from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';
import { FaRegBell } from 'react-icons/fa';
import {
  FiHome,
  FiShoppingCart,
  FiSearch,
  FiPackage,
  FiLogOut,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../../redux/reducer/authReducer';

function PropertyManagement() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);
  const user = useSelector((state) => state.AuthReducer.users);
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        className="navbar-top"
        padding={'10'}
        bg={'#013B94'}
        alignItems={'center'}
        height={'82px'}
        justifyContent={'space-between'}
      >
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Relaxin.com
        </Text>
        <Flex alignItems="center">
          <Box ml="auto">
            <FaGlobe size={20} color="white" />
          </Box>
          <Box ml="4">
            <FaQuestionCircle size={20} color="white" />
          </Box>
        </Flex>
      </Flex>
      <Box padding={'20'} pt={'4'} bg={'#013B94'}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          p={'3'}
          minH="100vh"
          bg="white"
          borderRadius={'20px'}
          border="1px solid #000"
        >
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
                <Flex
                  direction="column"
                  fontSize="16px"
                  fontWeight="bold"
                  p={2}
                >
                  <Text
                    as="a"
                    display="flex"
                    alignItems="center"
                    p={2}
                    h={'50px'}
                    rounded="lg"
                    color={'gray.500'}
                    transition="all"
                    _hover={{ color: 'black', bg: 'gray.100' }}
                    mb={2}
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
                    _hover={{ color: 'black', bg: 'gray.100' }}
                    mb={2}
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
                    _hover={{ color: 'black', bg: 'gray.100' }}
                    mb={2}
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
                    _hover={{ color: 'black', bg: 'gray.100' }}
                    mb={2}
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
                    _hover={{ color: 'black', bg: 'gray.100' }}
                    mb={2}
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
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color={'black'}
                    mb={'3'}
                  >
                    Upgrade to Pro
                  </Text>
                  <Text color="gray.600">
                    Unlock all features and get unlimited access to our support
                    team
                  </Text>
                  <Button
                    mt={3}
                    w="full"
                    size="sm"
                    bg={'black'}
                    color={'white'}
                  >
                    Upgrade
                  </Button>
                </Box>
              </Box>
            </Flex>
          </GridItem>

          <GridItem colSpan={2} p={4}>
            {/* Header */}
            <Flex
              align="center"
              borderBottom="1px"
              borderColor="gray.200"
              pb={4}
            >
              {/* Search Input */}
              <Box
                flex="1"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <form>
                  <Input
                    style={{
                      width: '100%',
                      height: '40px',
                      backgroundColor: 'white',
                      boxShadow: 'none',
                      appearance: 'none',
                      paddingLeft: '2.5rem',
                      color: 'black',
                    }}
                    placeholder="Search properties..."
                    type="search"
                  />
                  <FiSearch
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '0.75rem',
                      transform: 'translateY(-50%)',
                      color: 'black',
                    }}
                  />
                </form>
              </Box>
              {/* User Menu */}
              {isLogin ? (
                <>
                  <Box w={'200px'} h={'60px'} ml={'20px'} bg={'#013B94'}>
                    <HStack spacing={{ base: '0', md: '6' }}>
                      <Flex alignItems={'center'}>
                        <Menu>
                          <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}
                          >
                            <HStack>
                              <Avatar size={'md'} src={user.avatar} />
                              <VStack
                                display={{ base: 'none', md: 'flex' }}
                                alignItems="flex-start"
                                spacing="1px"
                                ml="2"
                              >
                                <Text fontSize="lg" fontWeight={'bold'}>
                                  {user.username}
                                </Text>

                                {user.role_id == 1 ? (
                                  <Text fontSize="sm" color="white">
                                    Ordinary user
                                  </Text>
                                ) : (
                                  <Text fontSize="sm" color="white">
                                    Tenant
                                  </Text>
                                )}
                              </VStack>
                            </HStack>
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              fontSize={'16px'}
                              fontWeight={'semibold'}
                              color={'black'}
                              onClick={() => navigate('/profile')}
                            >
                              Profile
                            </MenuItem>
                            <MenuItem
                              fontSize={'16px'}
                              fontWeight={'semibold'}
                              color={'black'}
                            >
                              Settings
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem
                              onClick={() =>
                                dispatch(logoutSuccess(), navigate('/'))
                              }
                            >
                              <Button
                                width={'full'}
                                bg={'black'}
                                size="sm"
                                fontWeight={'bold'}
                                color={'white'}
                                _hover={{ color: 'red', bg: 'none' }}
                              >
                                Sign out
                                <FiLogOut
                                  size={15}
                                  color="red"
                                  style={{ marginLeft: '10px' }}
                                />
                              </Button>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Flex>
                    </HStack>
                  </Box>
                </>
              ) : (
                <>
                  <Box h={'60px'} ml={'20px'}>
                    <HStack spacing={{ base: '0', md: '6' }}>
                      <Flex alignItems={'center'}>
                        <Menu>
                          <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}
                          >
                            <HStack>
                              <Avatar size={'md'} />
                            </HStack>
                          </MenuButton>
                        </Menu>
                      </Flex>
                    </HStack>
                  </Box>
                </>
              )}
            </Flex>

            <Box flex="1" p={4}>
              <Flex align="center" justify="space-between" mb={'5'}>
                <Box
                  bg={'black'}
                  h={'35px'}
                  w={'120px'}
                  borderRadius={'5px'}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontWeight="bold" fontSize="18px" color={'white'}>
                    Properties
                  </Text>
                </Box>
                <Button ml="auto" size="sm" bg={'black'} color={'white'}>
                  Add property
                </Button>
              </Flex>
              <Box border="1px" boxShadow="md" rounded="lg" overflowX="auto">
                <Table>
                  <Thead>
                    <Tr>
                      <Th w="100px">Image</Th>
                      <Th>Name</Th>
                      <Th>Category</Th>
                      <Th>Description</Th>
                      <Th>Rooms</Th>
                      <Th textAlign="right">Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody color={'black'}>
                    <Tr>
                      <Td>
                        <img
                          alt="Property image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/placeholder.svg"
                          width="64"
                        />
                      </Td>
                      <Td fontWeight="medium">Acme Apartments</Td>
                      <Td>Apartment</Td>
                      <Td>Luxury apartments in the heart of the city.</Td>
                      <Td>
                        <ul>
                          <li>Bedroom</li>
                          <li>Bathroom</li>
                          <li>Living Room</li>
                        </ul>
                      </Td>
                      <Td textAlign="right">
                        <Button mr={2} size="sm" variant="outline">
                          <LuPencil boxSize={4} />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="sm" variant="outline">
                          <FaTrash boxSize={4} />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              <Box mt={'10'}>
                <Box
                  bg={'black'}
                  h={'35px'}
                  w={'150px'}
                  borderRadius={'5px'}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontWeight="bold" fontSize="18px" color={'white'}>
                    Edit Property
                  </Text>
                </Box>
                <Box
                  mt={'5'}
                  border="1px"
                  boxShadow="md"
                  rounded="lg"
                  overflowX="auto"
                >
                  <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                      <Tab color={'black'}>Image</Tab>
                      <Tab color={'black'}>Name</Tab>
                      <Tab color={'black'}>Category</Tab>
                      <Tab color={'black'}>Description</Tab>
                      <Tab color={'black'}>Room</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <p>one!</p>
                      </TabPanel>
                      <TabPanel>
                        <p>two!</p>
                      </TabPanel>
                      <TabPanel>
                        <p>one!</p>
                      </TabPanel>
                      <TabPanel>
                        <p>one!</p>
                      </TabPanel>
                      <TabPanel>
                        <p>one!</p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default PropertyManagement;
