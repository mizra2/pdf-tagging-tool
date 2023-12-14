import { Box, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaFileArrowUp } from 'react-icons/fa6'
import { CloseIcon } from "@chakra-ui/icons";
import { useStyleConfig } from "@chakra-ui/react";

// Item Details Once File Has Been Selected
const UploadItem = ({ fileData, removeFileHandler }) => {
    const styles = useStyleConfig("uploadItemStyleConfig");
    // Calculate Size Of File In MB
    const sizeInMB = (fileData.size / (1024 * 1024)).toFixed(2);
    return (
        <Box __css={styles}>
            <Icon as={FaFileArrowUp} {...styles.icon} />
            <VStack alignItems="start" mr={4} spacing={0}>
                <Text aria-label="file-name" {...styles.text}>{fileData.name}</Text>
                <Text {...styles.sizeText}>{sizeInMB + " MB"}</Text>
            </VStack>
            <IconButton {...styles.closeButton} onClick={removeFileHandler} icon={<CloseIcon />} />
        </Box>
    );
}

export default UploadItem;