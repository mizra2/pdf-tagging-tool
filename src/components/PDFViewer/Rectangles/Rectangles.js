import ResizableRectangle from "./ResizeableRect";

const Rectangles = ({ rectangles, pageNumber, handleDelete, handleRectanglePositionChange }) => {
    return (
        rectangles.filter(rect => (rect.pageNumber + 1) === pageNumber).map(rect => (
            <ResizableRectangle
                key={rect.id}
                initialPosition={{ x: rect.x, y: rect.y }}
                initialSize={{ width: rect.width, height: rect.height }}
                onDelete={() => handleDelete(rect.id)}
                onPositionChange={(newPos) => handleRectanglePositionChange(newPos, rect.id)}
                value={rect.sequenceNumber}
                length={rectangles.length}
                id={rect.id}
            />
        ))
    );
};

export default Rectangles;