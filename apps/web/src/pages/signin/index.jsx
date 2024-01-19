import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Center,
  Stack,
  FormLabel,
  Divider,
} from '@chakra-ui/react';
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Google } from '../../assets/Icons/Icons';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer/authReducer';
import { useState } from 'react';
import { signInWithGoogle } from '../../firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin({ setOpenTab }) {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values.email, values.password));
      resetForm({ values: { email: '', password: '' } });
    },
  });

  const onLoginWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result === 'signin with google success') {
        setOpenTab(3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Center height={'85vh'} boxShadow={'base'}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}
          margin={'50'}
        >
          <Box width={'400px'}>
            <Text
              fontWeight={'800'}
              color={'brand.lightred'}
              textAlign={'center'}
              fontSize={'24px'}
              marginBottom={'40px'}
            >
              SIGN IN
            </Text>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
                marginBottom={'20px'}
              >
                <FormLabel
                  htmlFor="email"
                  color={'black'}
                  fontSize={'14px'}
                  mb={'2'}
                  fontWeight={'bold'}
                >
                  Email address
                </FormLabel>
                <InputGroup marginBottom={'8px'}>
                  <Input
                    name="email"
                    placeholder="Enter your email address"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    _placeholder={{ color: '#707070' }}
                    height={'50px'}
                    bg={'#EEEDED'}
                    color={'#707070'}
                    fontSize={'16px'}
                    borderRadius={'12px'}
                  />
                  <InputLeftElement top={'5px'} width={'50px'}>
                    <Flex
                      justifyContent={'center'}
                      alignItems={'center'}
                      height={'64px'}
                    >
                      <Icon
                        as={EnvelopeIcon}
                        boxSize={'20px'}
                        margin={'auto'}
                        position={'relative'}
                        textColor={'brand.grey350'}
                      />
                    </Flex>
                  </InputLeftElement>
                </InputGroup>
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
                  color={'black'}
                  fontSize={'14px'}
                  mb={'2'}
                  fontWeight={'bold'}
                >
                  Password
                </FormLabel>
                <InputGroup marginBottom={'8px'}>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    required
                    placeholder="Enter password"
                    _placeholder={{ color: '#707070' }}
                    height={'50px'}
                    bg={'#EEEDED'}
                    color={'#707070'}
                    fontSize={'16px'}
                    borderRadius={'12px'}
                  />
                  <InputLeftElement top={'5px'} width={'50px'}>
                    <Flex
                      justifyContent={'center'}
                      alignItems={'center'}
                      height={'64px'}
                    >
                      <Icon
                        as={LockClosedIcon}
                        boxSize={'20px'}
                        margin={'auto'}
                        position={'relative'}
                        textColor={'brand.grey350'}
                      />
                    </Flex>
                  </InputLeftElement>
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
              </FormControl>

              <Button
                width={'100%'}
                height={'55px'}
                borderRadius={'12px'}
                fontSize={'18px'}
                fontWeight={'700'}
                color={'white'}
                bg={'brand.lightred'}
                _hover={{ bg: '#013B94' }}
                _active={{ opacity: '70%' }}
                marginBottom={'7px'}
                type="submit"
              >
                SIGN IN
              </Button>
              <Link to="/password-reset-request">
                <Text color={'#1A72DD'}>Forgot Password?</Text>
              </Link>
            </form>

            <Box position="relative" margin={'20px 0'}>
              <Divider border={'1px solid #D9D9D9'} />
              <AbsoluteCenter bg="white" width={'50px'} color={'black'}>
                or
              </AbsoluteCenter>
            </Box>
            <Stack>
              <Button
                leftIcon={<Icon as={Google} boxSize={8} />}
                background="#EEEDED"
                variant="solid"
                color="black"
                height={'50px'}
                borderRadius={'12px'}
                onClick={onLoginWithGoogle}
              >
                Continue with Google
              </Button>
            </Stack>
            <Box position="relative" margin={'25px 0'}>
              <Divider border={'1px solid #D9D9D9'} />
            </Box>
            <Box position="relative" margin={'20px 0'}>
              <Text width={'400px'} color={'black'}>
                By signing in or creating an account, you agree with our{' '}
                <span style={{ color: '#006BE4' }}>Terms & Conditions</span> and{' '}
                <span style={{ color: '#006BE4' }}>Privacy Statement</span>
              </Text>
            </Box>
            <Box position="relative" margin={'20px 0'}>
              <Divider border={'1px solid #D9D9D9'} />
            </Box>
            <Box position="relative" margin={'27px 0'}>
              <Text color={'black'}>All rights reserved.</Text>
              <Text color={'black'}>
                Copyright (2023-2024) - Relaxin.com™{' '}
              </Text>
            </Box>
          </Box>
        </Stack>
      </Center>
      <ToastContainer />
    </>
  );
}

export default Signin;
