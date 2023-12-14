import { useState } from "react";

const useRectDrawer = (canDraw, rectangles, setRectangles) => {
    const [drawing, setDrawing] = useState(false);
    const [startPoint, setStartPoint] = useState({});
    const [currentRect, setCurrentRect] = useState(null);

    // Begin drawing 
    const handleMouseDown = (e) => {
        if (!canDraw) return;
        const viewerRect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - viewerRect.left + 18;
        const y = e.clientY - viewerRect.top;
        // Set our current rectangle [This is done to handle preview rectangle i.e display rectangle drawing progress]
        setStartPoint({ x, y });
        setCurrentRect({ x, y, width: 0, height: 0, id: Date.now() });
        setDrawing(true);
    };

    // Drawing has begun 
    const handleMouseMove = (e) => {
        if (!drawing) return;

        const viewerRect = e.currentTarget.getBoundingClientRect();
        let mouseX = e.clientX - viewerRect.left + 18;
        let mouseY = e.clientY - viewerRect.top;

        let width = mouseX - startPoint.x;
        let height = mouseY - startPoint.y;

        let x = startPoint.x;
        let y = startPoint.y;

        // If dragging left, adjust the x-coordinate and make width positive
        if (width < 0) {
            x = mouseX;
            width = Math.abs(width);
        }

        // If dragging upwards, adjust the y-coordinate and make height positive
        if (height < 0) {
            y = mouseY;
            height = Math.abs(height);
        }

        setCurrentRect((prevState) => {
            return {
                ...prevState,
                x: x,
                y: y,
                width: width,
                height: height,
            }
        });

    };

    // Drawing finished 
    const handleMouseUp = () => {
        if (!drawing) return;
        // Box too small
        if (Math.abs(currentRect.width) > 50 && Math.abs(currentRect.height) > 25) {
            setRectangles((prev) => [...prev, currentRect]);
        }
        setCurrentRect(null);
        setDrawing(false);
    };

    // Delete rectangle based on ID. 
    const handleDelete = (id) => {
        setRectangles(rectangles.filter((rect) => rect.id !== id));
    };

    // Rectangle has changed positon oh no!
    const handleRectanglePositionChange = (newPosition, rectId) => {
        setRectangles(prev => prev.map(rect => {
            if (rect.id === rectId) {
                return { ...rect, ...newPosition };
            }
            return rect;
        }));
    }

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleDelete,
        currentRect,
        handleRectanglePositionChange
    };

}

export default useRectDrawer;






