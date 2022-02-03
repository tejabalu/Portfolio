import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

const index = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default index;
