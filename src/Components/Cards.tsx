// ? React Icons Imports
import { AiFillAudio } from "react-icons/ai";
import { DiBrackets } from "react-icons/di";
import { IoAccessibilitySharp } from "react-icons/io5";

// ? Card imports
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

const Cards = () => {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "column" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        minWidth={"30rem"}
        margin={"0 auto"}
      >
        <IoAccessibilitySharp fill="var(--primary)" fontSize={"4.5rem"} />
        <CardHeader mb={0} paddingBottom={0}>
          <Heading fontSize={"3.6rem"} textAlign={"center"}>
            Experiential Marketing
          </Heading>
        </CardHeader>
        <CardBody mt={0} paddingTop={0} padding={"1.6rem"} fontSize={"1.8rem"}>
          <div>
            Transforming every interaction into an unforgettable experience, we
            ensure your brand leaves an indelible mark, not just an impression.
          </div>
        </CardBody>
      </Card>
      <Card
        direction={{ base: "column", sm: "column" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        minWidth={"30rem"}
        margin={"0 auto"}
      >
        <DiBrackets fill="var(--primary)" fontSize={"4.5rem"} />
        <CardHeader mb={0} paddingBottom={0}>
          <Heading fontSize={"3.6rem"} textAlign={"center"}>
            Creative Services
          </Heading>
        </CardHeader>
        <CardBody mt={0} paddingTop={0} padding={"1.6rem"} fontSize={"1.8rem"}>
          <div>
            Our imagination knows no bounds. We breathe life into ideas,
            infusing them with vibrant energy to catapult your brand into a
            league of its own.
          </div>
        </CardBody>
      </Card>
      <Card
        direction={{ base: "column", sm: "column" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        minWidth={"30rem"}
        margin={"0 auto"}
      >
        <AiFillAudio fill="var(--primary)" fontSize={"4.5rem"} />
        <CardHeader mb={0} paddingBottom={0}>
          <Heading fontSize={"3.6rem"} textAlign={"center"}>
            Digital Marketing
          </Heading>
        </CardHeader>
        <CardBody mt={0} paddingTop={0} padding={"1.6rem"} fontSize={"1.8rem"}>
          <div>
            We are here to turbocharge your online presence and revolutionize
            the way you connect with your audience.
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Cards;
