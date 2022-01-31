import {
	Heading,
	SlideFade,
	List,
	ListItem,
	ListIcon,
	Link,
} from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";

const Experience = () => {
	return (
		<SlideFade in={true} offsetY={80} delay={0.2}>
			<Heading
				as="h1"
				fontSize={{ base: "24px", md: "30px", lg: "36px" }}
				mb={3}
			>
				Experience
			</Heading>
			<Heading mt={10} mb={5} as="h2" size="md">
				Education
			</Heading>
			<List spacing={18} fontSize="18">
				<ListItem display="flex" alignItems="center">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
					/>
					<div>
						Masters of Science in&nbsp;
						<Link
							color="blue.500"
							href="https://gixnetwork.org/program/msti/"
							isExternal
							fontWeight="500"
						>
							Technology Innovation
						</Link>{" "}
						&nbsp; at the University of Washington, Seattle. (2021 -
						2022)
					</div>
				</ListItem>
				<ListItem display="flex" alignItems="center">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
					/>
					<div>
						Masters and Bachelors in Mechanical Engineering at
						IIITDM Kancheepuram, India. (2014 - 2019)
					</div>
				</ListItem>
			</List>
			<Heading mt={10} mb={5} as="h2" size="md">
				Work
			</Heading>
			<List spacing={18} fontSize="18">
				<ListItem display="flex" alignItems="center">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
					/>
					<div>
						Project Manager - IT at&nbsp;
						<Link
							color="blue.500"
							href="https://www.saint-gobain.co.in/"
							isExternal
							fontWeight="500"
						>
							Saint Gobain, India
						</Link>
						. (2019 - 2021)
					</div>
				</ListItem>
				<ListItem display="flex" alignItems="center">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
					/>
					<div>
						Product Design Intern at&nbsp;
						<Link
							color="blue.500"
							href="https://www.getriku.com/"
							isExternal
							fontWeight="500"
						>
							Futuristic Labs, India
						</Link>
						. (2018)
					</div>
				</ListItem>
			</List>
		</SlideFade>
	);
};

export default Experience;
