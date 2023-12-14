import { defineStyleConfig } from "@chakra-ui/react";

const sidebarStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        w: "380px",
        h: "100%",
        p: "0px 21px",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: "0px -11px",
        flexShrink: 0,
        flexWrap: "wrap",
        bg: "#FFF",
        boxShadow: "-1px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        position: "fixed",
        right: "0",
        top: "0",
        mt: 70,
    },
});

export default sidebarStyleConfig;
