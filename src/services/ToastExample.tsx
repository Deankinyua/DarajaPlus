import { Box, Button, useToast } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
};

const ToastExample = ({ onClose }: Props) => {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Message Received
            </Box>
          ),
          title: "Message Submitted.",
          description: "We'll reach out soon.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        onClose();
      }}
    >
      Send Message
    </Button>
  );
};

export default ToastExample;
