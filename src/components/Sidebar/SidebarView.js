import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScaleFade, useDisclosure } from "@chakra-ui/react";

import SidebarHeader from "../Sidebar/SidebarHeader";
import NewStory from "../Sidebar/NewStory";
import SidebarFooter from "./SidebarFooter";
import StoryItem from "./StoryItem";
import AddStoryModal from "../Modal/AddStoryModal/AddStoryModal";

import {
    selectCanDraw,
    selectStories,
    toggleCanDraw,
    setRectangles,
    setEditedStory
} from '../../store/slices/pdf-draw-slice';

import { toggleSidebarVisibility } from "../../store/slices/sidebar-slice";


const SidebarView = ({ editHandler, saveChangesHandler, pageNumber, addStoryHandler, headerType, editExistingHandler, isLoading }) => {

    const canDraw = useSelector(selectCanDraw);
    const stories = useSelector(selectStories);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [title, setTitle] = useState("")
    const handleTitleChange = (event) => setTitle(event.target.value)

    const [author, setAuthor] = useState("")
    const handleAuthorChange = (event) => setAuthor(event.target.value);

    const dispatch = useDispatch();

    const onSidebarClick = () => {
        dispatch(toggleSidebarVisibility());
        dispatch(toggleCanDraw(false));
        dispatch(setRectangles([]));
        dispatch(setEditedStory(null));
    }

    return (
        <Fragment>
            <SidebarHeader onSidebarClick={onSidebarClick} headerType={headerType} />
            <NewStory />

            {stories && (stories.map((story, index) => (
                <StoryItem key={index} story={story} editHandler={editHandler} />
            )))}

            <ScaleFade style={{ width: "100%", bottom: "100px", position: "absolute" }} in={canDraw}>
                {canDraw && <SidebarFooter onOpen={onOpen} saveChangesHandler={saveChangesHandler} editExistingHandler={editExistingHandler} isLoading={isLoading} />}
            </ScaleFade>

            <AddStoryModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                title={title}
                author={author}
                handleTitleChange={handleTitleChange}
                handleAuthorChange={handleAuthorChange}
                addStoryHandler={addStoryHandler}
                pageNumber={pageNumber}
            />

        </Fragment>)
}

export default SidebarView;