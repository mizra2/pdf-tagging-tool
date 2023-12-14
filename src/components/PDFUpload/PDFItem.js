import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useStyleConfig } from "@chakra-ui/react";

// PDF Item 
const PDFItem = ({ title, thumbnail, id, author, minioId }) => {

    ////    Hooks   ////
    const navigate = useNavigate();
    const styles = useStyleConfig("pdfItemStyleConfig");

    // Replace .PDF / .pdf with empty to display as a title

    const factoredTitle = title.replace(/\.pdf/i, '')

    ////  Navigation Handler
    const itemClickHanlder = () => {
        navigate(`/pdf/${id + '-' + minioId}/tool/view`);
    }

    return (
        <Box onClick={itemClickHanlder} __css={styles}>
            <Image src={thumbnail} alt="Sample Episode" __css={styles.img} />
            <Text {...styles.text}>{factoredTitle}</Text>
        </Box>
    );
};

export default PDFItem;
