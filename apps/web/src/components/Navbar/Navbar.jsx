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
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaLandmark,
  FaTaxi,
  FaBed,
  FaDollarSign,
  FaGlobe,
  FaQuestionCircle,
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logoutSuccess } from '../../redux/reducer/authReducer';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);
  const user = useSelector((state) => state.AuthReducer.users);
  const dispatch = useDispatch();

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);

    switch (buttonId) {
      case 'stays':
        navigate('');
        break;
      case 'flights':
        navigate('');
        break;
      case 'flight+hotel':
        navigate('');
        break;
      case 'carrentals':
        navigate('');
        break;
      case 'attractions':
        navigate('');
        break;
      case 'airporttaxis':
        navigate('');
        break;
      // Add cases for other buttons
      default:
        navigate('/');
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
              onClick={() => navigate('/signup-tenant')}
            >
              List your property
            </Button>
          </Grid>

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
      <Flex id="navbar-data" bg={'#013B94'} flexDirection={'row'}>
        <Button
          color="white"
          bg={activeButton === 'stays' ? 'rgba(255, 255, 255, 0.1)' : '#013B94'}
          width={'93px'}
          padding={'9px 11px'}
          margin={'0 10px 10px 100px'}
          transition="none"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px !important',
          }}
          style={{
            border: activeButton === 'stays' ? '1px solid #D3D0D0' : 'none',
            borderRadius: activeButton === 'stays' ? '20px' : '0',
          }}
          onClick={() => handleButtonClick('stays')}
        >
          <FaBed size={20} style={{ marginRight: '10px' }} /> Stays
        </Button>
        <Button
          color="white"
          bg={
            activeButton === 'flights' ? 'rgba(255, 255, 255, 0.1)' : '#013B94'
          }
          width={'100px'}
          padding={'9px 11px'}
          margin={'0 10px 10px 10px'}
          transition="none"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px !important',
          }}
          style={{
            border: activeButton === 'flights' ? '1px solid #D3D0D0' : 'none',
            borderRadius: activeButton === 'flights' ? '20px' : '0',
          }}
          onClick={() => handleButtonClick('flights')}
        >
          <FaPlane size={20} style={{ marginRight: '10px' }} />
          Flights
        </Button>
        <Button
          color="white"
          bg={
            activeButton === 'flight+hotel'
              ? 'rgba(255, 255, 255, 0.1)'
              : '#013B94'
          }
          width={'153px'}
          padding={'9px 11px'}
          margin={'0 10px 10px 10px'}
          transition="none"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px !important',
          }}
          style={{
            border:
              activeButton === 'flight+hotel' ? '1px solid #D3D0D0' : 'none',
            borderRadius: activeButton === 'flight+hotel' ? '20px' : '0',
          }}
          onClick={() => handleButtonClick('flight+hotel')}
        >
          {' '}
          <FaHotel
            size={20}
            style={{ marginLeft: '5px', marginRight: '10px' }}
          />
          Flight + Hotel
        </Button>
        <Button
          color="white"
          bg={
            activeButton === 'carrentals'
              ? 'rgba(255, 255, 255, 0.1)'
              : '#013B94'
          }
          width={'133px'}
          padding={'9px 11px'}
          margin={'0 10px 10px 10px'}
          transition="none"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px !important',
          }}
          style={{
            border:
              activeButton === 'carrentals' ? '1px solid #D3D0D0' : 'none',
            borderRadius: activeButton === 'carrentals' ? '20px' : '0',
          }}
          onClick={() => handleButtonClick('carrentals')}
        >
          <FaCar size={20} style={{ marginRight: '10px' }} />
          Car rentals
        </Button>
        <Button
          color="white"
          bg={
            activeButton === 'attractions'
              ? 'rgba(255, 255, 255, 0.1)'
              : '#013B94'
          }
          width={'133px'}
          padding={'9px 11px'}
          margin={'0 10px 10px 10px'}
          transition="none"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px !important',
          }}
          style={{
            border:
              activeButton === 'attractions' ? '1px solid #D3D0D0' : 'none',
            borderRadius: activeButton === 'attractions' ? '20px' : '0',
          }}
          onClick={() => handleButtonClick('attractions')}
        >
          <FaLandmark size={20} style={{ marginRight: '10px' }} />
          Attractions
        </Button>
        <Button
          color="white"
          bg={
            activeButton === 'airporttaxis'
              ? 'rgba(255, 255, 255, 0.1)'
              : '#013B94'
          }
          width={'145px'}
          padding={'9px 11px'}
          margin={'0 10px 10px 10px'}
          transition="none"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px !important',
          }}
          style={{
            border:
              activeButton === 'airporttaxis' ? '1px solid #D3D0D0' : 'none',
            borderRadius: activeButton === 'airporttaxis' ? '20px' : '0',
          }}
          onClick={() => handleButtonClick('airporttaxis')}
        >
          <FaTaxi size={20} style={{ marginRight: '10px' }} />
          Airport Taxis
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
