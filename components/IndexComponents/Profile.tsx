import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  LightMode,
  Link,
  SlideFade,
  Wrap,
} from "@chakra-ui/react";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Paragraph from "../ThemeComponents/Paragraph";

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
          I'm currently working as a Software Developer at{" "}
          <Link
            href="https://www.dmcinfo.com"
            target="_blank"
            color="blue.500"
            isExternal
          >
            DMC
          </Link>
          , based in Seattle.
        </Paragraph>
        <Box mt={10}>
          <LightMode>
            <ButtonGroup>
              <Wrap>
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
                  href="https://docs.google.com/document/d/1UKAAynX2A7kP8DkbG_PR8139wjh6NND-RjCdJuLtzeU/edit#heading=h.1nyyawuw8ykd"
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
              </Wrap>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Profile;
