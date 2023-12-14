import { extendTheme } from "@chakra-ui/react";
import headerStyleConfig from "./components/UI/header-style";
import uploadHeaderStyleConfig from "./components/UI/upload-header-style";
import switchSliderStyleConfig from "./components/UI/switch-slider-style";
import newUploadStyleConfig from "./components/pdf-upload/new-upload-style";
import pdfGridStyleConfig from "./components/pdf-upload/pdf-grid-style";
import pdfItemStyleConfig from "./components/pdf-upload/pdf-item-style";
import uploadBoxStyleConfig from "./components/modal/upload-box-style";
import uploadItemStyleConfig from "./components/pdf-upload/upload-item-style";
import pdfPreviewStyleConfig from "./components/pdf-viewer/pdf-preview-style";
import pdfThumbnailStyleConfig from "./components/pdf-viewer/pdf-thumbnail-style";
import sidebarStyleConfig from "./components/sidebar/sidebar-style";
import newStoryStyleConfig from "./components/sidebar/sidebar-newstory-style";
import sidebarHeaderStyleConfig from "./components/sidebar/sidebar-header-style";
import newStoryIconStyleConfig from "./components/sidebar/sidebar-icon";
import pdfViewerStyleConfig from "./components/pdf-viewer/pdf-viewer-style";
import tableContentStoryItem from "./components/sidebar/table-content-story-style";
//// Component Themes ////
// TODO :: Fix

const theme = extendTheme({
    components: {
        headerStyleConfig,
        uploadHeaderStyleConfig,
        switchSliderStyleConfig,
        newUploadStyleConfig,
        pdfGridStyleConfig,
        pdfItemStyleConfig,
        uploadBoxStyleConfig,
        uploadItemStyleConfig,
        pdfPreviewStyleConfig,
        pdfThumbnailStyleConfig,
        sidebarStyleConfig,
        newStoryStyleConfig,
        sidebarHeaderStyleConfig,
        newStoryIconStyleConfig,
        pdfViewerStyleConfig,
        tableContentStoryItem
        
    }
});

export default theme;
