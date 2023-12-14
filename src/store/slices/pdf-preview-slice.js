import { createSlice } from '@reduxjs/toolkit';

// Slice For Preview Thummbnail States

export const pdfPreviewSlice = createSlice({
    name: 'pdfPreview',
    initialState: {
        isVisible: false
    },
    reducers: {
        togglePreviewVisibility: (state) => {
            state.isVisible = !state.isVisible;
        }
    }
});

export const { togglePreviewVisibility } = pdfPreviewSlice.actions;
export const selectIsPreviewVisible = (state) => state.pdfPreview.isVisible;
export default pdfPreviewSlice.reducer;
