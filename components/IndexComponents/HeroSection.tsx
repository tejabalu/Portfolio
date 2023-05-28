import { Box, Center, SlideFade, Spinner } from "@chakra-ui/react";
import { useState } from "react";

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  return (
    <SlideFade in={true} offsetY={80}>
      <Center>
        <Box
          height={"30em"}
          overflow={"hidden"}
          rounded={"xl"}
          marginBottom={"2em"}
          marginTop={"-2em"}
          width={["100%", "100%", "80%", "80%"]}
        >
          {loading && (
            <Center
              width={"100%"}
              height={"100%"}
              zIndex={-999}
              position={"relative"}
            >
              <Spinner />
            </Center>
          )}
          <iframe
            src="https://my.spline.design/glasstypecopy-7299a9cefc82e907fffed6caed00ae11/"
            width="130%"
            height="100%"
            style={{
              marginLeft: "-15%",
              zIndex: 999,
            }}
            onLoad={() => {
              setLoading(false);
            }}
          ></iframe>
        </Box>
      </Center>
    </SlideFade>
  );
};

export default HeroSection;
