import {
  Box,
  Divider,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  UnorderedList,
} from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import Paragraph from "../ThemeComponents/Paragraph";

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
              Software Engineer,&nbsp;
              <Link
                color="blue.500"
                href="https://www.dmcinfo.com/"
                isExternal
                fontWeight="500"
              >
                DMC Inc
              </Link>{" "}
              (January 2023 - Present)
            </Box>
            <Paragraph fontSize="lg" pl={3}>
              <Divider pt="2" borderColor={"transparent"} />
              <UnorderedList>
                <ListItem>
                  Developing windows applications using C#, .NET, and WPF.
                </ListItem>
              </UnorderedList>
            </Paragraph>
          </Box>
        </ListItem>
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
              (July 2022 - September 2022)
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
              Python Foundations Instructor, (April 2022 - May 2022)
            </Box>
            <Paragraph fontSize="lg" pl={3}>
              <Divider pt="2" borderColor={"transparent"} />
              <UnorderedList>
                <ListItem>
                  Volunteer instructor for the python foundations course by Dr.
                  Wesley Beckner. Covered topics including Objected Oriented
                  programming in Python, Numpy, Pandas, and Matplotlib.
                </ListItem>

                <ListItem>
                  Led discussions, instructed over 20 students during in-class
                  assignments, and graded exams.
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
                  Develop path-finding and control algorithms for in-house
                  robotics projects using various components like Raspberry Pi,
                  Arduino, and other BLE devices, programmed using C++.
                </ListItem>

                <ListItem>
                  Develop and maintain the Prototyping Labs website using
                  Jekyll, just-the-docs, hosted on GitHub and GitHub Pages.
                </ListItem>
              </UnorderedList>
            </Paragraph>
          </Box>
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={BsCircleFill} color="blue.500" fontSize={10} mt={2.5} />
          <Box>
            <Box fontSize={"xl"}>
              Software Developer - Digital Transformation & Lean at&nbsp;
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
              <UnorderedList>
                <ListItem>
                  Orchestrated truck-in and truck-out efficiency by implementing
                  a truck-tracking system utilizing RFIDs and a real-time
                  truck-tracking dashboard, resulting in a 25% reduction in
                  truck standby time. Technologies used: Python, Flask, and
                  React.
                  <ListItem>
                    Devised and implemented Python-based heuristic algorithms to
                    optimize truck space utilization, resulting in monthly time
                    savings of 250 man-hours and a 20% reduction in truck space.
                    Successfully deployed across all SG glass plants in India.
                  </ListItem>
                  <ListItem>
                    Designed and implemented a warehouse KPI dashboard for
                    improved visibility of warehouse stocks, leading to 20%
                    additional avoidance of dead stock. Technologies used:
                    Python, Flask, and React.
                  </ListItem>
                </ListItem>
              </UnorderedList>
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
