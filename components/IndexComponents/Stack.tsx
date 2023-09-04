import { Grid, Heading, SlideFade } from "@chakra-ui/react";
import { FaReact, FaSwift, FaWpforms } from "react-icons/fa";
import {
  SiCsharp,
  SiDotnet,
  SiMicrosoftazure,
  SiTypescript,
} from "react-icons/si";
import Paragraph from "../ThemeComponents/Paragraph";
import ToolCard from "../ThemeComponents/ToolCard";

const tools = [
  {
    name: "C#",
    icon: <SiCsharp />,
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
  },
  {
    name: "WPF",
    icon: <FaWpforms fontSize="20px" />,
  },
  {
    name: "Swift",
    icon: <FaSwift fontSize="20px" />,
  },
  {
    name: "SwiftUI",
    icon: <FaSwift fontSize="20px" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React.js",
    icon: <FaReact fontSize="20px" />,
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
        The following are the technologies and frameworks I'm proficient at:
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
