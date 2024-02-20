import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';

function NavbarDataProperty({
  handleOverviewClick,
  handleAboutClick,
  handleFacilitiesClick,
  handlePriceClick,
  handleGuestReviewsClick,
}) {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('1');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);

    switch (buttonId) {
      case '1':
        handleOverviewClick();
        break;
      case '2':
        handleAboutClick();
        break;
      case '3':
        handleFacilitiesClick();
        break;
      case '4':
        handlePriceClick();
        break;
      case '5':
        handleGuestReviewsClick();
        break;
      default:
        navigate('/');
    }
  };

  return (
    <Flex
      id="navbar-data"
      flexDirection={'row'}
      justifyContent="flex-start"
      alignItems="flex-start"
      mb={'10px'}
    >
      <ButtonGroup spacing={2}>
        <Button
          variant="ghost"
          bg={activeButton === '1' ? '#ffdd00' : 'white'}
          transition="none"
          _hover={{
            bg: activeButton === '1' ? '#ffdd00' : 'gray.100',
            borderRadius: activeButton === '1' ? '10px' : '10px !important',
          }}
          style={{
            borderRadius: activeButton === '1' ? '10px' : '0',
            fontWeight: activeButton === '1' ? 'bold' : '',
          }}
          onClick={() => handleButtonClick('1')}
        >
          Overview
        </Button>
        <Button
          variant="ghost"
          bg={activeButton === '2' ? '#ffdd00' : 'white'}
          transition="none"
          _hover={{
            bg: activeButton === '2' ? '#ffdd00' : 'gray.100',
            borderRadius: activeButton === '2' ? '10px' : '10px !important',
          }}
          style={{
            borderRadius: activeButton === '2' ? '10px' : '0',
            fontWeight: activeButton === '2' ? 'bold' : '',
          }}
          onClick={() => handleButtonClick('2')}
        >
          About
        </Button>
        <Button
          variant="ghost"
          bg={activeButton === '3' ? '#ffdd00' : 'white'}
          transition="none"
          _hover={{
            bg: activeButton === '3' ? '#ffdd00' : 'gray.100',
            borderRadius: activeButton === '3' ? '10px' : '10px !important',
          }}
          style={{
            borderRadius: activeButton === '3' ? '10px' : '0',
            fontWeight: activeButton === '3' ? 'bold' : '',
          }}
          onClick={() => handleButtonClick('3')}
        >
          Facilities
        </Button>
        <Button
          variant="ghost"
          bg={activeButton === '4' ? '#ffdd00' : 'white'}
          transition="none"
          _hover={{
            bg: activeButton === '4' ? '#ffdd00' : 'gray.100',
            borderRadius: activeButton === '4' ? '10px' : '10px !important',
          }}
          style={{
            borderRadius: activeButton === '4' ? '10px' : '0',
            fontWeight: activeButton === '4' ? 'bold' : '',
          }}
          onClick={() => handleButtonClick('4')}
        >
          Info & prices
        </Button>
        <Button
          variant="ghost"
          bg={activeButton === '5' ? '#ffdd00' : 'white'}
          transition="none"
          _hover={{
            bg: activeButton === '5' ? '#ffdd00' : 'gray.100',
            borderRadius: activeButton === '5' ? '10px' : '10px !important',
          }}
          style={{
            borderRadius: activeButton === '5' ? '10px' : '0',
            fontWeight: activeButton === '5' ? 'bold' : '',
          }}
          onClick={() => handleButtonClick('5')}
        >
          Guest reviews (365)
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default NavbarDataProperty;
