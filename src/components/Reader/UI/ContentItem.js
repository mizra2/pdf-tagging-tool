import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import { MdNewspaper } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";


const ContentItem = ({ story, onClose, fontColour }) => {

    const styles = useStyleConfig("tableContentStoryItem");
    const { newStoryText, ...boxStyles } = styles;
    const nav = useNavigate();
    const { pdfID } = useParams();
    
    const navHandler = () => {
        nav(`${pdfID}/text/${story.id}`)
    }

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
                bg="rgb(49, 84, 166)"
                onClick={() => {
                    navHandler();
                    onClose()
                }}
            >
                <MdNewspaper size={"25px"} color={"white"} />
            </Box>
            <Box>
                <Text {...newStoryText} color={fontColour} paddingRight={"50px"} aria-label="New Story">
                    {story.title}
                </Text>
            </Box>
        </Box>
    );
}

export default ContentItem;