import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Link,
  SlideFade,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Paragraph from "../components/ThemeComponents/Paragraph";

const About = () => {
  return (
    <div>
      <Head>
        <title>Teja Balu | About</title>
        <meta
          name="description"
          content="Teja Balu | SDE / Technical Product Manager"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        <meta
          property="og:title"
          content="Teja Balu | SDE / Technical Product Manager"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{
                  base: "28px",
                  md: "32px",
                  lg: "36px",
                }}
                mb={4}
              >
                About
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                I’m interested in exploring the space between technology and
                design to solve problems. My interdisciplinary background gives
                me the ability to draw unique insights that lead to product
                innovation. In my free time, I like learning and exploring tech,
                listening to music, reading books (science fiction, fantasy).
              </Paragraph>
              <Divider
                pt={4}
                colorScheme={"whiteAlpha"}
                borderColor="transparent"
              />
              <Paragraph fontSize="xl" lineHeight={1.6}>
                If you are interested in my other works related to design,
                please visit my&nbsp;
                <Link
                  color="blue.500"
                  href="https://www.behance.net/tejabalu"
                  isExternal
                  fontWeight="500"
                >
                  Behance profile
                </Link>
                .
              </Paragraph>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Center>
              <Paragraph
                fontSize="xl"
                lineHeight={1.6}
                w="85%"
                fontStyle="italic"
                padding="1em"
                rounded="md"
                backgroundColor={useColorModeValue("gray.100", "gray.800")}
              >
                “It's the questions we can't answer that teach us the most. They
                teach us how to think. If you give a man an answer, all he gains
                is a little fact. But give him a question and he'll look for his
                own answers.”
                <br />- Patrick Rothfuss
              </Paragraph>
            </Center>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
