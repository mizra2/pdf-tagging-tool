import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Hook To Capture Navigation State
const useNav = () => {
    const [headerType, setHeaderType] = useState("");
    const location = useLocation();

    useEffect(() => {
        const paramList = location.pathname.split("/").filter(Boolean); 
        const lastSegment = paramList[paramList.length - 1] === undefined ? "" : paramList[paramList.length - 1];
        const isNumber = !isNaN(parseInt(lastSegment));

        if (isNumber && paramList[paramList.length - 2] === 'edit') {
            setHeaderType('edit');
        } else {
            setHeaderType(lastSegment);
        }
    }, [location]);

    return headerType;
}

export default useNav;
