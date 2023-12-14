import { defineStyleConfig } from "@chakra-ui/react";

const newStoryStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        w: "418px",
        pl: "80px",
        pt: "30px",
        alignItems: "center",
        gap: "36px",
        flexShrink: 0,
        color: "var(--n-500, #454851)",
        fontFamily: "Outfit",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "28px",
        newStoryText: {
            color: "rgba(69, 72, 81, 1)",
            fontWeight: 500,
            fontSize: 14
        }
    },
});

export default newStoryStyleConfig;
