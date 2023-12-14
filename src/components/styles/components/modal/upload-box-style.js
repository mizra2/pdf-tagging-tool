import { defineStyleConfig } from "@chakra-ui/react";

const uploadBoxStyleConfig = defineStyleConfig({
    baseStyle: {
        width: "100%",
        height: "200px",
        border: "2px dashed #6F7175",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
        marginTop: "2.5rem",
        position: "relative",
        
        icon: {
            size: 35,
            color: "#222427"
        },

        text: {
            mt: 5,
            color: "#222427",
            marginBottom: "1rem",
            fontSize: "15px",
            fontFamily: "'Outfit', sans-serif",
        },

        input: {
            type: "file",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            opacity: "0",
            cursor: "pointer"
        }
    },
});

export default uploadBoxStyleConfig;
