import { createSlice } from "@reduxjs/toolkit";
export const readerOptionsSlice = createSlice({
    name: 'readerOptions',
    initialState: {
        backgroundColour: "#fdf5eb",
        fontSize: 28,
        fontFamily: "PT Serif",
        fontColour: "#454851",
        iconColour: "rgba(69, 72, 81, 1)"
    },
    reducers: {
        setBackgroundColour: (state, action) => {
            state.backgroundColour = action.payload;
        },
        setFontSize: (state, action) => {
            state.fontSize = action.payload;
        },
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload;
        },
        setFontColour: (state, action) => {
            state.fontColour = action.payload;

        },
        setIconColour: (state, action) => {
            state.iconColour = action.payload

        }
    }
})

export const { setBackgroundColour, setFontSize, setFontFamily, setFontColour, setIconColour } = readerOptionsSlice.actions;

export const selectBackgroundColour = (state) => state.readerOptions.backgroundColour;
export const selectFontSize = (state) => state.readerOptions.fontSize;
export const selectFontFamily = (state) => state.readerOptions.fontFamily;
export const selectFontColour = (state) => state.readerOptions.fontColour;
export const selectIconColour = (state) => state.readerOptions.iconColour;

export default readerOptionsSlice.reducer