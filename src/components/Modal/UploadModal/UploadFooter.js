import { Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
// Modal footer - Contains Buttons Of Upload Modal

const MotionButton = motion(Button);

const UploadFooter = ({ onClose, uploadHandler, isLoading, feedback }) => {
    ////    Animations   ////
    const shakeAnimation = {
        x: [0, -15, 30, -15, 15, 0],
        transition: { duration: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    };

    return (<Flex justifyContent="space-between" width="100%" positon="fixed">
        <MotionButton
            bg="#F06543"
            color="white"
            variant="flushed"
            width="255px"
            onClick={uploadHandler}
            isLoading={isLoading}
            animate={feedback ? shakeAnimation : {}}
        >
            Upload
        </MotionButton>
        <Button
            onClick={onClose}
            variant="outline"
            borderWidth="0.5px"
            borderColor="black"
            width="255px"
            isLoading={isLoading}
        >
            Cancel
        </Button>
    </Flex>)
}
export default UploadFooter;
