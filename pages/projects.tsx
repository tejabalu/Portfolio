import { Stack, Box, Center, Text } from "@chakra-ui/react";
import { NotionBlock } from "notion-blocks-chakra-ui";
import React from "react";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { BlogPost } from "../@types/schema";
import BlogCard from "../components/BlogCard";
import NotionService from "../services/notion-service";

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
	const title = "Test Blog";
	const description = "Welcome to my Notion Blog.";

	return (
		<>
			<Stack>
				<Text>
					{title}
					<br />
					{description}
				</Text>

				<Center>
					<Box>
						{posts.map((post: BlogPost) => (
							<BlogCard key={post.id} post={post} />
						))}
					</Box>
				</Center>
			</Stack>
		</>
	);
};

export default Home;
