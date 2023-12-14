import { ModalBody, Box, Input } from "@chakra-ui/react";

const AddStoryBody = ({handleTitleChange, handleAuthorChange, title, author}) => {
    return (

        <ModalBody>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Input isInvalid={title.trim().length === 0} onChange={handleTitleChange} errorBorderColor='red.300' placeholder="Story Title" variant={"filled"} />
                <Input isInvalid={author.trim().length === 0} onChange={handleAuthorChange} errorBorderColor='red.300' placeholder="Author Name" variant={"filled"} />
            </Box>
        </ModalBody>)
}

export default AddStoryBody;