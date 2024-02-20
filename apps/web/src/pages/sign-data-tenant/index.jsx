import {
  Button,
  Text,
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { register } from './services/CreateUser';
import { SuccessModal, ErrorModal } from './services/PopUpModal';
import { useState } from 'react';
import { SignUpScheme } from './services/Validation';

function SignDataTenant() {
  const navigate = useNavigate();
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
      email: '',
    },
    validationSchema: SignUpScheme,
    onSubmit: async (values, { resetForm }) => {
      try {
        await register(
          values.email,
          setLoading,
          openSuccessModal,
          openErrorModal,
        );

        // Adding a delay of 5 seconds before navigating
        setTimeout(() => {
          navigate('/create-property');
        }, 3000);
      } catch (err) {
        console.log('gagal broh!');
      }
      resetForm({
        values: {
          email: '',
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
        <Box width="full" maxWidth="md" rounded="md" bg="white" p="8" mt={'19'}>
          <Text fontSize="2xl" fontWeight="bold" color={'black'}>
            Create your partner account
          </Text>
          <Text mt="2" mb="10" fontSize="sm" color="gray.600">
            Create an account to list and manage your property.
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel
                htmlFor="email"
                color="black"
                fontSize="sm"
                fontWeight="bold"
              >
                Email address
              </FormLabel>
              <Input
                name="email"
                placeholder="Enter your email address"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                _placeholder={{ color: '#707070' }}
                color={'black'}
                mt="1"
                mb="4"
                w="full"
              />
              {formik.touched.email && formik.errors.email && (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              )}
            </FormControl>

            {loading ? (
              <Button
                width={'100%'}
                color={'white'}
                bg={'brand.lightred'}
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
              <Button
                width={'100%'}
                mt={'4'}
                color={'white'}
                bg={'brand.lightred'}
                _hover={{ bg: '#013B94' }}
                _active={{ opacity: '70%' }}
                type="submit"
              >
                Continue
              </Button>
            )}
          </form>

          {/* ... */}
          <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={closeSuccessModal}
          />
          <ErrorModal isOpen={isErrorModalOpen} onClose={closeErrorModal} />
          {/* ... */}

          <Flex mt="4" textAlign="center" fontSize="xs" flexDirection="column">
            <Text color={'black'}>
              Questions about your property or the Extranet? Check out{' '}
              <Text as="span" color="blue.600">
                {' '}
                Partner Help
              </Text>
              or ask another partner in the{' '}
              <Text as="span" color="blue.600">
                Partner Community
              </Text>
              .
            </Text>
            <Button
              mt="8"
              w="full"
              bg={'black'}
              color={'white'}
              fontWeight={'bold'}
              _hover={{ bg: '#FFB700', color: 'black' }}
              onClick={() => navigate('/signin-tenant')}
            >
              Sign in
            </Button>
          </Flex>
        </Box>
        <Box
          mt="2"
          width="400px"
          textAlign="center"
          fontSize="sm"
          color="white"
        >
          <Text mt="4" color={'white'}>
            All rights reserved.
          </Text>
          <Text mt="1" color={'white'}>
            Copyright (2006-2024) – Relaxin.com™
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default SignDataTenant;
