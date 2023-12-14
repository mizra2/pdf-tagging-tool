import { useDispatch } from "react-redux";
import { setRectangles } from "../store/slices/pdf-draw-slice";

const useEditor = (rectangles) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        // Find the order of the rectangle to be deleted
        const deletedOrder = rectangles.find(rect => rect.id === id)?.sequenceNumber;

        if (!deletedOrder) return;

        const updatedRectangles = rectangles
            .filter(rect => rect.id !== id)  // Remove the rectangle
            .map(rect => {
                // For rectangles with order greater than the deleted rectangle's order, decrease their order by 1
                if (rect.sequenceNumber > deletedOrder) {
                    return { ...rect, sequenceNumber: rect.sequenceNumber - 1 };
                }
                return rect;
            });

        dispatch(setRectangles(updatedRectangles));
    };

    const handleRectanglePositionChange = (newPosition, rectId) => {
        const updatedRectangles = rectangles.map(rect => {
            if (rect.id === rectId) {
                return { ...rect, ...newPosition };
            }
            return rect;
        });

        dispatch(setRectangles(updatedRectangles));
    }

    return {
        handleDelete,
        handleRectanglePositionChange
    };

}

export default useEditor;