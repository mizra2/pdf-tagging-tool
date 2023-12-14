import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// Slice For PDF Library

export const pdfLibrarySlice = createSlice({
    name: 'pdf',
    initialState: {
        pdfList: [],
        isLoading: false,
        newUpload: false,
    },
    reducers: {
        setPdfList: (state, action) => {
            state.pdfList = action.payload;
            state.isLoading = false;
        },
        startLoading: (state) => {
            state.isLoading = true;
        },
        setNewUpload: (state, action) => {
            state.newUpload = action.payload;
        },
    },

});

export const fetchPdfItems = (searchParam = "") => async dispatch => {
    // Dispatch the loading action
    dispatch(pdfLibrarySlice.actions.startLoading());
    // Fetch PDF List
    const pdfListUrl = `${process.env.REACT_APP_BACKEND_URL}/v2/edition/list?search_text=${searchParam}`;
    try {
        // For each PDF we get, fetch the thumbnail for it
        const pdfListResponse = await axios.get(pdfListUrl);
        const pdfItems = pdfListResponse.data.editions;

        const pdfDataWithThumbnails = await Promise.all(
            pdfItems.map(async (pdfItem) => {
                const thumbnailUrl = `${process.env.REACT_APP_BACKEND_URL}/v3/media/public/fetch/tbn/${pdfItem.minioId}`;
                try {
                    const thumbnailResponse = await axios.get(thumbnailUrl, {
                        responseType: "arraybuffer",
                    });
                    const thumbnailBlob = new Blob([thumbnailResponse.data], {
                        type: "image/jpeg",
                    });

                    return {
                        title: pdfItem.fileName,
                        author: pdfItem.author,
                        minioId: pdfItem.minioId,
                        id: pdfItem.id,
                        thumbnail: URL.createObjectURL(thumbnailBlob),
                    };
                } catch (error) {
                    console.log("Error fetching thumbnail for", pdfItem, ":", error?.response?.statusText);
                    return null
                }
            })
        );

        // Ensure that we have thumbnails for all. Don't display ones with missing thumbnails
        const pdfDataFiltered = pdfDataWithThumbnails.filter(data => {
            return data !== null;
        });

        // Update PDF List
        dispatch(pdfLibrarySlice.actions.setPdfList(pdfDataFiltered));
    } catch (err) {
        console.error("Error fetching data", err);
    }
};

export default pdfLibrarySlice.reducer;

// Update state so we can refetch new uploads

export const updateNewUpload = (value) => (dispatch) => {
    dispatch(pdfLibrarySlice.actions.setNewUpload(value));
}
