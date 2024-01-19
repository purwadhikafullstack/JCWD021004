import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
  Center,
  Stack,
  FormLabel,
} from '@chakra-ui/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { createRequest } from './services/CreateRequestResetPassword';
import { useState } from 'react';
import { SuccessModal } from './services/PopUpModal';
import { ErrorModal } from './services/PopUpModal';
import { BeatLoader } from 'react-spinners';
import { EmailScheme } from './services/Validation';
function RequestPasswordReset() {
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
    validationSchema: EmailScheme,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createRequest(
          values.email,
          setLoading,
          openSuccessModal,
          openErrorModal,
        );
      } catch {
        console.log('gagal error');
      }

      resetForm({ values: { email: '' } });
    },
  });
  return (
    <>
      <Center height={'80vh'} boxShadow={'base'}>
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
              RESET PASSWORD
            </Text>
            <Box position="relative" margin={'25px 0'}>
              <Text width={'400px'} color={'black'}>
                Silahkan masukan email anda dibawah ini. Kami akan mengirimkan
                informasi lanjut melalui email.
              </Text>
            </Box>
            <Box position="relative" margin={'20px 0'}>
              <Divider border={'1px solid #D9D9D9'} />
            </Box>
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
                  Email Address
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
                  RESET PASSWORD
                </Button>
              )}
            </form>
            <SuccessModal
              isOpen={isSuccessModalOpen}
              onClose={closeSuccessModal}
            />
            <ErrorModal isOpen={isErrorModalOpen} onClose={closeErrorModal} />

            <Box position="relative" margin={'25px 0'}>
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

export default RequestPasswordReset;
