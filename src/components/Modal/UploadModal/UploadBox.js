import { Box, Input } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/react";

// Upload Box - Stage Area

const UploadBox = ({ fileHandler }) => {
    const styles = useStyleConfig("uploadBoxStyleConfig");
    return (
        <Box sx={styles}>
            <FaUpload {...styles.icon} />
            <Text {...styles.text}>
                Click here to upload or drag and drop to upload
            </Text>
            <Input {...styles.input} onChange={fileHandler} aria-label="Upload" zIndex={1}/>
        </Box>
    );
}


export default UploadBox;