import { createSlice } from "@reduxjs/toolkit";
export const pdfScaleSlice = createSlice({

    name: 'pdfScale',
    initialState: {
        scale: 0.6
    },
    reducers: {
        setScale: (state, action) => {
            state.scale = Number(action.payload);
        }
    }
})

export const { setScale } = pdfScaleSlice.actions;
export const selectScale = state => state.pdfScale.scale;

export default pdfScaleSlice.reducer;