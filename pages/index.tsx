import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Experience from "../components/IndexComponents/Experience";
import HeroSection from "../components/IndexComponents/HeroSection";
import Profile from "../components/IndexComponents/Profile";
import Stack from "../components/IndexComponents/Stack";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Teja Balu | Home</title>
        <meta name="description" content="Teja Balu | SDE" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content="https://tejabalu.com/" />
        <meta property="og:title" content="Teja Balu | SDE" />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <HeroSection />
          <Profile />
          <Divider my={10} />
          <Stack />
          <Divider my={10} />
          <Experience />
        </Container>
      </main>
    </div>
  );
}
