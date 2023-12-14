import { ModalHeader } from "@chakra-ui/react"

const AddStoryHeader = () => {
    return (<ModalHeader
        fontSize="24px"
        fontFamily="'Outfit', sans-serif"
        lineHeight="normal"
        fontStyle="normal"
        color="#222427"
        fontWeight={30}
        ml={3}
        mt={5}>
        Add New Story
    </ModalHeader>)
}

export default AddStoryHeader;