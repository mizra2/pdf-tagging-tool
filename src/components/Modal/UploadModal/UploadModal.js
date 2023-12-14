import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react";
import UploadContent from "./UploadContent";
import UploadBox from "./UploadBox";
import UploadFooter from "./UploadFooter";
import UploadModalHeader from "./UploadHeader";
import usePDFUploder from "../../../hooks/use-uploader";
import UploadItem from "./UploadItem";

const UploadModal = ({ isOpen, onClose }) => {

    ////    Hooks & States   ////

    const { file, selectFileHandler, removeFileHandler, uploadHandler, isLoading, feedback } = usePDFUploder();

    // If a file has been selected, then change the size of the modal
    const height = file ? "580px" : "430px"
    
    return (<Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent borderRadius={20} height={height}>
            <UploadModalHeader />
            <ModalCloseButton size="lg" pr={2} pt={2} bg="transparent" aria-label="Close" />
            <ModalBody>
                <UploadContent />
                <UploadBox fileHandler={selectFileHandler} />
                {file && <UploadItem fileData={file} removeFileHandler={removeFileHandler} />}
            </ModalBody>
            <ModalFooter>
                <UploadFooter onClose={onClose} uploadHandler={uploadHandler} isLoading={isLoading} feedback={feedback} />
            </ModalFooter>
        </ModalContent>
    </Modal>);
};
export default UploadModal;