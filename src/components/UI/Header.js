import {
    Flex, useStyleConfig
} from "@chakra-ui/react";
import UploadHeader from "./UploadHeader";
import ViewHeader from "./ViewHeader";

const Header = ({ headerType }) => {
    const styles = useStyleConfig("headerStyleConfig");
    return (
        <Flex
            as="header"
            sx={styles}
            paddingLeft={["20px", "50px", "100px", "140px"]}
        >
            {headerType === "" && <UploadHeader />}
            {(headerType === "view" || headerType==="edit") && <ViewHeader />}

        </Flex>
    );
};

export default Header;
