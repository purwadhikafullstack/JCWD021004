import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  Box,
  VStack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { useSelector } from 'react-redux';

function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const { user } = useSelector((state) => state.AuthReducer.users);

  return (
    <>
      <Navbar />
      <Box>
        <Box id="welcoming-user" bg={'#013B94'} height={'30vh'}>
          <Box
            marginX={'70px'}
            paddingTop={'70px'}
            paddingLeft={'40px'}
            height={'30vh'}
          >
            <VStack align={'start'}>
              <Text
                color={'white'}
                fontWeight={'700'}
                fontSize={'48px'}
                mb={'25px'}
              >
                Where to next, Nabhan Sando?
              </Text>
              <Text color={'white'} fontSize={'24px'}>
                Find exclusive Genius rewards in every corner of the world!{' '}
              </Text>
            </VStack>
          </Box>
        </Box>
        <Box id="search-hotels" mt={'-70px'}>
          <Box w="full" maxW="1100px" mx="auto" p={[4, 6, 8]}>
            <Flex
              gridGap={1.5}
              bg={'#FFB700'}
              height={'70px'}
              justifyContent="center"
              alignItems="center"
              padding={1.5}
              borderRadius={'5px'}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  bg={'white'}
                  color={'black'}
                  height={'55px'}
                  width={'330px'}
                >
                  Select City
                </MenuButton>
                <MenuList w="80" color={'black'}>
                  <MenuItem>New York</MenuItem>
                  <MenuItem>Los Angeles</MenuItem>
                  <MenuItem>Chicago</MenuItem>
                  <MenuItem>Houston</MenuItem>
                  <MenuItem>Phoenix</MenuItem>
                  <MenuItem>San Diego</MenuItem>
                </MenuList>
              </Menu>
              <Popover>
                <PopoverTrigger>
                  <Button
                    className="w-full justify-start text-left font-normal"
                    bg={'white'}
                    color={'black'}
                    height={'55px'}
                    width={'330px'}
                    fontSize={'15px'}
                  >
                    <CalendarIcon
                      mr={1}
                      h={4}
                      w={4}
                      transform="-translate-x-1"
                    />
                    Check in Date - Check out Date
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" p={0}>
                  {/* Assuming Calendar is a Chakra UI component or you have your own Calendar component */}
                  <HStack>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline // Jika ingin menampilkan kalender secara langsung
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline // Jika ingin menampilkan kalender secara langsung
                    />
                  </HStack>
                </PopoverContent>
              </Popover>
              <Menu>
                <MenuButton
                  as={Button}
                  bg={'white'}
                  color={'black'}
                  height={'55px'}
                  width={'330px'}
                >
                  Number of People
                </MenuButton>
                <MenuList w="80" color={'black'}>
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                  <MenuItem>4</MenuItem>
                  <MenuItem>5</MenuItem>
                  <MenuItem>6</MenuItem>
                </MenuList>
              </Menu>
              <Button
                bg={'brand.lightred'}
                _hover={{ bg: '#013B94' }}
                color={'white'}
                height={'55px'}
              >
                Search
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box id="body-constraint"></Box>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
