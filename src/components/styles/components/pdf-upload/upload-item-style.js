import { defineStyleConfig } from "@chakra-ui/react";

const uploadItemStyleConfig = defineStyleConfig({
    baseStyle: {
        width: "100%",
        height: "100px",
        border: "2px solid #6F7175",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "2.5rem",
        position: "relative",
        paddingX: "1rem",

        icon: {
            w: 8,
            h: 8,
            mr: 4,
        },

        text: {
            fontFamily: "'Outfit', sans-serif",
            lineHeight: "normal",
        },

        sizeText: {
            fontSize: "12px",
            fontFamily: "'Outfit', sans-serif",
            lineHeight: "normal",
        },

        closeButton: {
            ariaLabel: "Close",
            position: "absolute",
            top: "5px",
            right: "5px",
            size: "sm",
            variant: "ghost",
            bg: "transparent",
            _hover: {
                bg: "transparent",
            }
        },
    },
});

export default uploadItemStyleConfig;
