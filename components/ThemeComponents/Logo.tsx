import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Logo = () => {
	const { colorMode } = useColorMode();
	const router = useRouter();
	return (
		<Box className="logo" onClick={() => router.push("/")}>
			<svg
				version="1.1"
				fill={`${colorMode === "light" ? "black" : "#4299e1"}`}
				x="0px"
				y="0px"
				width="70"
				viewBox="0 0 1000 1000"
				style={{ overflow: "visible" }}
			>
				<defs></defs>
				<g>
					<polygon points="541.22 307.96 542.51 1000 655.59 938.48 654.45 323.87 541.22 307.96" />
					<polygon points="910.08 99.42 202.67 0 89.58 61.52 796.99 160.94 797.33 343.95 910.42 282.44 910.08 99.42" />
				</g>
			</svg>
		</Box>
	);
};

export default Logo;
