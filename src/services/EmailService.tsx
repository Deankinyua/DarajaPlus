import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

const EmailService = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: MouseEvent) => setInput(e.target.value);

  const isError = input === "";
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" placeholder="Enter your email" />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}

      <FormLabel>Name</FormLabel>
      <Input type="text" placeholder="Name" />
      <FormErrorMessage>Name is required.</FormErrorMessage>
      <FormLabel>Country</FormLabel>
      <Select placeholder="Select country">
        <option>Kenya</option>
        <option>Rwanda</option>
        <option>Zambia</option>
      </Select>
    </FormControl>
  );
};

export default EmailService;
