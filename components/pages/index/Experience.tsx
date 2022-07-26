import {
  Heading,
  SlideFade,
  List,
  ListItem,
  ListIcon,
  Link,
  Box,
  Divider,
  UnorderedList,
} from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import Paragraph from "../../Paragraph";
import React from "react";

const Experience = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading mt={10} mb={5} as="h2" size="xl">
        Work
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem display="flex">
          <ListIcon as={BsCircleFill} color="blue.500" fontSize={10} mt={2.5} />
          <Box>
            <Box fontSize={"xl"}>
              Full-Stack Software Development Intern at&nbsp;
              <Link
                color="blue.500"
                href="https://www.sensoriafitness.com/"
                isExternal
                fontWeight="500"
              >
                Sensoria Inc.
              </Link>{" "}
              (July 2022 - Present)
            </Box>
            <Paragraph fontSize="lg" pl={3}>
              <Divider pt="2" borderColor={"transparent"} />
              <UnorderedList>
                <ListItem>
                  Responsible for developing web applications that display
                  real-time sensor data analytics using Azure.NET core MVC,
                  Razor Pages, and retrieving data from custom API gateways to
                  populate.
                </ListItem>
                <ListItem>
                  Develop RESTful microservices with independent storage
                  systems, orchestrate and collate multiple API flows through
                  the API gateway to interface with the front-end.
                </ListItem>
              </UnorderedList>
            </Paragraph>
          </Box>
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={BsCircleFill} color="blue.500" fontSize={10} mt={2.5} />
          <Box>
            <Box fontSize={"xl"}>
              Prototyping Labs Technical Assistant,&nbsp;
              <Link
                color="blue.500"
                href="https://gixnetwork.org/"
                isExternal
                fontWeight="500"
              >
                Global Innovation Exchange, Bellevue
              </Link>{" "}
              (Nov 2021 - Present)
            </Box>
            <Paragraph fontSize="lg" pl={3}>
              <Divider pt="2" borderColor={"transparent"} />
              <UnorderedList>
                <ListItem>
                  Prototype single-sided and double-sided circuit boards:
                  generate schematics create routing using Fusion 360 and Eagle,
                  fabricate using LPKF Laser U4, Protomat S4, OtherMill.
                </ListItem>

                <ListItem>
                  Model, generate toolpaths, and 3D print components using
                  Fusion 360, Formlabs Form 2, Stratasys F170, Ultimaker S2.
                </ListItem>
              </UnorderedList>
            </Paragraph>
          </Box>
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={BsCircleFill} color="blue.500" fontSize={10} mt={2.5} />
          <Box>
            <Box fontSize={"xl"}>
              Information Systems Engineer - Digital Transformation & Lean
              at&nbsp;
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
              Spearheaded a team of four developers in developing industrial
              software applications (Manufacturing Execution Systems) for
              Industry 4.0 projects, focused on warehouse applications and
              process-flow optimizations, implemented across all SG Glass plants
              in India.
            </Paragraph>
          </Box>
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="lg">
        Education
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem display="flex">
          <ListIcon as={BsCircleFill} color="blue.500" fontSize={10} mt={2.5} />
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
              at the University of Washington, Seattle. (2021 - 2022)
            </Box>
            <Paragraph fontSize="lg" pl={3}>
              <Divider pt="2" borderColor={"transparent"} />
              <UnorderedList>
                <ListItem>
                  An interdisciplinary program focused on taking an idea from
                  concepts to development, and to launch.
                </ListItem>
                <ListItem>
                  Curriculum includes core concepts in technology development,
                  entrepreneurship, and design thinking, ideal for Software and
                  Technical Product Management.
                </ListItem>
              </UnorderedList>
            </Paragraph>
          </Box>
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={BsCircleFill} color="blue.500" fontSize={10} mt={2} />
          <Box>
            Masters and Bachelors in Mechanical Engineering at IIITDM
            Kancheepuram, India. (2014 - 2019)
          </Box>
        </ListItem>
      </List>
    </SlideFade>
  );
};

export default Experience;
