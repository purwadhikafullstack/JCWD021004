import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'} color={'green'} fontSize={'24px'}>
            Success!
          </ModalHeader>
          <ModalBody textAlign={'center'} color={'black'} fontSize={'14px'}>
            Request to reset password has been sent. Open your email to reset
            your password.
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

export const ErrorModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'sm'} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'} color={'red'} fontSize={'24px'}>
          Failed!
        </ModalHeader>
        <ModalBody textAlign={'center'} color={'black'} fontSize={'18px'}>
          Email is not registered.
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
