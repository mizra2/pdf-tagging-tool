import { defineStyleConfig } from "@chakra-ui/react";

const pdfPreviewStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        width: "298px",
        height: "100%",
        py: 10,
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
        bg: "rgba(69, 72, 81, 0.3)",
        position: "fixed",
        top: "0",
        left: "0",
        overflowY: "auto",
    },
});

export default pdfPreviewStyleConfig;
