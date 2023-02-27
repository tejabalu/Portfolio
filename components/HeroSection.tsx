import { Box, Center, SlideFade, Spinner } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

const HeroSection = () => {
  const [loading, setLoading] = useState("none");

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
          <Box width={"130%"} height={"100%"} style={{ marginLeft: "-15%" }}>
            {loading && <Spinner zIndex={10} />}
            <Spline
              scene="https://prod.spline.design/IsqEF9i7tPadTQFz/scene.splinecode"
              onLoad={() => {
                console.log("loaded");
                setLoading("block");
              }}
            />
          </Box>

          {/* <iframe
            src="https://my.spline.design/glasstypecopy-7299a9cefc82e907fffed6caed00ae11/"
            // frameBorder="0"
            width="130%"
            height="400em"
            style={{
              marginLeft: "-15%",
            }}
          ></iframe> */}
        </Box>
      </Center>
    </SlideFade>
  );
};

export default HeroSection;
