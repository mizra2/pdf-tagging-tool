import { Modal, Input, ModalBody, ModalCloseButton, ModalHeader, ModalContent, ModalFooter, ModalOverlay, Box } from "@chakra-ui/react";
import AddStoryFooter from "./AddStoryFooter";
import { selectRectangles } from '../../../store/slices/pdf-draw-slice';
import { setRectangles } from '../../../store/slices/pdf-draw-slice';
import { useDispatch, useSelector } from "react-redux";
import { toggleCanDraw } from "../../../store/slices/pdf-draw-slice";
import AddStoryBody from "./AddStoryBody";
import AddStoryHeader from "./AddStoryHeader";

const AddStoryModal = ({ isOpen, onClose, title, author, handleAuthorChange, handleTitleChange, addStoryHandler, pageNumber }) => {

    const rectangles = useSelector(selectRectangles);
    const dispatch = useDispatch();

    const submitHandler = () => {
        if (!title || rectangles.length === 0 || !author) {
            return;
        }
        addStoryHandler({ title: title, selections: rectangles, author: author });
        onClose();
        dispatch(toggleCanDraw(false));
        dispatch(setRectangles([]));
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton size="lg" pr={2} pt={2} bg="transparent" aria-label="Close" />
                <AddStoryHeader />
                <AddStoryBody title={title} author={author} handleTitleChange={handleTitleChange} handleAuthorChange={handleAuthorChange} />
                <ModalFooter>
                    <AddStoryFooter onClose={onClose} submitHandler={submitHandler} />
                </ModalFooter>
            </ModalContent>
        </Modal>)
}

export default AddStoryModal;