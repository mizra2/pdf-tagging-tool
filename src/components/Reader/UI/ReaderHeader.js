import { Flex, IconButton } from "@chakra-ui/react"
import useSlider from "../../../hooks/use-slider";
import SwitchSlider from "../../UI/SwitchSlider";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdZoomIn, MdZoomOut } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { selectScale } from "../../../store/slices/pdf-scale-slice";
import { useDisclosure } from "@chakra-ui/react";
import useStoryLoader from "../../../hooks/use-story-loader";
import { selectStories } from "../../../store/slices/pdf-draw-slice";
import "../../../App.css"
import { selectFontFamily, selectBackgroundColour, selectFontColour, selectIconColour, selectFontSize } from "../../../store/slices/reader-options-slice";
import ContentIcon from "./ContentIcon";
import ContentHeader from "./ContentHeader";
import ContentPopover from "./ContentPopover";
import ContentDrawer from "./ContentDrawer";
import useAccessibilityTools from "../../../hooks/use-accessibility-tools";

const ReaderHeader = () => {

    // Hooks & Redux Selectors
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stories = useSelector(selectStories);
    const scale = useSelector(selectScale);
    const fontSize = useSelector(selectFontSize);
    const fontFamily = useSelector(selectFontFamily)
    const backgroundColor = useSelector(selectBackgroundColour);
    const fontColour = useSelector(selectFontColour);
    const iconColor = useSelector(selectIconColour)

    const { isOpen, onOpen, onClose } = useDisclosure()

    // Gather Params from URL 

    const pathParts = location.pathname.split("/");
    const pdfID = pathParts[2];
    const initialMode = pathParts[3];
    const storyID = parseInt(pathParts[4]);

    // idParam refers to Edition ID - MinoID
    const idParam = pdfID.split('-');
    const id = idParam[0];

    // Load the stories into Redux
    useStoryLoader(id);

    // Find the current story in view based on stories loaded
    const storyInView = stories.find((s) => storyID === s.id);

    // Get the title
    const title = storyInView?.title

    // State for the slider toggle
    const [stateMode, setMode] = useState(initialMode);

    // Functions complied into one hook for easier mantaianbility
    const {
        fontChangeHandler,
        backgroundColourChangeHandler,
        fontIncreaseHandler,
        fontDecreaseHandler,
        handleZoomIn,
        handleZoomOut,
    } = useAccessibilityTools({
        fontFamily, backgroundColor, fontSize, scale,
        dispatch
    });

    // Slider Toggle Functiionality

    const sliderToggle = () => {

        // Current Mode
        const mode = pathParts[3];

        // Change Path & Navigate

        const nextMode = mode === "pdf" ? "text" : "pdf";

        setMode(nextMode);

        navigate(`/reader/${pdfID}/${nextMode}/${storyID}`);

        return true;
    }


    // useSlider Hook
    const { isActive, handleToggle } = useSlider({ toggleHandler: sliderToggle, initialState: initialMode === "pdf" ? true : false });

    return (
        <Flex
            as="header"
            paddingLeft={["20px", "50px", "100px", "140px"]}
            height={"96px"}
            paddingY={"32px"}
            paddingRight={"120px"}
            align={"center"}
            justify="space-between"
            bg={backgroundColor}
            position={"fixed"}
            top={0}
            zIndex={11}
            alignItems={"center"}
            width={"100%"}
        >
            <ContentIcon stateMode={stateMode} onOpen={onOpen} iconColor={iconColor} />

            {stateMode === "text" && (<ContentHeader fontColour={fontColour} fontFamily={fontFamily} fontSize={fontSize} title={title} />)}

            <Flex gap={"30px"} flexDir={"row"} align="center" spacing={1}>

                <SwitchSlider isActive={isActive} toggleHandler={handleToggle} variant="ghost" bg="transparent" />

                {stateMode === "pdf" && (<>
                    <IconButton left={"60px"} variant="ghost" aria-label="Zoom In" icon={<MdZoomIn color={iconColor} size={"32px"} />} onClick={handleZoomIn} />
                    <IconButton left={"60px"} variant="ghost" aria-label="Zoom Out" icon={<MdZoomOut color={iconColor} size={"32px"} />} onClick={handleZoomOut} /></>)}

                {stateMode === "text" && (

                    <ContentPopover
                        fontChangeHandler={fontChangeHandler}
                        backgroundColourChangeHandler={backgroundColourChangeHandler}
                        fontIncreaseHandler={fontIncreaseHandler}
                        fontDecreaseHandler={fontDecreaseHandler}
                        iconColor={iconColor}
                    />
                )}
            </Flex>
            <ContentDrawer stories={stories} onClose={onClose} isOpen={isOpen} backgroundColor={backgroundColor} fontColour={fontColour} />
        </Flex>
    );
}

export default ReaderHeader;