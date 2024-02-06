import { useState } from 'react';
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaLandmark,
  FaTaxi,
  FaBed,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

function NavbarData() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('stays');

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
        bg={activeButton === 'flights' ? 'rgba(255, 255, 255, 0.1)' : '#013B94'}
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
        <FaHotel size={20} style={{ marginLeft: '5px', marginRight: '10px' }} />
        Flight + Hotel
      </Button>
      <Button
        color="white"
        bg={
          activeButton === 'carrentals' ? 'rgba(255, 255, 255, 0.1)' : '#013B94'
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
          border: activeButton === 'carrentals' ? '1px solid #D3D0D0' : 'none',
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
          border: activeButton === 'attractions' ? '1px solid #D3D0D0' : 'none',
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
  );
}

export default NavbarData;
