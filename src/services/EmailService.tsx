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
      <FormLabel size={"xl"} fontSize={"1.3rem"} fontWeight={"550"}>
        Email Address
      </FormLabel>
      <Input type="email" size={"30"} padding={".5rem 0"} />

      <FormErrorMessage>Email is required.</FormErrorMessage>

      <FormLabel fontSize={"1.3rem"} fontWeight={"550"}>
        Name
      </FormLabel>
      <Input type="text" size={"20"} padding={".5rem 0"} />
      <FormErrorMessage>Name is required.</FormErrorMessage>

      <FormLabel fontSize={"1.3rem"} fontWeight={"550"}>
        Subject
      </FormLabel>
      <Input type="text" height={"30"} size={"20"} padding={".5rem 0"} />

      <FormLabel fontSize={"1.3rem"} fontWeight={"550"}>
        Country
      </FormLabel>
      <Select
        placeholder="Select country"
        height={"30"}
        padding={".5rem 0"}
        fontSize={"1.3rem"}
      >
        <option>Kenya</option>
        <option>Rwanda</option>
        <option>Zambia</option>
      </Select>

      <FormLabel size={"xl"} fontSize={"1.3rem"} fontWeight={"550"}>
        How can we help you? Feel free to get in touch
      </FormLabel>
      <Input type="text" size={"2xl"} height={"100"} padding={".5rem 0"} />
    </FormControl>
  );
};

export default EmailService;
