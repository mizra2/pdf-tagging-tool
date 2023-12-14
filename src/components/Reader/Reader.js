import { Box } from "@chakra-ui/react";
import "../../App.css"
import { useSelector } from "react-redux";
import { selectFontColour, selectFontFamily, selectFontSize } from "../../store/slices/reader-options-slice";
const Reader = ({ content }) => {

    const fontSize = useSelector(selectFontSize);
    const fontFamily = useSelector(selectFontFamily);
    const fontColour = useSelector(selectFontColour);

    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex={12}
            marginTop={150}
            marginX={[50, 50, 100, 200, 300]}
            className="noScrollbar"
        >
            <div
                style={{
                    color: fontColour,
                    fontFamily: fontFamily,
                    fontSize: `${fontSize}px`,
                    fontStyle: 'normal',
                    fontWeight: 200,
                }}
                className="noScrollbar"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Box>
    );
};

export default Reader;