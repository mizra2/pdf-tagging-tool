// SidebarFooter.js
import { Button, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCanDraw, selectEditing } from "../../store/slices/pdf-draw-slice";

const SidebarFooter = ({ onOpen, saveChangesHandler, editExistingHandler, isLoading }) => {

    const editing = useSelector(selectEditing);
    const canDraw = useSelector(selectCanDraw);

    return (
        <Box mt="auto" width={"100%"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>

            {!editing && canDraw && (<Button
                size="lg"
                colorScheme="orange"
                width={"90%"}
                backgroundColor="rgba(254, 133, 78, 1)"
                _hover={{
                    backgroundColor: "rgba(254, 133, 78, 0.8)"
                }}
                onClick={() => {
                    onOpen();
                }}
            >
                Add Story
            </Button>)}

            {editing && (<Button
                size="lg"
                colorScheme="orange"
                width={"90%"}
                backgroundColor="rgba(254, 133, 78, 1)"
                _hover={{
                    backgroundColor: "rgba(254, 133, 78, 0.8)"
                }}
                onClick={editExistingHandler}
            >
                Edit Existing Text
            </Button>
            )}
            {editing && (<Button
                size="lg"
                colorScheme="orange"
                width={"90%"}
                backgroundColor="rgb(49, 84, 166)"
                _hover={{
                    backgroundColor: "rgba(49, 84, 166, 0.8)"
                }}
                onClick={saveChangesHandler}
                isLoading={isLoading}
            >
                Regenerate Text
            </Button>
            )}

        </Box>
    );
}

export default SidebarFooter;
