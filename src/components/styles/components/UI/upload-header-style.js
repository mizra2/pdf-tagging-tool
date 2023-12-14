import { defineStyleConfig } from "@chakra-ui/react";

const uploadHeaderStyleConfig = defineStyleConfig({
    baseStyle: {
        button: {
            variant: "ghost",
        },
        historyIcon: {
            color: "#6F7175",
            size: "24px"
        },
        input: {
            fontWeight: "200",
            color: "#6F7175",
            placeholder: "search",
            variant: "filled",
            width: "250px",
            fontSize: "16px",
            fontFamily: "'Outfit', sans-serif",
            borderRadius: "110px",
            maxWidth: "300px",
            lineHeight: "normal",
            fontStyle: "normal",
            backgroundColor: "#EFEDEB",
            height: "40px",
            paddingBottom: "2px",
            paddingRight: "40px"
        }
    }
});

export default uploadHeaderStyleConfig;
