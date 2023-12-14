import { Grid, useStyleConfig } from "@chakra-ui/react";
import NewUpload from "./NewUpload";
import PDFItems from "./PDFItems";
const PDFGrid = ({ pdfItems }) => {

	//// 	Custom Template Values 	////

	const templateColumns = {
		base: "repeat(1, 1fr)",
		sm: "repeat(2, 1fr)",
		md: "repeat(3, 1fr)",
		lg: "repeat(4, 1fr)",
		xl: "repeat(4, 1fr)",
		"2xl": "repeat(5, 1fr)"
	};

	const gapValues = {
		base: "50px",
		sm: "55px",
		md: "60px",
		lg: "65px",
		xl: "70px",
		"2xl": "80px"
	};

	const paddingXValues = {
		base: "40px",
		sm: "50px",
		md: "70px",
		lg: "90px",
		xl: "95px",
		"2xl": "160px"
	};


	// Styles 
	const styles = useStyleConfig("pdfGridStyleConfig")

	return (
		<Grid
			templateColumns={templateColumns}
			gap={gapValues}
			paddingX={paddingXValues}
			sx={styles}
		>
			<NewUpload />
			<PDFItems/>
		</Grid>
	);
};

export default PDFGrid;