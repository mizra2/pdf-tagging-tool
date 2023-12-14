import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import { MdNewspaper } from "react-icons/md";
import { selectEditedStory } from "../../store/slices/pdf-draw-slice";
import { useSelector } from "react-redux";

const StoryItem = ({ story, editHandler }) => {

    const styles = useStyleConfig("newStoryStyleConfig");
    const { newStoryText, ...boxStyles } = styles;

    const editiedStory = useSelector(selectEditedStory);


    return (
        <Box {...boxStyles} cursor="pointer">
            <Box w="64px"
                h="64px"
                p="10px 16px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="181px"
                flexShrink={0}
                borderRadius="8px"
                bg="#FE854E"
                onClick={() => editHandler(story)}
            >
                <MdNewspaper size={"25px"} color={editiedStory?.id === story.id ? "rgba(69, 72, 81, 1)" : "white"} />
            </Box>
            <Box>
                <Text {...newStoryText} paddingRight={"50px"}>
                    {story.title}
                </Text>
            </Box>
        </Box>
    );
}

export default StoryItem;