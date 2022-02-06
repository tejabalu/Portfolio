import React from "react";
import Paragraph from "../Paragraph";

export function ParagraphRenderer(props) {
	return (
		<Paragraph fontSize={"xl"} marginTop={"8"}>
			{props.children}
		</Paragraph>
	);
}
