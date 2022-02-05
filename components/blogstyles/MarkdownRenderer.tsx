import React, { Component } from "react";
import {
	Center,
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	Alert,
} from "@chakra-ui/react";
import Paragraph from "../Paragraph";

const margintop = "8";

// export the heading renderer using the headingStyles
export function HeadingRenderer(props) {
	switch (props.level) {
		case 1:
			return (
				<Heading
					as="h1"
					fontSize={{ base: "28px", md: "40px", lg: "48px" }}
					mb={4}
				>
					{props.children}
				</Heading>
			);
		case 2:
			return (
				<Heading as="h2" fontSize="4xl" fontWeight="bold">
					{props.children}
				</Heading>
			);
		case 3:
			return (
				<Heading as="h3" fontSize="3xl" fontWeight="bold">
					{props.children}
				</Heading>
			);
		case 4:
			return (
				<Heading as="h4" fontSize="2xl" fontWeight="bold">
					{props.children}
				</Heading>
			);
		case 5:
			return (
				<Heading as="h5" fontSize="xl" fontWeight="bold">
					{props.children}
				</Heading>
			);
		case 6:
			return (
				<Heading as="h6" fontSize="lg" fontWeight="bold">
					{props.children}
				</Heading>
			);
		default:
			return (
				<Heading as="h6" fontSize="lg" fontWeight="bold">
					{props.children}
				</Heading>
			);
	}
}

// export the image renderer
export function ImageRenderer(props) {
	return (
		<Center width="80%">
			<Image src={props.src} alt={props.alt} rounded={"md"} />
			{/* add caption to image */}
			{props.caption && (
				<Text fontSize="sm" color="gray.500">
					{props.caption}
				</Text>
			)}
		</Center>
	);
}

// export the paragraph renderer
export function ParagraphRenderer(props) {
	return (
		<Text fontSize="xl" marginTop={margintop}>
			{props.children}
		</Text>
	);
}

// export the link renderer
export function LinkRenderer(props) {
	return <Link href={props.href}>{props.children}</Link>;
}

// export the blockquote renderer
export function BlockquoteRenderer(props) {
	return (
		<Alert
			status="info"
			variant="left-accent"
			marginTop={margintop}
			rounded={"sm"}
		>
			<Text marginTop={-margintop}>{props.children}</Text>
		</Alert>
	);
}

// export the list item renderer
export function ListItemRenderer(props) {
	return (
		<Text fontSize="lg" fontWeight="bold">
			{props.children}
		</Text>
	);
}
