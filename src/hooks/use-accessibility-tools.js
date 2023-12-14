import { setFontFamily, setBackgroundColour, setFontColour, setIconColour, setFontSize } from "../store/slices/reader-options-slice";
import { setScale } from "../store/slices/pdf-scale-slice";

const useAccessibilityTools = ({
    fontFamily, backgroundColor, fontSize, scale, dispatch }) => {

    // Font Change Handler
    const fontChangeHandler = (newFont) => {
        if (newFont === fontFamily) return;
        dispatch(setFontFamily(newFont));
    };

    // Background Colour Change Handler
    const backgroundColourChangeHandler = (newColour, newFontColour, newIconColour) => {
        if (backgroundColor === newColour) return;
        dispatch(setBackgroundColour(newColour));
        dispatch(setFontColour(newFontColour));
        dispatch(setIconColour(newIconColour));
    };

    // Font Size Handlers
    const fontIncreaseHandler = () => {
        if (fontSize >= 36) return;
        dispatch(setFontSize(fontSize + 1));
    };

    const fontDecreaseHandler = () => {
        if (fontSize <= 12) return;
        dispatch(setFontSize(fontSize - 1));
    };

    // Zoom Handlers
    const handleZoomIn = () => {
        if (scale >= 1.20) return;
        dispatch(setScale(scale + 0.1));
    };

    const handleZoomOut = () => {
        if (scale <= 0.6) return;
        dispatch(setScale(scale - 0.1));
    };

    return {
        fontChangeHandler,
        backgroundColourChangeHandler,
        fontIncreaseHandler,
        fontDecreaseHandler,
        handleZoomIn,
        handleZoomOut,
    };
}

export default useAccessibilityTools;
