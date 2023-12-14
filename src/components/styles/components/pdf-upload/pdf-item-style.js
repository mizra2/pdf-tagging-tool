import { defineStyleConfig } from "@chakra-ui/react";

const pdfItemStyleConfig = defineStyleConfig({
    baseStyle: {
        width: "209px",
        height: "339px",
        flexShrink: "0",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "18px",
        cursor: "pointer",
        border: "4px transparent",
        transition: "transform 0.3s, box-shadow 0.3s",
        _hover: {
            transform: "scale(1.05)",
        },
        img: {
            borderRadius: "15px",
            objectFit: "cover",
            width: "100%",
            height: "90%",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        },
        text: {
            color: "#6F7175",
            fontSize: "13px",
            lineHeight: "normal",
            fontWeight: "500",
            fontFamily: "'Outfit', sans-serif",
        },
    },
});

export default pdfItemStyleConfig;