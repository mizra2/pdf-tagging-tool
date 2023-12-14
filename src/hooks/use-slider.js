import { useState } from "react";


// React Hook To Capture Slider Switch State

const useSlider = ({ toggleHandler, initialState }) => {
    ////     States   //// 

    const [isActive, setIsActive] = useState(initialState);

    ////   State Mangement   ////
    
    const handleToggle = () => {
        if(toggleHandler()) {
            setIsActive(!isActive);
        }
    }

    return {
        isActive,
        handleToggle
    }
}

export default useSlider;