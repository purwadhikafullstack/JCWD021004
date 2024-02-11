import {
  Button,
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
import { FaTrash, FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';
import { FiSearch, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../../redux/reducer/authReducer';
import { useState, useEffect } from 'react';
import { fetchUserProperties } from './services/fetchUserProperties';
import GridItem1 from './components/grid-item-1';

function PropertyManagement() {
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);
  const user = useSelector((state) => state.AuthReducer.users);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin && user && user.role_id === 2) {
      const fetchProperties = async () => {
        try {
          const fetchedProperties = await fetchUserProperties(user.user_id);
          setProperties(fetchedProperties);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProperties();
    }
  }, [isLogin, user]);

  const categories = [
    { id: 1, name: 'Apartemen' },
    { id: 2, name: 'Hotel' },
    { id: 3, name: 'Resort' },
    { id: 4, name: 'Villa' },
    // Tambahkan data kategori lainnya sesuai kebutuhan
  ];

  const categoryMap = {};
  categories.forEach((category) => {
    categoryMap[category.id] = category.name;
  });

  const handleClick = () => {
    navigate('/');
  };

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
        <Text
          color="white"
          fontSize="2xl"
          fontWeight="bold"
          onClick={handleClick}
        >
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
      <Box padding={'20'} pt={'5'} bg={'#013B94'}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          p={'3'}
          minH="100vh"
          bg="white"
          borderRadius={'20px'}
          border="1px solid #000"
        >
          <GridItem1 />

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
                  <Box w={'130px'} h={'60px'} ml={'5'} bg={'white'}>
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
                                <Text
                                  fontSize="lg"
                                  fontWeight={'bold'}
                                  color={'black'}
                                >
                                  {user.username}
                                </Text>

                                {user.role_id == 1 ? (
                                  <Text fontSize="sm" color="black">
                                    Ordinary user
                                  </Text>
                                ) : (
                                  <Text fontSize="sm" color="black">
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
                    {properties.map((property) => (
                      <Tr key={property.property_id}>
                        <Td>
                          <img
                            alt="Property image"
                            height="64"
                            // src={property.imageUrl}
                            width="64"
                          />
                        </Td>
                        <Td fontWeight="medium">{property.name}</Td>
                        <Td>{categoryMap[property.category_id]}</Td>
                        <Td
                          style={{
                            maxWidth: '200px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {property.description}
                        </Td>
                        <Td>
                          <ul>
                            {/* {property.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))} */}
                          </ul>
                        </Td>
                        <Td
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <Button mr={2} size="sm" variant="outline">
                            <LuPencil boxSize={4} />
                          </Button>
                          <Box ml={2}>
                            <Button size="sm" variant="outline">
                              <FaTrash boxSize={4} />
                            </Button>
                          </Box>
                        </Td>
                      </Tr>
                    ))}
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
