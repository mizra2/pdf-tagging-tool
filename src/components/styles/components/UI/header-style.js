import { defineStyleConfig } from "@chakra-ui/react";

const headerStyleConfig = defineStyleConfig({
    baseStyle: {
        height: "70px",
        paddingY: "32px",
        paddingRight: "120px",
        align: "center",
        justify: "space-between",
        bg: "#FFF",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        position: "fixed",
        top: 0,
        zIndex: 11,
        alignItems: "center",
        width: "100%"
    }
});

export default headerStyleConfig;
