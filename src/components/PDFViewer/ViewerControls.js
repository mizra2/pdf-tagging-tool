import { Box, Text } from "@chakra-ui/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { IconButton } from "@chakra-ui/react";
const ViewerControls = ({ pageNumber, nextPageHandler, prevPageHandler, iconColour }) => {
    return (
        <Box
            display="flex"
            width={545}
            justifyContent={"center"}
            alignItems="center"
            gap="79px"
        >
            <IconButton _hover={{ bg: "transparent" }} icon={<MdArrowBackIosNew size="24px" color={iconColour} />} aria-label="Next Page" variant={"ghost"} onClick={prevPageHandler} />
            <Text
                color={iconColour}
                fontFamily="Outfit"
                fontWeight="500"
                lineHeight={"120%"}
                letterSpacing={"0.16px"}>
                {pageNumber}
            </Text>
            <IconButton _hover={{ bg: "transparent" }} icon={<MdArrowForwardIos  size="24px" color={iconColour} />} aria-label="Previous Page" variant={"ghost"} onClick={nextPageHandler} />
        </Box>
    );
}


export default ViewerControls;
