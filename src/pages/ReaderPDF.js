import { Box } from "@chakra-ui/react";
import PDFViewer from "../components/PDFViewer/PDFViewer";
import usePDFLoader from "../hooks/use-pdf-loader";
import useLoader from "../hooks/use-loader";
import usePageNav from "../hooks/use-page-nav";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectScale } from "../store/slices/pdf-scale-slice";
import { selectIconColour } from "../store/slices/reader-options-slice";

const ReaderPDF = () => {
    const { onLoadSuccess, numPages } = usePDFLoader();
    const { pdfID } = useParams();

    const idParam = pdfID.split('-');
    const minioId = idParam.slice(1).join('-');
    const scale = useSelector(selectScale);

    const pdfURL = useLoader(minioId);
    const iconColor = useSelector(selectIconColour);

    const {
        currentPage,
        hasLoaded,
        setLoading,
        adjustPage
    } = usePageNav(numPages);

    const nextPage = useCallback(() => {
        if (currentPage < numPages) {
            adjustPage(prev => prev + 1);
        }
    }, [numPages, adjustPage, currentPage]);

    // Prev Page Callback
    const prevPage = useCallback(() => {
        if (currentPage > 1) {
            adjustPage(prev => prev - 1);
        }
    }, [adjustPage, currentPage]);

    return (
        <Box display="flex" alignItems="center" justifyContent="center" mt="150px" className="noScrollbar">
            <PDFViewer
                hasLoaded={hasLoaded}
                loadingHandler={setLoading}
                pageNumber={currentPage}
                onLoadSuccess={onLoadSuccess}
                numPages={numPages}
                nextPageHandler={nextPage}
                prevPageHandler={prevPage}
                pdfURL={pdfURL}
                scale={scale}
                iconColour={iconColor}
            />
        </Box>)
}

export default ReaderPDF;