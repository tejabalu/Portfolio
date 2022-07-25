import {
  Box,
  Heading,
  SlideFade,
  Link,
  LightMode,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Paragraph from "../../Paragraph";
import React from "react";

const Profile = () => {
  return (
    <SlideFade in={true} offsetY={80}>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={4}
        >
          Hey, I’m Teja Balu
        </Heading>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          I'm currently studying {""}
          <Link
            color="blue.500"
            href="https://gixnetwork.org/program/msti/"
            isExternal
            fontWeight="500"
          >
            Master of Science in Technology Innovation
          </Link>{" "}
          at the University of Washington.
          <br />
          I'm looking for Software / Full-Stack Development roles starting in
          the fall of 2022.
        </Paragraph>
        <Box mt={10}>
          <LightMode>
            <ButtonGroup>
              <Button
                colorScheme="blue"
                bg="blue.500"
                href="mailto:tejabalu15@gmail.com"
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaEnvelope />}
              >
                tejabalu15@gmail.com
              </Button>
              <Button
                colorScheme="blue"
                bg="blue.500"
                href="https://drive.google.com/file/d/1ZDvhRMb0jvZv1zKi8kUloTWXSYQjMEb6/view?usp=sharing"
                target={`_blank`}
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaFileAlt />}
              >
                Resume
              </Button>
              <Button
                colorScheme="blue"
                bg="blue.500"
                href="https://www.linkedin.com/in/tejabalu/"
                target={`_blank`}
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
              <Button
                colorScheme="blue"
                bg="blue.500"
                href="https://github.com/tejabalu/"
                target={`_blank`}
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaGithub />}
              >
                GitHub
              </Button>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Profile;
