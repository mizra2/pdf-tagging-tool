import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCanDraw, selectRectangles, setRectangles } from '../../src/store/slices/pdf-draw-slice';

const useDrawing = (pageNumber) => {
    const canDraw = useSelector(selectCanDraw);
    const rectangles = useSelector(selectRectangles);
    const dispatch = useDispatch();

    const [drawing, setDrawing] = useState(false);
    const [startPoint, setStartPoint] = useState({});
    const [currentRect, setCurrentRect] = useState(null);

    const handleMouseDown = (e) => {
        if (!canDraw) return;
        const viewerRect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - viewerRect.left;
        const y = e.clientY - viewerRect.top;
        setStartPoint({ x, y });
        console.log(rectangles.length + 1)
        setCurrentRect({ x, y, width: 0, height: 0, id: Date.now(), pageNumber: pageNumber - 1, sequenceNumber: rectangles.length + 1});
        setDrawing(true);
    };

    const handleMouseMove = (e) => {
        if (!drawing) return;
        const viewerRect = e.currentTarget.getBoundingClientRect();
        let mouseX = e.clientX - viewerRect.left;
        let mouseY = e.clientY - viewerRect.top;
        let width = mouseX - startPoint.x;
        let height = mouseY - startPoint.y;
        let x = startPoint.x;
        let y = startPoint.y;
        if (width < 0) {
            x = mouseX;
            width = Math.abs(width);
        }
        if (height < 0) {
            y = mouseY;
            height = Math.abs(height);
        }
        setCurrentRect((prevState) => {
            return { ...prevState, x: x, y: y, width: width, height: height };
        });
    };

    const handleMouseUp = () => {
        if (!drawing) return;
        if (Math.abs(currentRect.width) > 50 && Math.abs(currentRect.height) > 25) {
            const updatedRectangles = [...rectangles, currentRect];
            dispatch(setRectangles(updatedRectangles));
        }
        setCurrentRect(null);
        setDrawing(false);
    };

    return {
        drawing,
        currentRect,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp
    };
};

export default useDrawing;
