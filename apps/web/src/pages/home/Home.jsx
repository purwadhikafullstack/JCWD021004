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
  Icon,
  Stack,
  Checkbox,
  Grid,
  Heading,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCity } from 'react-icons/fa';
import airport from '../../assets/images/home/airport.jpg';
import vacation from '../../assets/images/home/vacation.jpg';
import ubud from '../../assets/images/home/ubud.jpg';
import canggu from '../../assets/images/home/canggu.jpg';
import jakarta from '../../assets/images/home/jakarta.jpg';
import uluwatu from '../../assets/images/home/uluwatu.jpg';
import sanur from '../../assets/images/home/sanur.jpg';
// import { useSelector } from 'react-redux';

function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const { user } = useSelector((state) => state.AuthReducer.users);

  const updateButtonText = () => {
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    } else if (startDate) {
      return `Check in: ${startDate.toLocaleDateString()}`;
    } else {
      return 'Check in Date - Check out Date';
    }
  };

  return (
    <>
      <Navbar />
      <Box height={'200vh'}>
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
                  <HStack justifyContent="center">
                    <Icon as={FaCity} boxSize={4} />
                    <span>Select City</span>
                  </HStack>
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
                    {updateButtonText()}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" p={0}>
                  <HStack>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
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
            <Stack spacing={5} direction="row" mt={'15px'}>
              <Checkbox
                colorScheme="blue"
                defaultChecked
                fontSize="sm"
                color={'black'}
              >
                I’m looking for an entire home or apartment
              </Checkbox>
              <Checkbox
                colorScheme="blue"
                defaultChecked
                fontSize="sm"
                color={'black'}
              >
                I’m looking for flights
              </Checkbox>
            </Stack>
          </Box>
        </Box>

        <Box id="body-constraint" maxW="1250px" mx="auto" mt={'50px'}>
          <Box>
            <VStack align={'start'}>
              <Text
                color={'black'}
                fontWeight={'800'}
                fontSize={'28px'}
                mb={'7px'}
              >
                Offers
              </Text>
              <Text color={'black'} fontSize={'16px'}>
                Promotions, deals, and special offers for you
              </Text>
            </VStack>

            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={6}
              mt={6}
            >
              <Box
                p={6}
                borderWidth="1px"
                rounded="lg"
                backgroundImage={vacation}
                bgSize={'cover'}
                height={'250px'}
                backgroundPosition={'center'}
              >
                <VStack align={'start'}>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="bold"
                    mb={2}
                    color={'white'}
                  >
                    Take your longest vacation yet
                  </Heading>

                  <Button bg="black" color="white">
                    Find a stay
                  </Button>
                </VStack>
              </Box>
              <Box
                p={6}
                borderWidth="1px"
                rounded="lg"
                backgroundImage={airport}
                bgSize={'cover'}
                backgroundPosition={'center'}
              >
                <VStack align={'start'}>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="bold"
                    mb={2}
                    color={'white'}
                  >
                    Fly away to your dream vacation
                  </Heading>
                  <Button bg="black" color="white">
                    Search for flights
                  </Button>
                </VStack>
              </Box>
            </Grid>

            <VStack align={'start'} mt={'60px'}>
              <Heading as="h2" fontSize="3xl" fontWeight="bold" color={'black'}>
                Trending destinations
              </Heading>
              <Text fontSize="lg" color="black">
                Most popular choices for travelers from Indonesia
              </Text>
            </VStack>

            <Grid
              mt={8}
              templateColumns={{
                base: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
              }}
              gap={6}
            >
              <Box
                backgroundImage={ubud}
                bgSize={'cover'}
                backgroundPosition={'center'}
                w="full"
                h="300px"
                rounded="lg"
                style={{
                  aspectRatio: '250/200',
                }}
              >
                <VStack align={'start'} mt={2} ml={'10px'}>
                  <Heading
                    fontSize="26px"
                    fontWeight={'700'}
                    color={'white'}
                    borderRadius={'5px'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Ubud 🇮🇩
                  </Heading>
                </VStack>
              </Box>
              <Box
                backgroundImage={sanur}
                bgSize={'cover'}
                backgroundPosition={'center'}
                w="full"
                h="300px"
                rounded="lg"
                style={{
                  aspectRatio: '250/200',
                }}
              >
                <VStack align={'start'} mt={2} ml={'10px'}>
                  <Heading
                    fontSize="26px"
                    fontWeight={'700'}
                    color={'white'}
                    borderRadius={'5px'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Sanur 🇮🇩
                  </Heading>
                </VStack>
              </Box>
            </Grid>
            <Grid
              mt={8}
              templateColumns={{
                base: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap={6}
            >
              <Box
                backgroundImage={uluwatu}
                bgSize={'cover'}
                backgroundPosition={'center'}
                w="full"
                h="auto"
                rounded="lg"
                style={{
                  aspectRatio: '250/200',
                }}
              >
                <VStack align={'start'} mt={2} ml={'10px'}>
                  <Heading
                    fontSize="26px"
                    fontWeight={'700'}
                    color={'white'}
                    borderRadius={'5px'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Uluwatu 🇮🇩
                  </Heading>
                </VStack>
              </Box>
              <Box
                backgroundImage={jakarta}
                bgSize={'cover'}
                backgroundPosition={'center'}
                w="full"
                h="auto"
                rounded="lg"
                style={{
                  aspectRatio: '250/200',
                }}
              >
                <VStack align={'start'} mt={2} ml={'10px'}>
                  <Heading
                    fontSize="26px"
                    fontWeight={'700'}
                    color={'white'}
                    borderRadius={'5px'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Jakarta 🇮🇩
                  </Heading>
                </VStack>
              </Box>
              <Box
                backgroundImage={canggu}
                bgSize={'cover'}
                backgroundPosition={'center'}
                w="full"
                h="auto"
                rounded="lg"
                style={{
                  aspectRatio: '250/200',
                }}
              >
                <VStack align={'start'} mt={2} ml={'10px'}>
                  <Heading
                    fontSize="26px"
                    fontWeight={'700'}
                    color={'white'}
                    borderRadius={'5px'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Canggu 🇮🇩
                  </Heading>
                </VStack>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
