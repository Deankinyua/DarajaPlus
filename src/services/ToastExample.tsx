import { Button, useToast } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
};

const ToastExample = ({ onClose }: Props) => {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          title: "Message Submitted.",
          description: "We'll reach out soon.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        onClose();
      }}
    >
      Show Toast
    </Button>
  );
};

export default ToastExample;
