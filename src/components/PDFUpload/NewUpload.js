import { Box, IconButton, useStyleConfig } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import UploadModal from "../Modal/UploadModal/UploadModal";
import React from "react";

// Add New File Button
const NewUpload = () => {
	//// 	Modal State Management 	////
	const { isOpen, onOpen, onClose } = useDisclosure();

	const styles = useStyleConfig("newUploadStyleConfig");
	return (
		<Box
			__css={styles}
			onClick={onOpen}
		>
			<IconButton
				aria-label="Upload new PDF"
				icon={<AddIcon color="#3154A6" />}
				variant="outline"
				onClick={onOpen}
				{...styles.button}
			/>
			<UploadModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
		</Box>
	);
};


export default React.memo(NewUpload);
