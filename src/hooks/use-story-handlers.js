import { useDispatch, useSelector } from 'react-redux';

import {
    setStories,
    setEditing,
    setEditedStory,
    setRectangles,
    toggleCanDraw,
    selectEditedStory,
    selectRectangles,
    selectStories
} from '../store/slices/pdf-draw-slice';
import { selectScale } from '../store/slices/pdf-scale-slice';

import useStoryUpdate from './use-story-update';
import useStoryUploader from './use-story-uploader';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from "react";


const useStoryHandlers = (id, adjustPage) => {

    const dispatch = useDispatch();
    const scale = useSelector(selectScale);
    const stories = useSelector(selectStories);
    const rectangles = useSelector(selectRectangles);
    const editedStory = useSelector(selectEditedStory);
    const [isLoading, setIsLoading] = useState(false);
    const { updateHandler } = useStoryUpdate();
    const { uploadHandler } = useStoryUploader();
    const { pdfID } = useParams();
    const nav = useNavigate();

    // Handles Story Editing i.e when you click a story=
    const editHandler = (story) => {
        // Dispatch Redux States
        dispatch(toggleCanDraw(true));
        dispatch(setEditing(true));
        dispatch(setEditedStory(story));

        // Scale Selections To Current Scale
        const updatedSelections = story.selections.map(s =>
            ({ ...s, x: s.x * scale, y: s.y * scale, width: s.width * scale, height: s.height * scale }));

        // Display Retangles
        dispatch(setRectangles(updatedSelections));

        // Take user to page of first selection :: Default to 1 if N/A
        const pageNumber = story?.selections[0]?.pageNumber !== undefined ? story?.selections[0]?.pageNumber : 0;
        adjustPage(pageNumber + 1);
    }

    // Saves any changes made to a story
    const saveChangesHandler = async () => {
        if (!editedStory) return;

        setIsLoading(true);

        // Find story being saved and scale its selections to real-pdf-size
        const newStory = stories.find(s => s.id === editedStory.id);
        const updatedSelections = rectangles.map(s =>
            ({ ...s, x: s.x / scale, y: s.y / scale, width: s.width / scale, height: s.height / scale }));

        const updatedStories = stories.map(s => s.id === editedStory.id ? { ...s, selections: updatedSelections } : s);

        try {
            // Update selections for story id newStory.id and wait for them to complete
            const response = await updateHandler({ selections: updatedSelections }, newStory.id);
            console.log(response);
            // Update Redux States
            dispatch(setStories(updatedStories));
            dispatch(setEditing(false));
            dispatch(setEditedStory(null));
            dispatch(setRectangles([]));
            dispatch(toggleCanDraw(false));

            // Navigate User
            nav(`/pdf/${pdfID}/tool/edit/${newStory.id}`);
            if(response.status === 200) {
                setIsLoading(false);
            }

        } catch (error) {
            console.error('Error during story upload:', error);
        }
    };

    const editExistingHandler = () => {
        if (!editedStory);
        dispatch(setEditing(false));
        dispatch(setEditedStory(null));
        dispatch(setRectangles([]));
        dispatch(toggleCanDraw(false));
        nav(`/pdf/${pdfID}/tool/edit/${editedStory.id}`);
    }

    const addStoryHandler = async (story) => {
        // Scale Selections 
        const updatedSelections = story.selections.map(s =>
            ({ ...s, x: s.x / scale, y: s.y / scale, width: s.width / scale, height: s.height / scale }));
        const updatedStory = { ...story, selections: updatedSelections };
        const updatedStories = [...stories, updatedStory];

        // Update Redux States
        dispatch(setStories(updatedStories));

        try {
            // Upload new story - wait for the upload to complete
            const response = await uploadHandler(updatedStory, id); // Note the await keyword here
            // Proceed with navigation after the upload is complete
            dispatch(setEditedStory(null));
            dispatch(setEditing(false));
            dispatch(setRectangles([]));
            dispatch(toggleCanDraw(false));
            nav(`/pdf/${pdfID}/tool/edit/${response.id}`);
        } catch (error) {
            console.error('Error during story upload:', error);
        }
    };

    return {
        editHandler,
        saveChangesHandler,
        addStoryHandler,
        editExistingHandler,
        isLoading
    };

}

export default useStoryHandlers;