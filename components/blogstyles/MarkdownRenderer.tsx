import {
  Alert,
  AspectRatio,
  Box,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Spinner,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import React, { useState } from "react";
import Paragraph from "../../components/Paragraph";
const marginTop = "8";

// export the heading renderer using the headingStyles
// @ts-ignore
export function HeadingRenderer(props) {
  switch (props.level) {
    case 1:
      return (
        <Heading
          id={props.children.toString().toLowerCase().replace(/\s/g, "-")}
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
          id={props.children.toString().toLowerCase().replace(/\s/g, "-")}
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
          id={props.children.toString().toLowerCase().replace(/\s/g, "-")}
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
          id={props.children.toString().toLowerCase().replace(/\s/g, "-")}
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
          id={props.children.toString().toLowerCase().replace(/\s/g, "-")}
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
          id={props.children.toString().toLowerCase().replace(/\s/g, "-")}
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
          id={props.children.toString().toLowerCase().replace(/\s/g, "-")}
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
// @ts-ignore
export function ImageRenderer(props) {
  const LayoutRef = React.useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <VStack>
      {!loaded && <Spinner />}
      <AspectRatio
        maxH={"80vh"}
        ratio={width / height}
        position={"relative"}
        width="80%"
        marginLeft={"auto"}
        marginRight={"auto"}
      >
        <Image
          ref={props.ref}
          rounded="md"
          src={props.src.replace("../public", "")}
          as={NextImage}
          layout={"fill"}
          objectFit={"contain"}
          onLoadingComplete={(target: any) => {
            setWidth(target.naturalWidth);
            setHeight(target.naturalHeight);
            setLoaded(true);
          }}
        />
      </AspectRatio>
      <Paragraph fontSize="sm" fontStyle={"italic"}>
        {props.alt}
      </Paragraph>
    </VStack>
  );
}

// export the paragraph renderer
// @ts-ignore
export function ParagraphRenderer(props) {
  return (
    <Paragraph fontSize={"xl"} marginTop={marginTop}>
      {props.children}
    </Paragraph>
  );
}

// export the strong text renderer
// @ts-ignore
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
// @ts-ignore
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
}

// export the blockquote renderer
// @ts-ignore
export function BlockquoteRenderer(props) {
  return (
    <Alert
      status="info"
      variant="left-accent"
      marginTop={marginTop}
      rounded={"sm"}
      color={useColorModeValue("#2D3748", "#CBD5E0")}
    >
      <Paragraph marginTop={-marginTop}>{props.children}</Paragraph>
    </Alert>
  );
}

// export the ordered list item renderer
// @ts-ignore
export function OrderedListItemRenderer(props) {
  return (
    <OrderedList>
      <ListItem>{props.children}</ListItem>
    </OrderedList>
  );
}

// export the unordered list item renderer
// @ts-ignore
export function UnorderedListItemRenderer(props) {
  return (
    <UnorderedList>
      <ListItem>{props.children}</ListItem>
    </UnorderedList>
  );
}

// Hr renderer
// @ts-ignore
export function HrRenderer() {
  return (
    <Box
      height="1px"
      bg={useColorModeValue("gray.400", "gray.700")}
      marginTop={6}
      marginBottom={8}
    />
  );
}
