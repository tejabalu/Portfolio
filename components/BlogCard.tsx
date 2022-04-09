import React from "react";
import { FunctionComponent } from "react";
// import Link from "next/link";
import { BlogPost } from "../@types/schema";
import dayjs from "dayjs";

import {
	Box,
	Heading,
	Link,
	Image,
	Text,
	Divider,
	HStack,
	Tag,
	Wrap,
	WrapItem,
	SpaceProps,
	useColorModeValue,
	Container,
	VStack,
	SlideFade,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

type BlogCardProps = {
	post: BlogPost;
};

interface IBlogTags {
	tags: Array<string>;
	marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
	return (
		<HStack spacing={2} marginTop={props.marginTop}>
			{props.tags.map((tag) => {
				return (
					<Tag
						size={"md"}
						variant="solid"
						colorScheme="blue"
						key={tag}
					>
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

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
	return (
		<>
			<SlideFade in={true} offsetY={80}>
				<Divider
					mt={8}
					// change color based on color mode
					borderColor={useColorModeValue("gray.400", "gray.700")}
				/>
				<Container maxW={"container.lg"} p="8">
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
						as={Link}
						href={`/projects/${post.slug}`}
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
								<Image
									borderRadius="lg"
									src={post.cover}
									alt="some good alt text"
									objectFit="contain"
								/>
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
								{post.title}
							</Heading>
							<Paragraph fontSize="xl" lineHeight={1.6}>
								{post.description}
							</Paragraph>
							<HStack marginTop={4} marginBottom={2}>
								{post.tags.map((tag) => (
									<Tag
										size={"md"}
										variant="solid"
										colorScheme="blue"
										key={tag.id}
									>
										{tag.name}
									</Tag>
								))}
							</HStack>
							<HStack
								marginTop="2"
								spacing="2"
								display="flex"
								alignItems="center"
							>
								<Text fontWeight="medium">{post.date}</Text>
							</HStack>
						</Box>
					</Box>
				</Container>
			</SlideFade>
		</>
	);
};

export default BlogCard;
