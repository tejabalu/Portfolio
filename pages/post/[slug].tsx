import { GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import NotionService from "../../services/notion-service";

const Post = ({
	markdown,
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Container maxW={"6xl"}>
				{post.title}
				<ReactMarkdown>{markdown}</ReactMarkdown>
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const notionService = new NotionService();

	// @ts-ignore
	const p = await notionService.getSingleBlogPost(context.params?.slug);

	if (!p) {
		throw "";
	}

	return {
		props: {
			markdown: p.markdown,
			post: p.post,
		},
	};
};

export async function getStaticPaths() {
	const notionService = new NotionService();

	const posts = await notionService.getPublishedBlogPosts();

	// Because we are generating static paths, you will have to redeploy your site whenever
	// you make a change in Notion.
	const paths = posts.map((post) => {
		return `/post/${post.slug}`;
	});

	return {
		paths,
		fallback: false,
	};
}

export default Post;
