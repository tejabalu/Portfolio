import ToolCard from "../../ToolCard";
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import {
	FaNodeJs,
	FaReact,
	FaJs,
	FaJava,
	FaGitAlt,
	FaPython,
} from "react-icons/fa";
import { Icon } from "@iconify/react";

import Paragraph from "../../Paragraph";
import React from "react";

const toolsPm = [
	{
		name: "Agile Development",
		icon: <Icon icon="uiw:reload" />,
	},
	{
		name: "A/B Testing",
		icon: <Icon icon="healthicons:i-exam-multiple-choice" />,
	},
	{
		name: "Prioritization & Strategy",
		icon: <Icon icon="mdi:priority-high" />,
	},
];

const tools = [
	{
		name: "React.js",
		icon: <FaReact fontSize="20px" />,
	},
	{
		name: "Javascript",
		icon: <FaJs fontSize="20px" />,
	},
	{
		name: "GIT & Github",
		icon: <FaGitAlt fontSize="20px" />,
	},
	{
		name: "Python",
		icon: <FaPython fontSize="20px" />,
	},
	{
		name: "Java",
		icon: <FaJava fontSize="20px" />,
	},
	{
		name: "Machine Learning",
		icon: <Icon icon="carbon:machine-learning-model" />,
	},
];

const toolsMech = [
	{
		name: "Fusion 360",
		icon: <Icon icon="file-icons:3d-model" />,
	},
	{
		name: "3D Printing",
		icon: <Icon icon="mdi:printer-3d-nozzle" />,
	},
	{
		name: "Fabrication",
		icon: <Icon icon="ic:twotone-precision-manufacturing" />,
	},
];

const Stack = () => {
	return (
		<SlideFade in={true} offsetY={80} delay={0.2}>
			<Heading
				as="h1"
				fontSize={{ base: "24px", md: "30px", lg: "36px" }}
				mb={3}
			>
				Skills
			</Heading>
			<Paragraph fontSize="xl" lineHeight={1.6}>
				Having worked as a Project Manager, these were some of the
				skills I applied at work.
			</Paragraph>
			<Grid
				mt={6}
				templateColumns={[
					"1fr",
					"1fr",
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
				]}
				mb={6}
				gap={5}
			>
				{toolsPm.map((tool) => (
					<ToolCard tool={tool} key={tool?.name} />
				))}
			</Grid>
			<Paragraph fontSize="xl" lineHeight={1.6}>
				Being a self-taught programmer, these are the technologies and
				stacks I'm interested in, and actively learning.
			</Paragraph>
			<Grid
				mt={6}
				templateColumns={[
					"1fr",
					"1fr",
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
				]}
				mb={6}
				gap={5}
			>
				{tools.map((tool) => (
					<ToolCard tool={tool} key={tool?.name} />
				))}
			</Grid>
			<Paragraph fontSize="xl" lineHeight={1.6}>
				Having majored in mechanical engineering, these are the skills I
				explore in my free time.
			</Paragraph>
			<Grid
				mt={6}
				templateColumns={[
					"1fr",
					"1fr",
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
				]}
				mb={6}
				gap={5}
			>
				{toolsMech.map((tool) => (
					<ToolCard tool={tool} key={tool?.name} />
				))}
			</Grid>
		</SlideFade>
	);
};

export default Stack;
