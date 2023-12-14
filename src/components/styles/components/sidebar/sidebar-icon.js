import { defineStyleConfig } from "@chakra-ui/react";

const newStoryIconStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        w: "64px",
        h: "64px",
        p: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        border: "2px solid var(--n-300, #BABABA)",
        bg: "var(--white, #FFF)",
        addIcon: {
            color: "rgba(254, 133, 78, 1)",
            size: 24
        }
    },
});

export default newStoryIconStyleConfig;
