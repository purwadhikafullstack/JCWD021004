import {
  Box,
  Heading,
  Text,
  Grid,
  Input,
  Button,
  Textarea,
  FormLabel,
  Flex,
  Divider,
  FormControl,
  useDisclosure,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react';
import { FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { SignUpScheme } from './services/Validation';
import { useFormik } from 'formik';
import { BeatLoader } from 'react-spinners';
import { SuccessModal, ErrorModal } from './services/PopUpModal';
import { property } from './services/CreateProperty';
import { getCity, getCategory } from './services/ReadProperty';

function CreateProperty() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [citylist, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    getCategory().then((data) => {
      setCategoryList(data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory !== '') {
      getCity(selectedCategory).then((data) => {
        setCityList(data);
        console.log(data);
      });
    }
  }, [selectedCategory]);

  const {
    isOpen: isSuccessModalOpen,
    onOpen: openSuccessModal,
    onClose: closeSuccessModal,
  } = useDisclosure();
  const {
    isOpen: isErrorModalOpen,
    onOpen: openErrorModal,
    onClose: closeErrorModal,
  } = useDisclosure();

  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'white',
  };
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      propertyName: '',
      propertyCategoryId: '',
      description: '',
      address: '',
      cityId: '',
    },
    validationSchema: SignUpScheme,
    onSubmit: async (values, { resetForm }) => {
      try {
        await property(
          values.propertyName,
          values.propertyCategoryId,
          values.description,
          values.address,
          values.cityId,
          setLoading,
          openSuccessModal,
          openErrorModal,
        );
      } catch (err) {
        console.log('gagal broh!');
      }
      resetForm({
        values: {
          propertyName: '',
          propertyCategory: '',
          description: '',
          address: '',
          city: '',
        },
      });
    },
  });

  return (
    <>
      <Flex
        flexDirection="column"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        bg="#003580"
      >
        <Box
          position="absolute"
          top="3"
          left="5"
          right="5"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="4"
        >
          <Text color="white" fontSize="2xl" fontWeight="bold">
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
        </Box>
        <Box
          mt={['10px', '30px']}
          minW={['90%', '80%', '70%', '60%']}
          minH={'500px'}
          bg={'white'}
          rounded={'lg'}
          p={['20px', '40px']}
        >
          <Box>
            <Flex flexDirection="column" alignItems="center">
              <Box w={'40%'} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={['24px', '28px']}
                  fontWeight="bold"
                  color={'black'}
                  bg={'#FFB700'}
                  borderRadius={'5px'}
                  p={['6px', '8px']}
                >
                  Add Property
                </Heading>
                <Text color="black" mt={['2', '3']}>
                  Fill out the form below to add a new property.
                </Text>
              </Box>
            </Flex>
            <Divider my={['3', '5']} borderWidth="0.5px" borderColor="black" />
            <Box mt={['20px', '40px']}>
              <form onSubmit={formik.handleSubmit}>
                <Grid
                  templateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
                  gap={4}
                >
                  <FormControl
                    isInvalid={
                      formik.touched.propertyName && formik.errors.propertyName
                    }
                  >
                    <FormLabel
                      htmlFor="property-name"
                      color={'black'}
                      fontWeight={'bold'}
                    >
                      Property Name
                    </FormLabel>
                    <Input
                      name="property-name"
                      placeholder="Enter property name"
                      value={formik.values.propertyName}
                      onChange={formik.handleChange}
                      _placeholder={{ color: '#707070' }}
                      color={'black'}
                    />
                    {formik.touched.propertyName &&
                      formik.errors.propertyName && (
                        <FormErrorMessage>
                          {formik.errors.propertyName}
                        </FormErrorMessage>
                      )}
                  </FormControl>
                  <Box>
                    <Text
                      htmlFor="property-category"
                      color={'black'}
                      fontWeight={'bold'}
                    >
                      Property Category
                    </Text>
                    <Select>
                      placeholder={'Select a Category'}
                      bg={'black'}
                      variant={'filled'}
                      color={'black'}
                      isDisabled value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      {categoryList?.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Select>
                  </Box>
                </Grid>
                <FormControl
                  isInvalid={
                    formik.touched.description && formik.errors.description
                  }
                  mt={['3', '5']}
                >
                  <FormLabel
                    htmlFor="description"
                    color={'black'}
                    fontWeight={'bold'}
                  >
                    Description
                  </FormLabel>
                  <Textarea
                    h={['80px', '100px']}
                    name="description"
                    placeholder="Enter property description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    _placeholder={{ color: '#707070' }}
                    color={'black'}
                  />
                  {formik.touched.description && formik.errors.description && (
                    <FormErrorMessage>
                      {formik.errors.description}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.address && formik.errors.address}
                  mt={['3', '5']}
                >
                  <FormLabel
                    htmlFor="address"
                    color={'black'}
                    fontWeight={'bold'}
                  >
                    Address
                  </FormLabel>
                  <Input
                    name="address"
                    placeholder="Enter the complete address of your property"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    _placeholder={{ color: '#707070' }}
                    color={'black'}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                  )}
                </FormControl>
                <Box mt={['3', '5']}>
                  <Text htmlFor="city" color={'black'} fontWeight={'bold'}>
                    City
                  </Text>
                  <Select>
                    name={'cityId'}
                    value={selectedCity}
                    placeholder={'Select a City'}
                    bg={'blue'}
                    color={'black'}
                    variant={'filled'}
                    isDisabled onChange=
                    {(e) => {
                      setSelectedCity(e.target.value);
                      formik.handleChange(e);
                    }}
                    {citylist?.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </Select>
                  {formik.touched.city && formik.errors.city && (
                    <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
                  )}
                </Box>

                {loading ? (
                  <Button
                    width={'100%'}
                    color={'white'}
                    bg={'black'}
                    _hover={{ bg: '#013B94' }}
                    _active={{ opacity: '70%' }}
                  >
                    <div className="sweet-loading">
                      <BeatLoader
                        color={'#ffffff'}
                        loading={loading}
                        cssOverride={override}
                        size={10}
                        aria-label="spiner"
                        data-testid="loader"
                      />
                    </div>
                  </Button>
                ) : (
                  <Box
                    display={['block', 'block', 'flex', 'flex']}
                    flexDirection={['column', 'column', 'row', 'row']}
                    alignItems={['flex-start', 'flex-start', 'flex-end']}
                    mt={['20px', '60px']}
                  >
                    <Button
                      bg={'black'}
                      color={'white'}
                      _hover={{ bg: '#FFB700', color: 'black' }}
                      _active={{ opacity: '70%' }}
                      type="submit"
                    >
                      Continue
                    </Button>
                  </Box>
                )}
              </form>

              {/* ... */}
              <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={closeSuccessModal}
              />
              <ErrorModal isOpen={isErrorModalOpen} onClose={closeErrorModal} />
              {/* ... */}
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default CreateProperty;
