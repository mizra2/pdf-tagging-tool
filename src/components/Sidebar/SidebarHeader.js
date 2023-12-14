import { IconButton, Box, useStyleConfig, useToast } from "@chakra-ui/react";
import { MdArrowBackIos, MdLink } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectStories } from "../../store/slices/pdf-draw-slice";

const SidebarHeader = ({ onSidebarClick, headerType }) => {
    const styles = useStyleConfig("sidebarHeaderStyleConfig");
    const toast = useToast();
    const stories = useSelector(selectStories);

    const { pdfID } = useParams();

    const clipboardHandler = () => {
        {

            if (stories.length === 0) {
                toast({
                    title: "Please add a story first using the edit menu!",
                    status: "error",
                    isClosable: true,
                    duration: 2000,
                    position: "top"
                })
                return;
            }

            navigator.clipboard.writeText(`${window.location.origin}/reader/${pdfID}/text/${stories[0].id}`)
            toast({
                title: "Copied to clipboard!",
                status: "success",
                isClosable: true,
                duration: 2000,
                position: "top"
            })
        }
    }

    return (<Box
        __css={styles}
    >
        {headerType === "view" && (<>

            <IconButton icon={<MdArrowBackIos {...styles.backButtonIcon.icon} />} bg={"transparent"} _hover={"transparent"} onClick={onSidebarClick} />
            <IconButton icon={<MdLink {...styles.backButtonIcon.icon} />} bg={"transparent"} _hover={"transparent"} onClick={clipboardHandler} />

        </>)}
    </Box>);
}

export default SidebarHeader;
