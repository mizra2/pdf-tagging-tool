import { useState, useEffect } from 'react';
import { IconButton, Select } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectRectangles, setRectangles } from '../../../store/slices/pdf-draw-slice';

function ResizableRectangle({ initialPosition, initialSize, onDelete, isPreview, onMouseUp, onPositionChange, value, length, id }) {

    const rectangles = useSelector(selectRectangles);
    const dispatch = useDispatch();

    const [position, setPosition] = useState(initialPosition);
    const [dragging, setDragging] = useState(false);
    const [dragStart, setDragStart] = useState(null);
    const [order, setOrder] = useState(value);

    useEffect(() => {
        setPosition(initialPosition);
    }, [initialPosition, initialSize]);

    useEffect(() => {
        setOrder(value);
    }, [value])

    const handleDragStart = (e) => {
        setDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    }

    const handleDragMove = (e) => {
        if (!dragging) return;
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        const newPosition = {
            x: position.x + deltaX,
            y: position.y + deltaY
        };
        setPosition(newPosition);
        setDragStart({ x: e.clientX, y: e.clientY });

        if (!isPreview) {
            onPositionChange(newPosition);
        }
    }

    const handleDragEnd = () => {
        setDragging(false);
    }

    return (
        <div
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${initialSize.width}px`,
                height: `${initialSize.height}px`,
                border: '3px solid #FE854E',
                cursor: !isPreview ? "move" : "",
                zIndex: 10
            }}
            onMouseDown={!isPreview ? handleDragStart : () => { return; }}
            onMouseMove={!isPreview ? handleDragMove : () => { return; }}
            onMouseUp={!isPreview ? handleDragEnd : onMouseUp}
        >
            {/* {!isPreview && <button style={{ position: 'absolute', top: '0', right: '0' }} onClick={onDelete}>X</button>} */}
            {!isPreview && <IconButton
                color={'#3154A6'}
                size={'sm'}
                variant={"ghost"}
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                position='absolute'
                top='0'
                right='0'
                onClick={onDelete}
                icon={<CloseIcon />} />}

            {!isPreview && (
                <Select
                    width={"21px"}
                    height={"21px"}
                    size={"10px"}
                    backgroundColor="#FE854E"
                    position="absolute"
                    bottom="5px"
                    right="10px"
                    borderRadius={"99%"}
                    variant={"unstyled"}
                    icon={<div></div>}
                    textAlign={"center"}
                    color={"white"}
                    fontWeight={"medium"}
                    value={order}
                    onChange={(e) => {

                        setOrder(e.target.value);

                        const updatedRectangles = rectangles.map(rect => {
                            if (rect.id === id) {  // using the id prop passed into the component
                                return { ...rect, sequenceNumber: Number(e.target.value) };
                            }
                            return rect;
                        });

                        dispatch(setRectangles(updatedRectangles));
                    }}
                >

                    {Array.from({ length }).map((_, index) => (
                        <option key={index} style={{ color: "black" }} value={index + 1}>
                            {index + 1}
                        </option>
                    ))}

                </Select>
            )}

        </div>
    );
}
export default ResizableRectangle