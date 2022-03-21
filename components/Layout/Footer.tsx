import {
	Box,
	Stack,
	Text,
	Container,
	ButtonGroup,
	IconButton,
	Link,
	Divider,
	Icon,
} from "@chakra-ui/react";
import { SiChakraui } from "react-icons/si";
import React from "react";

import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaReact,
	FaBehance,
} from "react-icons/fa";
import Logo from "../Logo";

const Footer = () => (
	<Box
		as="footer"
		role="contentinfo"
		mx="auto"
		maxW="7xl"
		py="12"
		px={{ base: "4", md: "8" }}
	>
		<Container maxW="container.lg">
			<Divider pt={2} />
			<Stack
				direction="row"
				align="center"
				justify="space-between"
				pt={5}
			>
				<Text fontSize="md">
					&copy; {new Date().getFullYear()} | Built by Teja Balu using
					Next.js, Chakra UI, and Notion.
				</Text>
				<ButtonGroup variant="ghost">
					<IconButton
						as="a"
						href="https://www.linkedin.com/in/tejabalu/"
						target={`_blank`}
						aria-label="Linkedin"
						icon={<FaLinkedin fontSize="20px" />}
					/>
					<IconButton
						as={Link}
						rounded="md"
						aria-label="Github Repo"
						rel="noopener"
						href="https://github.com/tejabalu/Portfolio"
						target="_blank"
						isExternal
						icon={<FaGithub fontSize="18px" />}
					/>
					<IconButton
						as={Link}
						rounded="md"
						aria-label="Behance"
						rel="noopener"
						href="https://www.behance.net/tejabalu"
						target="_blank"
						isExternal
						icon={<FaBehance fontSize="18px" />}
					/>
				</ButtonGroup>
			</Stack>
		</Container>
	</Box>
);

export default Footer;
