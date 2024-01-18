import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
// import PropTypes from 'prop-types';

// SuccessModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
export const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'} color={'green'} fontSize={'28px'}>
            Success!
          </ModalHeader>
          <ModalBody textAlign={'center'} color={'black'} fontSize={'16px'}>
            Your account is ready! <b>Verify your email address</b> to access
            our latest collection. Act fast, the verification link{' '}
            <b>expires in an hour.</b> Welcome aboard!
          </ModalBody>

          <ModalFooter>
            <Button
              bg="brand.lightred"
              color="white"
              _hover={{ bg: '#013B94' }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// ErrorModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
export const ErrorModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'sm'} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'} color={'red'} fontSize={'28px'}>
          Failed!
        </ModalHeader>
        <ModalBody textAlign={'center'} color={'black'} fontSize={'16px'}>
          Username or email has already existed. Use another username or email.
        </ModalBody>
        <ModalFooter>
          <Button
            bg="brand.lightred"
            color="white"
            _hover={{ bg: '#013B94' }}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
