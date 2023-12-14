import { createSlice } from "@reduxjs/toolkit";

export const drawingSlice = createSlice({
    name: 'drawing',
    initialState: {
        canDraw: false,
        rectangles: [],
        editing: false,
        editedStory: null,
        stories: []
    },
    reducers: {
        toggleCanDraw: (state, action) => {
            state.canDraw = action.payload;
        },
        addRectangle: (state, action) => {
            state.rectangles.push(action.payload);
        },
        setEditing: (state, action) => {
            state.editing = action.payload;
        },
        setEditedStory: (state, action) => {
            state.editedStory = action.payload;
        },
        setRectangles: (state, action) => {
            state.rectangles = action.payload;
        },
        setStories: (state, action) => {
            state.stories = action.payload;
        }
    }
})

export const { toggleCanDraw, addRectangle, setEditing, setEditedStory, setRectangles, setStories } = drawingSlice.actions;

// Selectors
export const selectCanDraw = state => state.drawing.canDraw;
export const selectRectangles = state => state.drawing.rectangles;
export const selectEditing = state => state.drawing.editing;
export const selectEditedStory = state => state.drawing.editedStory;
export const selectStories = state => state.drawing.stories;

export default drawingSlice.reducer;
