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
import {
  SiCsharp,
  SiDocker,
  SiMicrosoftazure,
  SiTypescript,
} from "react-icons/si";

const tools = [
  {
    name: "Python",
    icon: <FaPython fontSize="20px" />,
  },
  {
    name: "React.js",
    icon: <FaReact fontSize="20px" />,
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
  },
  {
    name: "C#",
    icon: <SiCsharp />,
  },
  {
    name: "GIT & Github",
    icon: <FaGitAlt fontSize="20px" />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Azure",
    icon: <SiMicrosoftazure />,
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
        The following are the technologies I've used over the years, and am
        comfortable with.
      </Paragraph>
      <Grid
        mt={6}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        mb={6}
        gap={5}
      >
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool?.name} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Stack;
