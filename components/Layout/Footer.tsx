import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Container maxW="container.lg">
      <Divider pt={2} borderColor={useColorModeValue("gray.400", "gray.700")} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="md">
          &copy; Teja Balu, {new Date().getFullYear()} | Built using Next.js,
          Chakra UI, and Markdown.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/tejabalu/"
            target={`_blank`}
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as={Link}
            rounded="md"
            aria-label="Github Repo"
            rel="noopener"
            href="https://github.com/tejabalu/Portfolio"
            target="_blank"
            isExternal
            icon={<FaGithub fontSize="18px" />}
          />
          <IconButton
            as={Link}
            rounded="md"
            aria-label="Behance"
            rel="noopener"
            href="https://www.behance.net/tejabalu"
            target="_blank"
            isExternal
            icon={<FaBehance fontSize="18px" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
