import {
  Badge,
  Box,
  ButtonGroup,
  Button,
  Grid,
  Image,
  Link,
  Text,
  VStack,
  Card,
  Divider,
  UnorderedList,
  ListItem,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import maps from '../../assets/images/home/Google-Images.jpeg';
import { CalendarIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

function PropertyDetail() {
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
      <Box maxW="6xl" h={'200vh'} mx="auto" my={8}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          mb={'10px'}
        >
          <ButtonGroup spacing={2}>
            <Button bg="#ffdd00" color="black">
              Overview
            </Button>
            <Button variant="ghost">Info & prices</Button>
            <Button variant="ghost">Facilities</Button>
            <Button variant="ghost">House rules</Button>
            <Button variant="ghost">Guest reviews (365)</Button>
          </ButtonGroup>
        </Box>

        <Divider mb={'20px'} />

        <Grid templateColumns={['1fr', '1fr', '2fr 1fr']} gap={8}>
          <VStack align="start">
            <Box mb={4}>
              <Badge variant="subtle">Airport shuttle</Badge>
            </Box>
            <Text fontSize="26px" fontWeight="bold" mb={2} color={'black'}>
              Suka Beach Inn
            </Text>
            <Text fontSize="sm" mb={'40px'} color={'black'}>
              Jl. Benesari, Gang Poppies II, 80361 Kuta, Indonesia –{' '}
              <Link color="blue.600" href="#">
                Great location - show map
              </Link>
            </Text>
            <Grid templateColumns={['1fr', '1fr', '1fr 1fr']} gap={4} mb={4}>
              {[1, 2].map((index) => (
                <Image
                  key={index}
                  alt={`Hotel image ${index}`}
                  borderRadius="lg"
                  height={200}
                  src="/placeholder.svg"
                  objectFit="cover"
                  width={300}
                />
              ))}
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
              {[1, 2, 3, 4].map((index) => (
                <Image
                  key={index}
                  alt={`Hotel image ${index}`}
                  borderRadius="lg"
                  height={100}
                  src="/placeholder.svg"
                  objectFit="cover"
                  width={150}
                />
              ))}
            </Grid>
            <Box
              mt={'40px'}
              border="1px solid #ddd"
              borderRadius="8px"
              padding="20px"
            >
              <Text
                fontSize="20px"
                fontWeight={'bold'}
                color={'black'}
                textAlign={'left'}
              >
                About
              </Text>
              <Divider m={'4'} />
              <Text fontSize="16px" color={'black'} textAlign="left">
                Kuta district in Kuta, 1312 feet from Kuta Beach, Suka Beach Inn
                offers accommodations with an outdoor pool. Free WiFi is
                provided and free private parking is available on site. For your
                convenience, a terrace or balcony are featured in certain rooms.
                Each room comes with a private bathroom equipped with a shower
                and a TV. Airport shuttle service is available with a surcharge.
              </Text>
            </Box>
          </VStack>
          <VStack align="start" pl={[0, 0, 8]} w={['100%', '100%', '1/3']}>
            <Box mb={4}>
              <Button width="full" bg={'black'} color={'white'}>
                Reserve
              </Button>
            </Box>
            <Box mb={4}>
              <Badge colorScheme="teal" borderRadius={'5px'}>
                We Price Match
              </Badge>
            </Box>
            <Box mb={4} w="full">
              <Card title="Property Highlights" padding={'12px'}>
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
                  bg={'black'}
                  color={'white'}
                  _hover={{ bg: '#013B94' }}
                >
                  Show on map
                </Button>
              </Card>
            </Box>
          </VStack>
          <Box
            fontSize="16px"
            mt={'7px'}
            color={'black'}
            textAlign="left"
            border="1px solid #ddd"
            borderRadius="8px"
            padding="20px"
          >
            <Text fontSize="20px" fontWeight={'bold'}>
              Facilities of {'nama property'}
              {/* // ambil nama dari property // */}
            </Text>
            <Divider m={'4'} />
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Box>
        </Grid>
        <Box
          maxW="1100px"
          mt={'40px'}
          p={[4, 6, 8]}
          border="1px solid #ddd"
          borderRadius="8px"
          padding="20px"
        >
          <Box>
            <Text
              fontSize="22px"
              fontWeight={'bold'}
              color={'black'}
              textAlign="left"
            >
              Choose your room
            </Text>
          </Box>
          <Divider my={'4'} />
          <Flex
            gridGap={1.5}
            bg={'black'}
            height={'70px'}
            justifyContent="center"
            alignItems="center"
            padding={1.5}
            borderRadius={'5px'}
          >
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
                  <CalendarIcon mr={1} h={4} w={4} transform="-translate-x-1" />
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
          <Box mt={'20px'}>
            <Tabs variant="soft-rounded" colorScheme="black">
              <TabList gap={'10px'}>
                <Tab _selected={{ color: 'white', bg: 'black' }}>All rooms</Tab>
                <Tab _selected={{ color: 'white', bg: 'black' }}>1 bed</Tab>
                <Tab _selected={{ color: 'white', bg: 'black' }}>2 bed</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default PropertyDetail;
