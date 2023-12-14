import { Box, useStyleConfig } from "@chakra-ui/react";
import { IoEllipse } from "react-icons/io5";
import { MdFormatAlignJustify } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md"

const SwitchSlider = ({ toggleHandler, isActive }) => {


    const switchSliderStyles = useStyleConfig("switchSliderStyleConfig", { isActive });

    return (
        <Box
            onClick={toggleHandler}
            background={isActive ? "#FE854E" : "#3154A6"}
            sx={switchSliderStyles}
            left={55}
        >
            {isActive && <MdOutlinePictureAsPdf size="16px" width="16x" height="16px" style={{
                position: 'absolute',
                color: 'white',
                right: "9px"

            }} />}

            {!isActive && <MdFormatAlignJustify color="white" size="15px" />}

            <IoEllipse
                style={{
                    position: 'absolute',
                    right: isActive ? '58px' : '3px',
                    bottom: '4px',
                    width: '24px',
                    height: '24px',
                    fill: '#FFF',
                    filter: 'drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.15))',
                    transition: 'right 300ms linear'
                }}
            />
        </Box>
    )
}
export default SwitchSlider;
