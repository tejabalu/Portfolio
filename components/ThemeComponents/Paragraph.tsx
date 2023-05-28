import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Paragraph = ({ children, ...props }) => {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Text color={textColor} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;
