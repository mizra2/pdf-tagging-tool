import { Box, IconButton } from "@chakra-ui/react"
import { MdOutlineFormatListBulleted } from "react-icons/md"

const ContentIcon = ({stateMode, onOpen, iconColor}) => {

    return (<Box gap={"20px"} flexDir={"row"} display={"flex"} alignItems={"center"}>
        {
            stateMode === "text" && (
                <IconButton
                    _hover={{ bg: "transparent" }}
                    icon={<MdOutlineFormatListBulleted size={"28px"} color={iconColor} />}
                    variant={"ghost"}
                    onClick={onOpen}
                />
            )
        }
    </Box>)

}

export default ContentIcon;