import {
  Box,
  Container,
  Divider,
  Heading,
  Link,
  SlideFade,
} from "@chakra-ui/react";
import Head from "next/head";
import Paragraph from "../components/ThemeComponents/Paragraph";

const About = () => {
  return (
    <div>
      <Head>
        <title>Teja Balu | About</title>
        <meta name="description" content="Teja Balu | Software Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        <meta property="og:title" content="Teja Balu | Software Developer" />
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
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
