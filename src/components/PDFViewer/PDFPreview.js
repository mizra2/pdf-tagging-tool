import { Box, useStyleConfig } from "@chakra-ui/react"
import DocumentLoader from "./DocumentLoader";
import PDFThumbnail from "./PDFThumbnail";
import '../../App.css'


const PDFPreview = ({ scrollRef, setPage, pdfURL, numPages }) => {
    
    const styles = useStyleConfig("pdfPreviewStyleConfig")

    const pageChangeHandler = (pageNumber) => {
        setPage(pageNumber);
    }

    return (
        <Box sx={styles} className="noScrollbar" boxShadow={"1px 0px 4px 0px rgba(0, 0, 0, 0.6)"}>
            <Box>
                <DocumentLoader file={pdfURL} >
                    {
                        Array.from({ length: numPages }).map((_, index) => (
                            <PDFThumbnail
                                key={index}
                                scrollRef={scrollRef}
                                pageNumber={index + 1}
                                pageChangeHandler={pageChangeHandler}
                            />
                        ))
                    }
                </DocumentLoader>
            </Box>
        </Box>
    );
}


export default PDFPreview;