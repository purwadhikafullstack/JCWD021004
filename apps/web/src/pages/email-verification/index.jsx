import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
  Center,
  Stack,
  FormLabel,
  Divider,
} from '@chakra-ui/react';
import {
  LockClosedIcon,
  EyeSlashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { verification } from './service/EditUser';
import { PasswordSchema } from './service/Validation';
import { useState } from 'react';
import { SuccessModal, ErrorModal } from './service/PopUpModal';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

function Verification() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
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
      password: '',
      confirmationPassword: '',
    },
    validationSchema: PasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await verification(
          values.password,
          setLoading,
          openSuccessModal,
          openErrorModal,
        );

        // Adding a delay of 5 seconds before navigating
        setTimeout(() => {
          navigate('/signin-user');
        }, 3000);
      } catch (err) {
        console.log(err.message);
      }

      resetForm({ values: { password: '', confirmationPassword: '' } });
    },
  });

  return (
    <>
      <Center height={'85vh'} marginTop={'40px'}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}
          margin={'50'}
          padding={'35px'}
          boxShadow={'base'}
          width={'500px'}
        >
          <Box width={'400px'}>
            <Text
              fontWeight={'800'}
              color={'brand.lightred'}
              textAlign={'center'}
              fontSize={'24px'}
              marginBottom={'40px'}
            >
              SET PASSWORD
            </Text>
            <Box position="relative" margin={'25px 0'}>
              <Text width={'400px'} color={'black'}>
                Silahkan masukan password untuk akun anda dibawah ini.
              </Text>
            </Box>
            <Box position="relative" margin={'20px 0'}>
              <Divider border={'1px solid #D9D9D9'} />
            </Box>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.touched.password && formik.errors.password}
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
                    placeholder="enter password"
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
                  color={'black'}
                  fontSize={'14px'}
                  mb={'2'}
                  fontWeight={'bold'}
                >
                  Password Confirmation
                </FormLabel>
                <InputGroup marginBottom={'8px'}>
                  <Input
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    name="confirmationPassword"
                    placeholder="Password confirmation"
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
                        setShowPasswordConfirmation(
                          (showPasswordConfirmation) =>
                            !showPasswordConfirmation,
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
                  CONFIRM
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

export default Verification;
