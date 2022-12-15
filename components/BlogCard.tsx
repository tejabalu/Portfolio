import NextImage from "next/image";
import React, { useState } from "react";
// import Link from "next/link";
import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  SlideFade,
  SpaceProps,
  Spinner,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";
import { postInterface } from "../pages/projects";
import Paragraph from "./Paragraph";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: string;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.date}</Text>
    </HStack>
  );
};

const BlogCard = ({ post }: { post: postInterface }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <SlideFade in={true} offsetY={80}>
        <Divider
          mt={8}
          // change color based on color mode
          borderColor={useColorModeValue("gray.400", "gray.700")}
        />
        <Container maxW={"container.lg"} p="8">
          <Link href={`/projects/${post.slug}`}>
            <a style={{ textDecoration: "none" }}>
              <Box
                marginTop={{ base: "1", sm: "5" }}
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                justifyContent="space-between"
                _hover={{
                  transform: "scale(1.03)",
                  textDecoration: "none",
                }}
                transition="transform 0.1s"
              >
                <Box
                  display="flex"
                  flex="1"
                  marginRight="3"
                  position="relative"
                  alignItems="center"
                >
                  <Box
                    width={{ base: "100%", sm: "85%" }}
                    zIndex="2"
                    marginLeft={{ base: "0", sm: "5%" }}
                    marginTop="5%"
                  >
                    {!imageLoaded && <Spinner />}
                    <AspectRatio
                      maxW={"100%"}
                      ratio={4 / 3}
                      position={"relative"}
                    >
                      <Image
                        borderRadius="lg"
                        src={post.fontMatter.thumbnailURL}
                        alt=""
                        objectFit={"cover"}
                        layout={"fill"}
                        as={NextImage}
                        priority={true}
                        onLoadingComplete={() => {
                          setImageLoaded(true);
                        }}
                      />
                    </AspectRatio>
                  </Box>
                  <Box
                    zIndex="1"
                    width="100%"
                    position="absolute"
                    height="100%"
                  >
                    <Box
                      bgGradient={useColorModeValue(
                        "radial(blue.900 1px, transparent 1px)",
                        "radial(blue.200 1px, transparent 1px)"
                      )}
                      backgroundSize="20px 20px"
                      opacity="0.4"
                      height="100%"
                    />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  marginTop={{ base: "3", sm: "0" }}
                >
                  <Heading marginTop="1" marginBottom={4}>
                    {post.slug.replace(/_/g, " ")}
                  </Heading>
                  <Paragraph fontSize="xl" lineHeight={1.6}>
                    {post.fontMatter.description}
                  </Paragraph>
                  <HStack marginTop={4} marginBottom={2}>
                    {post.fontMatter.tags.map((tag: any) => (
                      <Tag
                        size={"md"}
                        variant="solid"
                        colorScheme="blue"
                        key={tag.id}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                  <HStack
                    marginTop="2"
                    spacing="2"
                    display="flex"
                    alignItems="center"
                  >
                    <Text fontWeight="medium">{post.fontMatter.date}</Text>
                  </HStack>
                </Box>
              </Box>
            </a>
          </Link>
        </Container>
      </SlideFade>
    </>
  );
};

export default BlogCard;
