import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import NewStoryIcon from "./NewStoryIcon";
import {
    toggleCanDraw,
    setEditing,
    setRectangles,
    setEditedStory
} from "../../store/slices/pdf-draw-slice";

const NewStory = () => {
    const styles = useStyleConfig("newStoryStyleConfig");
    const { newStoryText, ...boxStyles } = styles;
    const dispatch = useDispatch();

    const testHandler = () => {
        dispatch(toggleCanDraw(true));
        dispatch(setEditing(false));
        dispatch(setRectangles([]));
        dispatch(setEditedStory(null));
    }
    return (
        <Box {...boxStyles} cursor="pointer" onClick={testHandler}>
            <NewStoryIcon />
            <Box>
                <Text {...newStoryText} aria-label="New Story">
                    New Story
                </Text>
            </Box>
        </Box>
    );
}

export default NewStory;