import { Box, IconButton } from "@chakra-ui/react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { MdListAlt, MdZoomIn, MdZoomOut } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';

import SwitchSlider from "./SwitchSlider";
import HomeIcon from "../Icons/UploadIcon";
import useSlider from "../../hooks/use-slider";

import {
    togglePreviewVisibility,
    selectIsPreviewVisible
} from '../../store/slices/pdf-preview-slice';
import {
    selectScale,
    setScale
} from "../../store/slices/pdf-scale-slice";
import {
    selectCanDraw,
    selectRectangles,
    selectStories,
    setEditedStory,
    setEditing,
    setRectangles,
    toggleCanDraw
} from "../../store/slices/pdf-draw-slice";
import { useToast } from '@chakra-ui/react'
import { selectIsSidebarVisible, toggleSidebarVisibility } from "../../store/slices/sidebar-slice";


const ViewHeader = () => {
    const dispatch = useDispatch();
    const isPreviewVisible = useSelector(selectIsPreviewVisible);
    const navigate = useNavigate();
    const location = useLocation();
    const scale = useSelector(selectScale);
    const rectangles = useSelector(selectRectangles);
    const stories = useSelector(selectStories);
    const toast = useToast();
    const pathParts = location.pathname.split("/");
    const initalMode = pathParts[4];
    const handleZoomIn = () => {
        if (scale >= 1.20) return;

        const updatedRectangles = rectangles.map(s => ({
            ...s,
            x: (0.1 * s.x) / (scale) + s.x,
            y: (0.1 * s.y) / (scale) + s.y,
            width: (0.1 * s.width) / (scale) + s.width,
            height: (0.1 * s.height) / (scale) + s.height
        }));

        dispatch(setRectangles(updatedRectangles));
        dispatch(setScale(scale + 0.1));
    };

    const handleZoomOut = () => {
        if (scale <= 0.6) return;

        const updatedRectangles = rectangles.map(s => ({
            ...s,
            x: (-0.1 * s.x) / (scale) + s.x,
            y: (-0.1 * s.y) / (scale) + s.y,
            width: (-0.1 * s.width) / (scale) + s.width,
            height: (-0.1 * s.height) / (scale) + s.height
        }));

        dispatch(setRectangles(updatedRectangles));
        dispatch(setScale(scale - 0.1));
    };

    const handleTogglePreview = () => {
        dispatch(togglePreviewVisibility());
    };

    const sliderToggle = () => {
        const pathParts = location.pathname.split("/");
        const pdfID = pathParts[2];
        const mode = pathParts[4];
        const nextMode = mode === "view" ? "edit" : "view";

        if (nextMode === "edit") {
            if (stories.length === 0) {
                toast({
                    title: "Please add a story first using the edit menu!",
                    status: "error",
                    isClosable: true,
                    duration: 2000,
                    position: "top"
                })
                return false;
            } else {
                navigate(`/pdf/${pdfID}/tool/${nextMode}/${stories[0].id}`);
                return true;
            }
        } else {
            navigate(`/pdf/${pdfID}/tool/${nextMode}`);
            return true;
        }
    };

    const { isActive, handleToggle } = useSlider({ toggleHandler: sliderToggle, initialState: initalMode === "view" ? false : true });

    return (
        <>
            <Box>
                <Link to="/">
                    <IconButton
                        variant="ghost"
                        aria-label="Home Icon"
                        icon={<HomeIcon />}
                        onClick={() => {
                            dispatch(setEditedStory(null));
                            dispatch(setEditing(false));
                            dispatch(toggleCanDraw(false));
                            dispatch(setRectangles([]));
                            dispatch(toggleSidebarVisibility(false));
                        }}
                    />
                </Link>
            </Box>
            <Box marginLeft="auto" display="flex" alignItems="center" gap={"20px"}>
                {(initalMode === "view" && (<Box display="flex" alignItems="center" gap="20px" mr={-5}>
                    <IconButton variant="ghost" aria-label="Zoom In" icon={<MdZoomIn color="#6F7175" size={"24px"} />} onClick={handleZoomIn} />
                    <IconButton variant="ghost" aria-label="Zoom Out" icon={<MdZoomOut color="#6F7175" size={"24px"} />} onClick={handleZoomOut} />
                    <IconButton
                        variant="ghost"
                        aria-label="History Icon"
                        icon={<MdListAlt color="#6F7175" size={"24px"} />}
                        onClick={handleTogglePreview}
                        isActive={isPreviewVisible}
                        _active={{ bg: "rgba(186, 186, 186, 0.5)" }}
                    />
                </Box>))}
                <SwitchSlider isActive={isActive} toggleHandler={handleToggle} variant="ghost" bg="transparent" />
            </Box>
        </>
    );
}

export default ViewHeader;
