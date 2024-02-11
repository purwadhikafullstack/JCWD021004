import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  MenuDivider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  VStack,
  Avatar,
} from '@chakra-ui/react';
import { FaDollarSign, FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../redux/reducer/authReducer';
import { useSelector, useDispatch } from 'react-redux';
import NavbarData from './components/navbarData';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);
  const user = useSelector((state) => state.AuthReducer.users);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (user.role_id === 1) {
      navigate('/signup-tenant');
    } else if (user.role_id === 2) {
      navigate('/property-management');
    } else {
      toast.info('Silahkan login atau register terlebih dahulu');
      console.error('Invalid role_id:', user.role_id);
    }
  };

  return (
    <Box>
      <Flex
        className="navbar-top"
        padding={'6px'}
        bg={'#013B94'}
        alignItems={'center'}
        height={'82px'}
        justifyContent={'space-between'}
      >
        <Grid className="Navbar-left" padding={'16px'} alignItems={'center'}>
          <Text
            paddingLeft={'20px'}
            fontSize={'25px'}
            fontWeight={'700'}
            color={'white'}
            lineHeight={'20px'}
          >
            <Link to={'/'}>Relaxin.com</Link>
          </Text>
        </Grid>
        <Flex
          className="Navbar-right"
          padding={'16px'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Flex align="center" justify="center">
            <Flex align="center" marginRight={5}>
              <FaDollarSign size={20} color="white" />
              <Text color="white">IDR</Text>
            </Flex>

            <Flex align="center" marginRight={5}>
              <FaGlobe size={20} color="white" />
            </Flex>

            <FaQuestionCircle size={20} color="white" />
          </Flex>
          <Grid padding={'16px'} borderRight={'1px solid #D3D0D0'}>
            <Button
              color="white"
              bg={'#013B94'}
              padding={'9px 11px'}
              _hover={{ bg: 'white', color: 'brand.lightred' }}
              _active={{
                opacity: '50%',
              }}
              onClick={handleClick}
            >
              {user.role_id === 2 ? 'Manage Properties' : 'List your property'}
            </Button>
          </Grid>

          {isLogin ? (
            <>
              <Box
                w={user.role_id === 1 ? '200px' : '150px'}
                h={'60px'}
                ml={'20px'}
                bg={'#013B94'}
              >
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
                        <MenuItem>
                          <Button
                            width={'full'}
                            bg={'black'}
                            size="sm"
                            fontWeight={'bold'}
                            color={'white'}
                            _hover={{ color: 'red', bg: 'none' }}
                            onClick={() => dispatch(logoutSuccess())}
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
            </>
          )}
        </Flex>
      </Flex>
      <NavbarData />
      <ToastContainer />
    </Box>
  );
}

export default Navbar;
