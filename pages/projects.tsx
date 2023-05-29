import { Box, Center, Container, Heading, SlideFade } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import BlogCard from "../components/ThemeComponents/BlogCard";
import Paragraph from "../components/ThemeComponents/Paragraph";

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join("projects"));

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );
    const { data: fontMatter } = matter(markdownWithMeta);

    return {
      fontMatter,
      slug: filename.split(".")[0],
    };
  });

  projects.sort((a, b) => {
    return b.fontMatter.order - a.fontMatter.order;
  });

  return {
    props: {
      projects,
    },
  };
};

export interface postInterface {
  fontMatter: {
    title: string;
    date: string;
    description: string;
    thumbnailURL: string;
    tags: Array<string>;
    order: number;
  };
  slug: string;
}

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
              {projects.map((post: postInterface, index: number) => {
                return <BlogCard key={index} post={post} />;
              })}
            </Box>
          </Center>
        </SlideFade>
      </Container>
    </>
  );
};

export default Home;
