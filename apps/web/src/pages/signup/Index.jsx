import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  Stack,
  Text,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { Google } from '../../assets/Icons/Icons';
import { useFormik } from 'formik';
import { register } from './services/CreateUser';
import { SuccessModal, ErrorModal } from './services/PopUpModal';
import { BeatLoader } from 'react-spinners';
import { useState } from 'react';
import { SignUpScheme } from './services/Validation';
import { signInWithGoogle } from '../../firebase';

function Signup({ setOpenTab }) {
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
    },
    validationSchema: SignUpScheme,
    onSubmit: async (values, { resetForm }) => {
      try {
        await register(
          values.email,
          values.username,
          setLoading,
          openSuccessModal,
          openErrorModal,
        );
      } catch (err) {
        console.log('gagal error');
      }
      resetForm({ values: { email: '', username: '' } });
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
              Create an account
            </Text>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.touched.username && formik.errors.username}
                marginBottom={'20px'}
              >
                <FormLabel
                  htmlFor="username"
                  color={'black'}
                  fontSize={'14px'}
                  mb={'2'}
                  fontWeight={'bold'}
                >
                  Username
                </FormLabel>
                <InputGroup marginBottom={'8px'}>
                  <Input
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    _placeholder={{ color: '#707070' }}
                    height={'50px'}
                    bg={'#EEEDED'}
                    color={'#707070'}
                    fontSize={'16px'}
                    borderRadius={'12px'}
                  />
                </InputGroup>
                {formik.touched.username && formik.errors.username && (
                  <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
                marginBottom={'20px'}
              >
                <FormLabel
                  htmlFor="username"
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
                </InputGroup>
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>

              {loading ? (
                <Button
                  width={'100%'}
                  height={'68px'}
                  borderRadius={'16px'}
                  fontSize={'24px'}
                  fontWeight={'700'}
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
                  height={'55px'}
                  borderRadius={'12px'}
                  fontSize={'18px'}
                  fontWeight={'700'}
                  color={'white'}
                  bg={'brand.lightred'}
                  _hover={{ bg: '#013B94' }}
                  _active={{ opacity: '70%' }}
                  type="submit"
                >
                  SIGN UP
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

            <Box position="relative" margin={'32px 0'}>
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
    </>
  );
}

export default Signup;
