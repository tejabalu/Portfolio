import { GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import { Container, Heading, SlideFade } from "@chakra-ui/react";
import Head from "next/head";
import NotionService from "../../services/notion-service";
import Paragraph from "../../components/Paragraph";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {
	HeadingRenderer,
	ImageRenderer,
	ParagraphRenderer,
	LinkRenderer,
	BlockquoteRenderer,
	ListItemRenderer,
} from "../../components/blogstyles/MarkdownRenderer";

const newTheme = {
	p: (props) => {
		const { children } = props;
		return <Paragraph fontSize="lg">{children}</Paragraph>;
	},
};

const Post = ({
	markdown,
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<SlideFade in={true} offsetY={80}>
				<Container maxW={"6xl"}>
					<Paragraph fontSize="xl">{post.title}</Paragraph>
					<ReactMarkdown
						children={markdown}
						components={{
							h1: HeadingRenderer,
							h2: HeadingRenderer,
							h3: HeadingRenderer,
							h4: HeadingRenderer,
							h5: HeadingRenderer,
							h6: HeadingRenderer,
							p: ParagraphRenderer,
							img: ImageRenderer,
							a: LinkRenderer,
							blockquote: BlockquoteRenderer,
							li: ListItemRenderer,
						}}
					/>
				</Container>
			</SlideFade>
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
