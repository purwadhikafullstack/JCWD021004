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
  Flex,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

function UpdateEmail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const users = useSelector((state) => state.AuthReducer.users);
  const editUser = async (email) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/user/update-email/${users.user_id}`,
        {
          email,
        },
      );

      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: users.email,
    },

    onSubmit: (values) => {
      editUser(values.email);
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
        <Flex alignItems={'center'} gap={'5'}>
          {users?.email}
          {users?.is_verified ? (
            <Flex alignItems={'center'} gap={'4px'}>
              <Icon as={CheckBadgeIcon} color={'green'} boxSize={'16px'} />
              <Text fontSize={'14px'} color={'green'}>
                Verified
              </Text>
            </Flex>
          ) : (
            <Text fontSize={'14px'} color={'brand.lightred'}>
              Verify Email
            </Text>
          )}
        </Flex>
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
                Edit Email
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody pb={6}>
                <FormControl
                  isInvalid={!!(formik.touched.email && formik.errors.email)}
                >
                  <FormLabel color={'black'}>Email address</FormLabel>
                  <Input
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    color={'black'}
                  />

                  {formik.touched.email && formik.errors.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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

export default UpdateEmail;
