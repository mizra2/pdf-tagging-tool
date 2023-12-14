import { createSlice } from '@reduxjs/toolkit';

// Slice To Capture Sidebar State

export const sidebarSlice = createSlice({
    name: 'sidebarSlice',
    initialState: {
        isVisible: false
    },
    reducers: {
        toggleSidebarVisibility: (state) => {
            state.isVisible = !state.isVisible;
        }
    }
});

export const { toggleSidebarVisibility } = sidebarSlice.actions;
export const selectIsSidebarVisible = (state) => state.sidebarSlice.isVisible; 
export default sidebarSlice.reducer;

