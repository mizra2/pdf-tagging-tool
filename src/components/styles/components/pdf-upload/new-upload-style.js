import { defineStyleConfig } from "@chakra-ui/react";

const newUploadStyleConfig = defineStyleConfig({
    baseStyle: {
        width: "200px",
        height: "304px",
        flexShrink: "0",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px dashed #3154A6",
        transition: "transform 0.3s",
        flexDirection: "column",
        _hover: {
            transform: "scale(1.05)",
        },
        cursor: "pointer",
        button: {
            width: "100px",
            height: "482px",
            flexShrink: "0",
            borderColor: "transparent",
            _hover: { bg: "transparent" },
        }
    },
});

export default newUploadStyleConfig;
