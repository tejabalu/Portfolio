import {
	Heading,
	SlideFade,
	List,
	ListItem,
	ListIcon,
	Link,
	Box,
	Divider,
} from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import Paragraph from "../../Paragraph";
import React from "react";

const Experience = () => {
	return (
		<SlideFade in={true} offsetY={80} delay={0.2}>
			{/* <Heading
				as="h1"
				fontSize={{ base: "24px", md: "30px", lg: "36px" }}
				mb={3}
			>
				Experience
			</Heading> */}
			<Heading mt={10} mb={5} as="h2" size="lg">
				Education
			</Heading>
			<List spacing={18} fontSize="18">
				<ListItem display="flex">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
						mt={2.5}
					/>
					<Box>
						<Box fontSize={"xl"}>
							Masters of Science in&nbsp;
							<Link
								color="blue.500"
								href="https://gixnetwork.org/program/msti/"
								isExternal
								fontWeight="500"
							>
								Technology Innovation
							</Link>{" "}
							at the University of Washington, Seattle. (2021 -
							2022)
						</Box>
						<Paragraph fontSize="lg" pl={3}>
							<Divider pt="2" borderColor={"transparent"} />
							An interdisciplinary program focused on taking an
							idea from concepts to development, and to launch.
							<Divider pt="2" borderColor={"transparent"} />
							Curriculum includes core concepts in technology
							development, entrepreneurship, and design thinking,
							ideal for product/Technical product management.
						</Paragraph>
					</Box>
				</ListItem>
				<ListItem display="flex">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
						mt={2}
					/>
					<Box>
						Masters and Bachelors in Mechanical Engineering at
						IIITDM Kancheepuram, India. (2014 - 2019)
					</Box>
				</ListItem>
			</List>
			<Heading mt={10} mb={5} as="h2" size="xl">
				Work
			</Heading>
			<List spacing={18} fontSize="18">
				<ListItem display="flex">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
						mt={2.5}
					/>
					<Box>
						<Box fontSize={"xl"}>
							Project Manager - IT at&nbsp;
							<Link
								color="blue.500"
								href="https://www.saint-gobain.co.in"
								isExternal
								fontWeight="500"
							>
								Saint-Gobain, India
							</Link>{" "}
							(2019 - 2021)
						</Box>
						<Paragraph fontSize="lg" pl={3}>
							<Divider pt="2" borderColor={"transparent"} />
							Led Industry 4.0 and Digital projects for process
							flow optimization across all warehouses of
							Saint-Gobain glass plants in India.
						</Paragraph>
					</Box>
				</ListItem>
				<ListItem display="flex">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
						mt={2.5}
					/>
					<Box>
						<Box fontSize={"xl"}>
							Prototyping Labs Assistnat,&nbsp;
							<Link
								color="blue.500"
								href="https://gixnetwork.org/"
								isExternal
								fontWeight="500"
							>
								Global Innovation Exchange, Bellevue
							</Link>{" "}
							(2019 - 2021)
						</Box>
						<Paragraph fontSize="lg" pl={3}>
							<Divider pt="2" borderColor={"transparent"} />
							Operate various prototyping equipments and tools
							(PCB Fabricating, CNC Milling, 3D printing, Laser
							cutter).
						</Paragraph>
					</Box>
				</ListItem>

				<ListItem display="flex">
					<ListIcon
						as={BsCircleFill}
						color="blue.500"
						fontSize={10}
						mt={2.5}
					/>
					<Box>
						<Box fontSize={"xl"}>
							Product Design Intern at&nbsp;
							<Link
								color="blue.500"
								href="https://www.getriku.com/"
								isExternal
								fontWeight="500"
							>
								Futuristic Labs, India
							</Link>{" "}
							(2018)
						</Box>
						<Paragraph fontSize="lg" pl={3}>
							<Divider pt="2" borderColor={"transparent"} />
							Designed and tested internal mechanism for&nbsp;
							<Link
								color="blue.500"
								href="https://www.getriku.com/"
								isExternal
								fontWeight="500"
							>
								Riku
							</Link>{" "}
							, an automatic rice and curry making machine.
						</Paragraph>
					</Box>
				</ListItem>
			</List>
		</SlideFade>
	);
};

export default Experience;
