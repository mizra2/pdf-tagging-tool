import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import pdfPreviewReducer from './slices/pdf-preview-slice';
import sidebarSliceReducer from './slices/sidebar-slice';
import pdfLibraryReducer from './slices/pdf-library';
import drawingReducer from './slices/pdf-draw-slice';
import pdfScaleReducer from './slices/pdf-scale-slice';
import readerOptionsReducer from './slices/reader-options-slice';

export default configureStore({
    reducer: {
        pdfPreview: pdfPreviewReducer,
        sidebarSlice: sidebarSliceReducer,
        pdf: pdfLibraryReducer,
        drawing: drawingReducer,
        pdfScale: pdfScaleReducer,
        readerOptions: readerOptionsReducer
    },
    middleware: getDefaultMiddleware()
});
