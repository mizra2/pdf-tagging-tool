import { defineStyleConfig } from "@chakra-ui/react";
const tableContentStoryItem = defineStyleConfig({
    baseStyle: {
        display: "flex",
        w: "418px",
        pt: "50px",
        pl: "40px",
        alignItems: "center",
        gap: "36px",
        flexShrink: 0,
        color: "var(--n-500, #454851)",
        fontFamily: "Outfit",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "28px",
        newStoryText: {
            color: "#454851",
            fontWeight: 800,
            fontSize: 18,
            fontFamily: 'PT Serif'
        }
    },
});

export default tableContentStoryItem