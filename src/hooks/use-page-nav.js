import { useState, useCallback } from "react";

// React Hook For Page Navigation State Capture
const usePageNav = (numPages) => {

    ////      States       ////

    const [currentPage, setCurrentPage] = useState(1);
    const [hasLoaded, setHasLoaded] = useState(false);

    ////     State Mangament Callbacks    //// 

    const setLoading = useCallback((loadingState) => {
        setHasLoaded(loadingState);
    }, []);

    const adjustPage = useCallback((newPage) => {
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
            setLoading(false);
        }
    }, [setLoading, currentPage]);

    return {
        currentPage,
        hasLoaded,
        setLoading,
        adjustPage
    };
}

export default usePageNav;