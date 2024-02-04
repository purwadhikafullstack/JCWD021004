import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  Box,
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
  Checkbox,
  Badge,
  VStack,
  Grid,
  Divider,
  Image,
} from '@chakra-ui/react';
import maps from '../../assets/images/home/Google-Images.jpeg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CalendarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCity } from 'react-icons/fa';
import propertiesData from './services/PropertiesData';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

function PropertyList() {
  // const { user } = useSelector((state) => state.AuthReducer.users);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
      <Box bg={'#013B94'} height={'40px'} />
      <Box height={'200vh'}>
        <Box id="search-hotels" mt={'-68px'}>
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
          </Box>
        </Box>

        <Box>
          <Box id="body-constraint" mt={'3px'}>
            <Box
              maxW="7xl"
              mx="auto"
              py="8"
              px={{ base: '4', sm: '6', lg: '8' }}
            >
              <Grid gridTemplateColumns="1fr 2fr" gap="4">
                <Box colSpan={{ base: '4', md: '1' }}>
                  <Box>
                    <Image
                      as="img"
                      alt="Map"
                      className="rounded-lg"
                      h="200"
                      src={maps}
                      style={{
                        aspectRatio: '300/200',
                        objectFit: 'cover',
                      }}
                      w="full"
                    />
                    <Button
                      mt="2"
                      w="full"
                      bg={'brand.lightred'}
                      color={'white'}
                      _hover={{ bg: '#013B94' }}
                    >
                      Show on map
                    </Button>
                    <VStack
                      mt="4"
                      align={'start'}
                      border="1px solid #ccc"
                      borderRadius="5px"
                      p="4"
                    >
                      <Box
                        fontSize="xl"
                        fontWeight="semibold"
                        color={'black'}
                        mb={'10px'}
                      >
                        Filter by:
                      </Box>
                      <Divider />
                      <VStack mt="2" align={'start'} mb={'10px'}>
                        <Box
                          fontSize="lg"
                          fontWeight="semibold"
                          color={'black'}
                        >
                          Popular Filters
                        </Box>
                        <VStack mt="2" color={'black'} align={'start'}>
                          <Checkbox id="spa">Spa</Checkbox>
                          <Checkbox id="toilet">Toilet</Checkbox>
                          <Checkbox id="4stars">4 stars</Checkbox>
                          <Checkbox id="vacationHomes">Vacation Homes</Checkbox>
                          <Checkbox id="poppiesLane1">Poppies Lane 1</Checkbox>
                          <Checkbox id="guesthouses">Guesthouses</Checkbox>
                          <Checkbox id="nakula">Nakula</Checkbox>
                          <Checkbox id="privateBathroom">
                            Private bathroom
                          </Checkbox>
                        </VStack>
                      </VStack>
                      <Divider />
                      <VStack mt="4" align={'start'}>
                        <Box
                          fontSize="lg"
                          fontWeight="semibold"
                          color={'black'}
                        >
                          Facilities
                        </Box>
                        <VStack mt="2" align={'start'} color={'black'}>
                          <Checkbox id="parking">Parking</Checkbox>
                          <Checkbox id="freeWifi">Free WiFi</Checkbox>
                          <Checkbox id="restaurant">Restaurant</Checkbox>
                          <Checkbox id="petFriendly">Pet friendly</Checkbox>
                        </VStack>
                      </VStack>
                    </VStack>
                  </Box>
                </Box>
                <Box colSpan={{ base: '4', md: '3' }}>
                  <Box
                    fontSize="22px"
                    fontWeight="bold"
                    color={'black'}
                    bg={'#FFB700'}
                    height={'30px'}
                    width={'320px'}
                    mb={'20px'}
                    textAlign={'start'}
                    display="flex"
                    alignItems="center"
                    pl="4"
                  >
                    Kuta: 321 properties found.
                  </Box>

                  <VStack align={'start'}>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<Icon as={ChevronDownIcon} />}
                        bg={'brand.lightred'}
                        _hover={{ bg: 'brand.lightred' }}
                        color={'white'}
                      >
                        Sort by: Our Top Picks
                      </MenuButton>
                      <MenuList>
                        <MenuItem value="topPicks" color={'black'}>
                          Our Top Picks
                        </MenuItem>
                        <MenuItem value="priceLowToHigh" color={'black'}>
                          Price (low to high)
                        </MenuItem>
                        <MenuItem value="priceHighToLow" color={'black'}>
                          Price (high to low)
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </VStack>

                  <Box mt="4">
                    {propertiesData.map((property, index) => (
                      <HStack
                        key={index}
                        className="properties"
                        border="1px solid #ccc"
                        borderRadius="5px"
                        p="4"
                        mb="4"
                        h="250px"
                        justify="space-between"
                      >
                        <Box
                          as="img"
                          h="170px" // Set the desired height
                          w="200px" // Set the desired width
                          alt={property.imageAlt}
                          src={property.imageUrl}
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                        <Box w="1/3" ml="4" textAlign="left">
                          <Box
                            fontSize="lg"
                            fontWeight="semibold"
                            color={'black'}
                          >
                            {property.name}
                          </Box>
                          <Box fontSize="sm" color="gray.600">
                            {property.location}
                          </Box>
                          <Box fontSize="sm" color={'black'}>
                            {property.description}
                          </Box>
                        </Box>
                        <VStack align="flex-end">
                          <Badge
                            colorScheme="teal"
                            borderRadius={'5px'}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                            mb="70px"
                          >
                            {property.rating}
                          </Badge>
                          <Button color={'black'} mt="70px">
                            Show prices
                          </Button>
                        </VStack>
                      </HStack>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default PropertyList;
