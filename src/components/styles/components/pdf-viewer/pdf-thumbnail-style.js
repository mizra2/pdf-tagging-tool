import { defineStyleConfig } from "@chakra-ui/react";

const pdfThumbnailStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 90,
        thumbnailContainer: {
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
            borderRadius: "4px",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
        },
        spinner: {
            color: "blue.500",
            position: "absolute",
        },
    },
});

export default pdfThumbnailStyleConfig;
