import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import EmailService from "./EmailService";
import ToastExample from "./ToastExample";

const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <div className="modal_component">
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <div className="wrapper_header">
              <ModalHeader>Talk to Us </ModalHeader>
            </div>
            <ModalCloseButton />
            <ModalBody>
              <EmailService></EmailService>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <ToastExample onClose={onClose}></ToastExample>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default FormModal;