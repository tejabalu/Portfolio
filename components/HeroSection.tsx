import { Box, Center, SlideFade } from "@chakra-ui/react";

import React from "react";

const HeroSection = () => {
	return (
		<SlideFade in={true} offsetY={80}>
			<Center>
				<Box
					overflow={"hidden"}
					rounded={"xl"}
					marginBottom={"2em"}
					marginTop={"-2em"}
					width={["100%", "100%", "80%", "80%"]}
				>
					<iframe
						src="https://my.spline.design/glasstypecopy-7299a9cefc82e907fffed6caed00ae11/"
						frameBorder="0"
						width="130%"
						height="400em"
						style={{
							marginLeft: "-15%",
						}}
					></iframe>
				</Box>
			</Center>
		</SlideFade>
	);
};

export default HeroSection;
