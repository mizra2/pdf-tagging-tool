import { Box, IconButton, ScaleFade } from "@chakra-ui/react";
import EditButton from "../Icons/EditButton";

const SidebarButton = ({isSidebarVisible, toggleSidebarVisibility, dispatch}) => {
    return (<Box right={[0, 25, 55, 125]} bottom={20} position={"fixed"}>
        <ScaleFade initialScale={0.2} in={!isSidebarVisible}>
            <IconButton
                icon={<EditButton />}
                aria-label="Edit Icon"
                _hover={"transparent"}
                width={"100%"}
                height={"100%"}
                isRound={true}
                variant={"link"}
                onClick={() => dispatch(toggleSidebarVisibility())}
            />
        </ScaleFade>
    </Box>)

}

export default SidebarButton;