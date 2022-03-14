import {
	Stack,
	Box,
	Center,
	Text,
	Container,
	VStack,
	SlideFade,
	Heading,
} from "@chakra-ui/react";
import { NotionBlock } from "notion-blocks-chakra-ui";
import React from "react";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { BlogPost } from "../@types/schema";
import BlogCard from "../components/BlogCard";
import NotionService from "../services/notion-service";
import Paragraph from "../components/Paragraph";

export const getStaticProps: GetStaticProps = async (context) => {
	const notionService = new NotionService();
	const posts = await notionService.getPublishedBlogPosts();

	return {
		props: {
			posts,
		},
	};
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
						These are a collection of projects I did over the years.
					</Paragraph>
				</SlideFade>
				<SlideFade in={true} offsetY={80} delay={0.2}>
					<Center>
						<Box>
							{posts.map((post: BlogPost) => (
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
