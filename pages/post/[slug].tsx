import { GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import {
	Box,
	Container,
	Divider,
	Flex,
	HStack,
	SlideFade,
	Spacer,
	useColorModeValue,
} from "@chakra-ui/react";
import NotionService from "../../services/notion-service";
import Paragraph from "../../components/Paragraph";
import {
	HeadingRenderer,
	ImageRenderer,
	ParagraphRenderer,
	LinkRenderer,
	BlockquoteRenderer,
	StrongRenderer,
	UnorderedListItemRenderer,
	HrRenderer,
} from "../../components/blogstyles/MarkdownRenderer";
import tableOfContents from "../../components/blogstyles/toc";

const Post = ({
	markdown,
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const colorModeValue = useColorModeValue("gray.400", "gray.700");
	return (
		<>
			<SlideFade in={true} offsetY={80}>
				<Container maxW={"container.xl"} display={"flex"}>
					<Box
						width={"35%"}
						paddingRight={4}
						paddingTop={4}
						display={["none", "none", "flex", "flex"]}
						flexDirection={"column"}
					>
						{tableOfContents()}
					</Box>
					<Box width={"100%"} display="flex">
						<Divider
							width={"100%"}
							orientation="vertical"
							flexBasis="1"
							paddingLeft={6}
							display={["none", "none", "block", "block"]}
							borderColor={colorModeValue}
						/>
						<Paragraph fontSize={"xl"}>
							{
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
										li: UnorderedListItemRenderer,
										hr: HrRenderer,
										strong: StrongRenderer,
									}}
								/>
							}
						</Paragraph>
					</Box>
					<Flex alignItems={"top"} direction={"row"}></Flex>
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
		revalidate: 1,
	};
};

export async function getStaticPaths() {
	const notionService = new NotionService();
	// set border color based on colorModeValue (light/dark)
	const posts = await notionService.getPublishedBlogPosts();

	const paths = posts.map((post) => {
		return `/post/${post.slug}`;
	});

	return {
		paths,
		fallback: true,
	};
}

export default Post;
