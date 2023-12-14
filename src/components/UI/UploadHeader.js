import { Box, IconButton, InputGroup, InputLeftElement, Input, useStyleConfig } from "@chakra-ui/react";
import HomeIcon from "../Icons/UploadIcon";
import { MdFilterList, MdSearch } from "react-icons/md";
import { fetchPdfItems } from "../../store/slices/pdf-library";
import { useDispatch } from "react-redux";

const UploadHeader = () => {    

    const dispatch = useDispatch();
    const uploadHeaderStyles = useStyleConfig("uploadHeaderStyleConfig");

    const searchHandler = (e) => {
        dispatch(fetchPdfItems(e.target.value));
    }

    return (
        <>
            <Box>
                <IconButton
                    {...uploadHeaderStyles.button}
                    aria-label="Home Icon"
                    icon={<HomeIcon />}
                    mr={[0, 30, 30, 0]}
                />
            </Box>
            <Box marginLeft="auto" display="flex" alignItems="center">
                <InputGroup marginLeft="35px">
                    <InputLeftElement paddingTop="5px" paddingLeft="5px" pb="5px" >
                        <MdSearch color="#6F7175" size="20px" />
                    </InputLeftElement>
                    <Input {...uploadHeaderStyles.input} onChange={searchHandler}/>
                </InputGroup>
            </Box>
        </>
    );
}

export default UploadHeader;
