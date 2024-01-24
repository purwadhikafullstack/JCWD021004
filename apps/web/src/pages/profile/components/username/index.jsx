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
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editUsername } from '../../../../redux/reducer/authReducer';

function UpdateUsername() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.AuthReducer.users);
  const dispatch = useDispatch();

  const editUser = async (username) => {
    try {
      await dispatch(editUsername(user.user_id, username));

      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: user.username,
    },
    onSubmit: (values) => {
      editUser(values.username);
    },
  });

  return (
    <>
      <ToastContainer />
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
        <span>{user?.username}</span>
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
                Edit Username
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody pb={6}>
                <FormControl
                  isInvalid={
                    !!(formik.touched.username && formik.errors.username)
                  }
                >
                  <FormLabel color={'black'}>Username</FormLabel>
                  <Input
                    name="username"
                    placeholder="Enter new username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    color={'black'}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <FormErrorMessage>
                      {formik.errors.username}
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

export default UpdateUsername;
