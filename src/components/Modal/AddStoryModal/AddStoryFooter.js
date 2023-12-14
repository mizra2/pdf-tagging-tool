import { Flex, Button } from "@chakra-ui/react";
// Modal footer - Contains Buttons Of Story Modal

const AddStoryFooter = ({ onClose, submitHandler }) => {

    return (<Flex justifyContent="space-between" width="100%" positon="fixed">
        <Button
            bg="#F06543"
            color="white"
            variant="flushed"
            width="255px"
            onClick={submitHandler}>
            Confirm
        </Button>

        <Button
            onClick={() => { onClose(); }}
            variant="outline"
            borderWidth="0.5px"
            borderColor="black"
            width="255px"
        >
            Cancel
        </Button>
        
    </Flex>)
}
export default AddStoryFooter;
