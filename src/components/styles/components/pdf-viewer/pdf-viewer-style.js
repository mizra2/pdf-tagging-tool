import { defineStyleConfig } from "@chakra-ui/react";

const pdfViewerStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        gap: "10px",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        documentLoader: {
            overflow: "hidden",
            borderRadius: "19px",
            gap: "30px",
            marginBottom: "30px",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
        },
        spinner: {
            color: "blue.500",
            position: "absolute",
            top: "320px"
        },
        innerBox: {
            overflow: "hidden",
            borderRadius: "19px",
            gap: "30px",
            marginBottom: "30px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            position: "relative",
        }
    },
});

export default pdfViewerStyleConfig;
