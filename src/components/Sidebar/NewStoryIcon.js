import { Box, useStyleConfig } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const NewStoryIcon = () => {
    const styles = useStyleConfig("newStoryIconStyleConfig");

    const { addIcon, ...boxStyles } = styles;

    return (
        <Box {...boxStyles}>
            <MdAdd {...addIcon} />
        </Box>
    );
}

export default NewStoryIcon;
