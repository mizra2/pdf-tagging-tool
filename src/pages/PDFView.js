import { Fragment, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Slide } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import {
  selectIsPreviewVisible
} from '../store/slices/pdf-preview-slice';
import {
  selectIsSidebarVisible,
  toggleSidebarVisibility
} from '../store/slices/sidebar-slice';
import { selectScale } from '../store/slices/pdf-scale-slice';

import PDFViewer from '../components/PDFViewer/PDFViewer';
import PDFPreview from '../components/PDFViewer/PDFPreview';
import SidebarButton from '../components/Sidebar/SidebarButton';
import Sidebar from '../components/Sidebar/Sidebar';

import usePDFLoader from '../hooks/use-pdf-loader';
import usePageNav from '../hooks/use-page-nav';
import useLoader from '../hooks/use-loader';
import useStoryLoader from '../hooks/use-story-loader';
import useStoryHandlers from '../hooks/use-story-handlers';

const PDFViewPage = () => {
    ////     Hooks & Redux States     ////
    const { onLoadSuccess, numPages } = usePDFLoader();
    const isPreviewVisible = useSelector(selectIsPreviewVisible);
    const isSidebarVisible = useSelector(selectIsSidebarVisible);
    const scale = useSelector(selectScale);
    const dispatch = useDispatch();

    const { pdfID } = useParams();

    const idParam = pdfID.split('-');
    const id = idParam[0];
    const minioId = idParam.slice(1).join('-');

    const pdfURL = useLoader(minioId);

    useStoryLoader(id);

    const {
        currentPage,
        hasLoaded,
        setLoading,
        adjustPage
    } = usePageNav(numPages);

    const { editHandler, saveChangesHandler, addStoryHandler, editExistingHandler, isLoading} = useStoryHandlers(id, adjustPage);

    // Next Page Callback
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
        <Fragment>
            <Box display="flex" alignItems="center" justifyContent="center" mt="150px">
                <PDFViewer
                    hasLoaded={hasLoaded}
                    loadingHandler={setLoading}
                    pageNumber={currentPage}
                    onLoadSuccess={onLoadSuccess}
                    numPages={numPages}
                    nextPageHandler={nextPage}
                    prevPageHandler={prevPage}
                    pdfURL={pdfURL}
                    scale={Number(scale)}
                />
                {isPreviewVisible && <PDFPreview pageNumber={currentPage} setPage={adjustPage} pdfURL={pdfURL} numPages={numPages} />}
                <Slide in={isSidebarVisible} direction='right' width="400px" height="100%" style={{ zIndex: 10, width: "400px" }}>
                    <Sidebar isLoading={isLoading} addStoryHandler={addStoryHandler} editHandler={editHandler} saveChangesHandler={saveChangesHandler} pageNumber={currentPage} editExistingHandler={editExistingHandler}/>
                </Slide>
            </Box>
            <SidebarButton dispatch={dispatch} toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} />
        </Fragment>
    );
}
export default PDFViewPage;