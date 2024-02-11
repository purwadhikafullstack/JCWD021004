import './Home.css';
import {
  Box,
  VStack,
  Text,
  Button,
  Flex,
  Select,
  Grid,
  Heading,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCity } from './services/ReadCity';
import { FilterProperty } from './services/FilterProperty';
import airport from '../../assets/images/home/airport.jpg';
import vacation from '../../assets/images/home/vacation.jpg';
import ubud from '../../assets/images/home/ubud.jpg';
import canggu from '../../assets/images/home/canggu.jpg';
import jakarta from '../../assets/images/home/jakarta.jpg';
import uluwatu from '../../assets/images/home/uluwatu.jpg';
import sanur from '../../assets/images/home/sanur.jpg';
import 'react-datepicker/dist/react-datepicker.css';

function Home() {
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);
  const user = useSelector((state) => state.AuthReducer.users);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ id: '', name: '' });
  const navigate = useNavigate();

  useEffect(() => {
    getCity().then((data) => {
      setCities(data);
    });
  }, []);

  const handleSearch = async () => {
    try {
      const result = await FilterProperty(selectedCity.id);

      // Navigasi ke halaman PropertyList dan kirim hasil filter sebagai properti
      navigate('/property-list', {
        state: { searchResult: result, selectedCity: selectedCity },
      });
    } catch (err) {
      console.log(err);
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
                {isLogin
                  ? `Where to next, ${user.username}?`
                  : 'Find your next stay'}
              </Text>
              <Text color={'white'} fontSize={'24px'}>
                {isLogin
                  ? 'Find exclusive Genius rewards in every corner of the world!'
                  : 'Search deals on hotels, homes, and much more...'}
              </Text>
            </VStack>
          </Box>
        </Box>
        <Box id="search-hotels" mt={'-70px'}>
          <Box w="full" maxW="700px" mx="auto" p={[4, 6, 8]}>
            <Flex
              gridGap={1.5}
              bg={'#FFB700'}
              height={'70px'}
              justifyContent="center"
              alignItems="center"
              padding={1.5}
              borderRadius={'5px'}
            >
              <Select
                name={'cityId'}
                value={selectedCity.id}
                placeholder={'Kuta'}
                fontWeight="bold"
                bg={'white'}
                color={'black'}
                height={'55px'}
                width={'100%'}
                isDisabled={!cities?.length}
                onChange={(e) =>
                  setSelectedCity({
                    id: e.target.value,
                    name: e.target.selectedOptions[0].text,
                  })
                }
              >
                {cities?.map((city) => (
                  <option key={city.city_id} value={city.city_id}>
                    {city.name}
                  </option>
                ))}
              </Select>

              <Button
                bg={'brand.lightred'}
                _hover={{ bg: '#013B94' }}
                color={'white'}
                height={'55px'}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Flex>
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
