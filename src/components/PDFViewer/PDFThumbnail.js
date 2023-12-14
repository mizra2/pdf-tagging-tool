import { Thumbnail } from "react-pdf";
import { Box, Spinner, useStyleConfig } from "@chakra-ui/react";
import { useState } from "react";

const PDFThumbnail = ({ pageNumber, pageChangeHandler }) => {

    ////    State Managment & Hooks   ////

    const [hasLoaded, setHasLoaded] = useState(false);
    const styles = useStyleConfig("pdfThumbnailStyleConfig")

    const loadingHandler = () => {
        setHasLoaded(true);
    }

    return (
        <Box __css={styles} >
            <Box {...styles.thumbnailContainer}>
                <Thumbnail
                    style={{ position: hasLoaded ? 'static' : 'absolute', left: '-9999px' }}
                    // onItemClick={scrollHander}
                    pageNumber={pageNumber}
                    scale={0.2}
                    onRenderSuccess={loadingHandler}
                    key={`page_${pageNumber}`}
                    loading={<h1>{""}</h1>}
                    onClick={() => pageChangeHandler(pageNumber)}
                />
                {!hasLoaded && (
                    // Spinner is the thumbnail hasn't loaded yet!
                    <Spinner color="blue.500" position="absolute" />
                )}
            </Box>
        </Box >
    );
}

export default PDFThumbnail;
