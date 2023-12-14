import { defineStyleConfig } from "@chakra-ui/react";

const switchSliderStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        width: "85px",
        height: "32px",
        paddingX: "11px",
        alignItems: "center",
        borderRadius: "50px",
        position: "relative",
        transition: "background 300ms linear",
        button: {
            position: 'absolute',
            bottom: '4px',
            width: '24px',
            height: '24px',
            fill: '#FFF',
            filter: 'drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.15))',
        }
    }
});

export default switchSliderStyleConfig;
