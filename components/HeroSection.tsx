import { Box, SlideFade } from "@chakra-ui/react";

import React from "react";

const HeroSection = () => {
	return (
		<SlideFade in={true} offsetY={80}>
			<Box overflow={"hidden"} rounded={"xl"} marginTop={"2em"}>
				<iframe
					src="https://my.spline.design/glasstypecopy-7299a9cefc82e907fffed6caed00ae11/"
					frameBorder="0"
					width="120%"
					height="400em"
					style={{
						marginLeft: "-10%",
					}}
				></iframe>
			</Box>
		</SlideFade>
	);
};

export default HeroSection;
