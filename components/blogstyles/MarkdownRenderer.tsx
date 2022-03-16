import React, { Component, useEffect, useState } from "react";
import {
	Box,
	Heading,
	Image,
	Link,
	Alert,
	VStack,
	useColorModeValue,
	UnorderedList,
	ListItem,
	OrderedList,
	Button,
	LightMode,
	ButtonGroup,
	textDecoration,
} from "@chakra-ui/react";
import Paragraph from "../../components/Paragraph";
import {
	CustomGallery,
	DefaultLayout,
	Gallery,
	Item,
} from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default";
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
					color={useColorModeValue("black", "white")}
				>
					{props.children}
				</Heading>
			);
		case 2:
			return (
				<Heading
					as="h2"
					fontSize="4xl"
					fontWeight="bold"
					color={useColorModeValue("black", "white")}
				>
					{props.children}
				</Heading>
			);
		case 3:
			return (
				<Heading
					as="h3"
					fontSize="3xl"
					fontWeight="bold"
					marginTop={4}
					color={useColorModeValue("black", "white")}
				>
					{props.children}
					<Box
						height="1px"
						bg={useColorModeValue("gray.400", "gray.700")}
						marginTop={2}
						marginBottom={4}
						width="40%"
					/>
				</Heading>
			);
		case 4:
			return (
				<Heading
					as="h4"
					fontSize="2xl"
					fontWeight="bold"
					color={useColorModeValue("black", "white")}
				>
					{props.children}
				</Heading>
			);
		case 5:
			return (
				<Heading
					as="h5"
					fontSize="xl"
					fontWeight="bold"
					color={useColorModeValue("black", "white")}
				>
					{props.children}
				</Heading>
			);
		case 6:
			return (
				<Heading
					as="h6"
					fontSize="lg"
					fontWeight="bold"
					color={useColorModeValue("black", "white")}
				>
					{props.children}
				</Heading>
			);
		default:
			return (
				<Heading
					as="h6"
					fontSize="lg"
					fontWeight="bold"
					color={useColorModeValue("black", "white")}
				>
					{props.children}
				</Heading>
			);
	}
}

// export the image renderer
export function ImageRenderer(props) {
	console.log("test");
	const LayoutRef = React.useRef();
	const [width, setWidth] = useState(null);
	const [height, setHeight] = useState(null);

	// useEffect(() => {
	// 	const img = new (window as any).Image();
	// 	img.src = props.src;
	// 	console.log("test2");
	// 	setWidth(img.width);
	// 	setHeight(img.height);
	// });

	// if (width === null || height === null) {
	// 	return <Box>Loading...</Box>;
	// }

	return (
		<VStack
			width="80%"
			marginLeft={"auto"}
			marginRight={"auto"}
			setWidth={setWidth}
			setHeight={setHeight}
			onLoad={() => {
				console.log("test3");
				const image = new (window as any).Image();
				image.src = props.src;
				setWidth(image.width);
				setHeight(image.height);
				console.log(width, height);
			}}
		>
			<CustomGallery layoutRef={LayoutRef} ui={PhotoswipeUIDefault}>
				<Item
					original={props.src}
					thumbnail={props.src}
					width={width}
					height={height}
				>
					{({ open }) => (
						<Image
							ref={props.ref}
							src={props.src}
							onClick={open}
							rounded="md"
						/>
					)}
				</Item>
			</CustomGallery>
			<DefaultLayout
				shareButton={false}
				zoomButton={false}
				fullscreenButton={false}
				ref={LayoutRef}
			/>
			<Paragraph fontSize="sm" fontStyle={"italic"}>
				{props.alt}
			</Paragraph>
		</VStack>
	);
}

// export the paragraph renderer
export function ParagraphRenderer(props) {
	return (
		<Paragraph fontSize={"xl"} marginTop={margintop}>
			{props.children}
		</Paragraph>
	);
}

// export the strong text renderer
export function StrongRenderer(props) {
	return (
		<span
			style={{
				fontWeight: "bold",
				color: useColorModeValue("#2D3748", "#CBD5E0"),
			}}
		>
			{props.children}
		</span>
	);
}

// export the link renderer
export function LinkRenderer(props) {
	return (
		<Link
			href={props.href}
			isExternal={true}
			fontStyle={"italic"}
			textDecorationLine={"underline"}
			color={useColorModeValue("#2D3748", "#CBD5E0")}
		>
			{props.children}
		</Link>
	);

	// <Link href={props.href}>{props.children}</Link>;
}

// export the blockquote renderer
export function BlockquoteRenderer(props) {
	return (
		<Alert
			status="info"
			variant="left-accent"
			marginTop={margintop}
			rounded={"sm"}
			color={useColorModeValue("#2D3748", "#CBD5E0")}
		>
			<Paragraph marginTop={-margintop}>{props.children}</Paragraph>
		</Alert>
	);
}

// export the ordered list item renderer
export function OrderedListItemRenderer(props) {
	return (
		<OrderedList marginTop={-6}>
			<ListItem>{props.children}</ListItem>
		</OrderedList>
	);
}

// export the unordered list item renderer
export function UnorderedListItemRenderer(props) {
	return (
		<UnorderedList marginTop={-7}>
			<ListItem color={useColorModeValue("gray.400", "gray.400")}>
				{props.children}
			</ListItem>
		</UnorderedList>
	);
}

// Hr renderer
export function HrRenderer(props) {
	return (
		<Box
			height="1px"
			bg={useColorModeValue("gray.400", "gray.700")}
			marginTop={6}
			marginBottom={8}
		/>
	);
}
function componentDidMount() {
	throw new Error("Function not implemented.");
}
