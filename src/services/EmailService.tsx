import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";

const EmailService = () => {
  return (
    <FormControl>
      <FormLabel>Email Address</FormLabel>
      <Input type="email" placeholder="Enter your email" />

      <FormErrorMessage>Email is required.</FormErrorMessage>

      <FormLabel>Name</FormLabel>
      <Input type="text" placeholder="Name" />
      <FormErrorMessage>Name is required.</FormErrorMessage>

      <FormLabel>Subject</FormLabel>
      <Input type="text" placeholder="Name" />

      <FormLabel>Country</FormLabel>
      <Select placeholder="Select country">
        <option>Kenya</option>
        <option>Rwanda</option>
        <option>Zambia</option>
      </Select>

      <FormLabel>How can we help you? Feel free to get in touch</FormLabel>
      <Input type="text" placeholder="Name" />
    </FormControl>
  );
};

export default EmailService;
