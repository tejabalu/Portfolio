import { Box, Center, Container, SlideFade, Heading } from "@chakra-ui/react";
import React from "react";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogPost } from "../@types/schema";
import BlogCard from "../components/BlogCard";
import NotionService from "../services/notion-service";
import Paragraph from "../components/Paragraph";

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();
  const projects = await notionService.getPublishedBlogPosts();

  return {
    props: {
      projects,
    },
  };
};

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <SlideFade in={true} offsetY={80}>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={6}
            mt={8}
            paddingLeft={10}
          >
            Projects
          </Heading>
          <Paragraph
            fontSize="2xl"
            lineHeight={1.6}
            marginBottom={-4}
            paddingLeft={10}
          >
            The following are a collection of some of the projects I did over
            the years.
          </Paragraph>
        </SlideFade>
        <SlideFade in={true} offsetY={80} delay={0.2}>
          <Center>
            <Box>
              {projects.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </Box>
          </Center>
        </SlideFade>
      </Container>
    </>
  );
};

export default Home;
