import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";

const EmailService = () => {
  return (
    <FormControl size={"xl"} isRequired>
      <FormLabel size={"xl"} fontSize={"1.3rem"}>
        Email Address
      </FormLabel>
      <Input type="email" size={"30"} />

      <FormErrorMessage>Email is required.</FormErrorMessage>

      <FormLabel fontSize={"1.3rem"}>Name</FormLabel>
      <Input type="text" size={"20"} />
      <FormErrorMessage>Name is required.</FormErrorMessage>

      <FormLabel fontSize={"1.3rem"}>Subject</FormLabel>
      <Input type="text" height={"30"} size={"20"} />

      <FormLabel fontSize={"1.3rem"}>Country</FormLabel>
      <Select placeholder="Select country" height={"30"}>
        <option>Kenya</option>
        <option>Rwanda</option>
        <option>Zambia</option>
      </Select>

      <FormLabel size={"xl"} fontSize={"1.3rem"}>
        How can we help you? Feel free to get in touch
      </FormLabel>
      <Input type="text" size={"2xl"} height={"100"} />
    </FormControl>
  );
};

export default EmailService;
