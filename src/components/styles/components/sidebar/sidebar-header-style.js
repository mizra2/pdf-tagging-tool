import { defineStyleConfig } from "@chakra-ui/react";

const sidebarHeaderStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        w: "418px",
        h: "85px",
        p: "0px 70px",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
        backButtonIcon: {
            icon: {
                color: "rgba(111, 113, 117, 1)",
                size: 22,
            },
            bg: "transparent",
            _hover: "transparent"
        },
        commentIcon: {
            color: "rgba(111, 113, 117, 1)",
            size: 22,
        }
    },
});

export default sidebarHeaderStyleConfig;
