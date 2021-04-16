import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
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
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { createSite } from '@/lib/db';

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();
  const auth = useAuth();
  const initialRef = useRef();

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      name,
      url,
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
    };
    createSite(newSite);
    showToast();
    mutate(
      '/api/sites',
      async (data) => ({ sites: [...data.sites, newSite] }),
      false
    );
    reset();
    onClose();
  };

  const showToast = () =>
    toast({
      title: 'Success!.',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        borderRadius={4}
        _hover={{
          bg: 'gray.700',
        }}
        _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
      >
        {children}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My Site"
                {...register('name', { required: true })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://fastfeedback.luislocon.dev"
                {...register('url', { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              type="submit"
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
