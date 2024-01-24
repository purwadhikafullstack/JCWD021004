import {
  Button,
  Input,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  Text,
  FormErrorMessage,
  Icon,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

function UpdatePassword() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const users = useSelector((state) => state.AuthReducer.users);

  const editUser = async (password) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/user/update-password/${users.user_id}`,
        {
          password,
        },
      );

      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
    },

    onSubmit: (values) => {
      editUser(values.password);
    },
  });

  return (
    <>
      <Button
        w={'100%'}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg={'transparent'}
        fontWeight={'500'}
        onClick={onOpen}
        height={'50px'}
      >
        <Text fontSize={'14px'} color={'brand.lightred'}>
          Change Password
        </Text>
        <Text color={'brand.lightred'} fontSize={'15px'}>
          Edit
        </Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <form onSubmit={formik.handleSubmit}>
            <ModalContent>
              <ModalHeader
                color={'black'}
                fontWeight={'bold'}
                textAlign={'center'}
              >
                Ubah Password
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody pb={6}>
                <FormControl
                  isInvalid={
                    !!formik.touched.password && !!formik.errors.password
                  }
                  marginBottom={'25px'}
                  marginTop={'15px'}
                >
                  <FormLabel color={'black'} marginBottom={'10px'}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                      placeholder="Enter new password"
                      width={'100%'}
                      padding={'12px 20px'}
                      border={'1px solid #6666'}
                      borderRadius={'100px'}
                      fontSize={'16px'}
                      color={'black'}
                    />
                    <InputRightElement>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                        backgroundColor={'transparent'}
                      >
                        {showPassword ? (
                          <Icon as={EyeIcon} />
                        ) : (
                          <Icon as={EyeSlashIcon} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {formik.touched.password && formik.errors.password && (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={
                    !!formik.touched.confirmationPassword &&
                    !!formik.errors.confirmationPassword
                  }
                  marginBottom={'20px'}
                >
                  <FormLabel color={'black'} marginBottom={'10px'}>
                    Confirmation Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      onChange={formik.handleChange}
                      name="confirmationPassword"
                      placeholder="Confirm your password"
                      width={'100%'}
                      padding={'12px 20px'}
                      border={'1px solid #6666'}
                      borderRadius={'100px'}
                      fontSize={'16px'}
                      color={'black'}
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowConfirmPassword(
                            (showConfirmPassword) => !showConfirmPassword,
                          )
                        }
                      >
                        {showConfirmPassword ? (
                          <Icon as={EyeIcon} />
                        ) : (
                          <Icon as={EyeSlashIcon} />
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
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      </Button>
    </>
  );
}

export default UpdatePassword;
