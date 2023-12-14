import { Page } from "react-pdf";
import { Box, Spinner, useStyleConfig } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import DocumentLoader from "./DocumentLoader";
import ViewerControls from "./ViewerControls";
import ResizableRectangle from "./Rectangles/ResizeableRect";
import Rectangles from "./Rectangles/Rectangles";
import { selectRectangles } from '../../store/slices/pdf-draw-slice';
import useDrawing from "../../hooks/use-drawer";
import useEditor from "../../hooks/use-editor";

const PDFViewer = ({
	pageNumber,
	onLoadSuccess,
	nextPageHandler,
	prevPageHandler,
	loadingHandler,
	hasLoaded,
	pdfURL,
	scale,
	iconColour = "#454851"
}) => {

	const rectangles = useSelector(selectRectangles);
	const styles = useStyleConfig("pdfViewerStyleConfig");

	const { currentRect, handleMouseDown, handleMouseMove, handleMouseUp } = useDrawing(pageNumber);

	const { handleDelete, handleRectanglePositionChange } = useEditor(rectangles);

	return (
		<Box sx={styles}>
			{pdfURL ? (
				<>
					<DocumentLoader file={pdfURL} onLoadSuccess={onLoadSuccess}>
						<Box {...styles.innerBox}>
							<Page
								style={{ position: hasLoaded ? "static" : "absolute", left: "-9999px" }}
								pageNumber={pageNumber}
								renderTextLayer={false}
								scale={scale}
								onRenderSuccess={loadingHandler}
								loading={<h1>{""}</h1>}
								key={`page_${pageNumber}`}
								onMouseDown={handleMouseDown}
								onMouseMove={handleMouseMove}
								onMouseUp={handleMouseUp}
							/>

							{hasLoaded && <Rectangles 
							rectangles={rectangles} 
							pageNumber={pageNumber} 
							handleDelete={handleDelete} 
							handleRectanglePositionChange={handleRectanglePositionChange} />}

							{currentRect && <ResizableRectangle 
							initialPosition={{ x: currentRect.x, y: currentRect.y }} 
							initialSize={{ width: currentRect.width, height: currentRect.height }} 
							isPreview={true} onMouseUp={handleMouseUp} 
							onDelete={() => handleDelete(currentRect.id)} />}

							{!hasLoaded && <Spinner {...styles.spinner} />}

						</Box>
					</DocumentLoader>
					<ViewerControls pageNumber={pageNumber} nextPageHandler={nextPageHandler} prevPageHandler={prevPageHandler} iconColour={iconColour} />
				</>
			) : (
				<Spinner {...styles.spinner} />
			)}
		</Box>
	);
};

export default PDFViewer;