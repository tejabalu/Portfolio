import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";

import Stack from "../components/pages/index/Stack";
import Experience from "../components/pages/index/Experience";
import Profile from "../components/pages/index/Profile";
import React from "react";
import HeroSection from "../components/HeroSection";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Teja Balu | Home</title>
				<meta
					name="description"
					content="Teja Balu | SDE / Technical Product Manager"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="follow, index" />
				<meta property="og:url" content="https://tejabalu.com/" />
				<meta
					property="og:title"
					content="Teja Balu | SDE / Technical Product Manager"
				/>
				<meta property="og:image" content="/meta-image.jpg" />
			</Head>
			<main>
				<Container maxW="container.lg" mt={["5", "10"]}>
					<Profile />
					<Divider my={10} />
					<Stack />
					<Divider my={10} />
					<Experience />
					<HeroSection />
				</Container>
			</main>
		</div>
	);
}
