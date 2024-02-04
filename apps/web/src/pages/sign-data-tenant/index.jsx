import {
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import { FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { register } from './services/CreateUser';
import { SuccessModal, ErrorModal } from './services/PopUpModal';
import { useState } from 'react';
import { SignUpScheme } from './services/Validation';

function SignDataTenant() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
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
      username: '',
      password: '',
      confirmationPassword: '',
    },
    validationSchema: SignUpScheme,
    onSubmit: async (values, { resetForm }) => {
      try {
        await register(
          values.email,
          values.username,
          values.password,
          setLoading,
          openSuccessModal,
          openErrorModal,
        );
      } catch (err) {
        console.log('gagal broh!');
      }
      resetForm({
        values: {
          email: '',
          username: '',
          password: '',
          confirmationPassword: '',
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
          <Text mt="2" fontSize="sm" color="gray.600">
            Create an account to list and manage your property.
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={formik.touched.username && formik.errors.username}
              mt={'8'}
            >
              <FormLabel
                htmlFor="username"
                color="black"
                fontSize="sm"
                fontWeight="bold"
              >
                Fullname
              </FormLabel>
              <Input
                name="username"
                placeholder="Fullname"
                value={formik.values.username}
                onChange={formik.handleChange}
                _placeholder={{ color: '#707070' }}
                color={'black'}
                mt="1"
                mb="4"
                w="full"
              />
              {formik.touched.username && formik.errors.username && (
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              )}
            </FormControl>
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
            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
            >
              <FormLabel
                htmlFor="password"
                color="black"
                fontSize="sm"
                fontWeight="bold"
              >
                Create Password
              </FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                  placeholder="Enter password"
                  _placeholder={{ color: '#707070' }}
                  color={'black'}
                  mt="1"
                  mb="4"
                  w="full"
                />
                <InputRightElement top={'5px'} width={'50px'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    backgroundColor={'transparent'}
                    height={'64px'}
                    _hover={'none'}
                    color={'#707070'}
                  >
                    {showPassword ? (
                      <Icon as={EyeIcon} boxSize={'24px'} />
                    ) : (
                      <Icon as={EyeSlashIcon} boxSize={'24px'} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {formik.touched.password && formik.errors.password && (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.confirmationPassword &&
                formik.errors.confirmationPassword
              }
              marginBottom={'20px'}
            >
              <FormLabel
                htmlFor="password"
                color="black"
                fontSize="sm"
                fontWeight="bold"
              >
                Password Confirmation
              </FormLabel>
              <InputGroup>
                <Input
                  type={showPasswordConfirmation ? 'text' : 'password'}
                  name="confirmationPassword"
                  placeholder="Password confirmation"
                  onChange={formik.handleChange}
                  _placeholder={{ color: '#707070' }}
                  color={'black'}
                  mt="1"
                  w="full"
                />
                <InputRightElement top={'5px'} width={'50px'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPasswordConfirmation(
                        (showPasswordConfirmation) => !showPasswordConfirmation,
                      )
                    }
                    backgroundColor={'transparent'}
                    height={'64px'}
                    _hover={'none'}
                    color={'#707070'}
                  >
                    {showPasswordConfirmation ? (
                      <Icon as={EyeIcon} boxSize={'24px'} />
                    ) : (
                      <Icon as={EyeSlashIcon} boxSize={'24px'} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {formik.touched.confirmationPassword &&
                formik.errors.confirmationPassword && (
                  <FormErrorMessage>
                    {formik.errors.confirmationPassword}
                  </FormErrorMessage>
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
