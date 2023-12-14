import { useState } from "react";

// React Hook To Handle PDF Loading States
const usePDFLoader = () => {

    ////     States     ////
    const [numPages, setNumPages] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(null);

    ////   State Mangament and Handlers   ////

    const onLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setHasLoaded(true);
    };


    return {
        onLoadSuccess,
        numPages,
        hasLoaded
    }

}

export default usePDFLoader;