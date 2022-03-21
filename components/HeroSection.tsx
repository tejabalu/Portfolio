import { Box, SlideFade } from "@chakra-ui/react";

import React from "react";

const HeroSection = () => {
	return (
		<SlideFade in={true} offsetY={80}>
			<Box marginBottom={"-1em"} marginTop={"-1em"}>
				<iframe
					src="https://my.spline.design/miniroomcopy-ad8331c62ca1a1cd3cf73e143cf03212/"
					frameBorder="0"
					width="100%"
					height="400em"
				></iframe>
			</Box>
		</SlideFade>
	);
};

export default HeroSection;
