import React from 'react'

const Canvas = ({ onMouseDown, endPaintEvent, onMouseMove, updateCanvas }) => (
    <canvas ref={(ref) => (updateCanvas(ref))} 
        onMouseDown={onMouseDown} onMouseLeave={endPaintEvent} onMouseUp={endPaintEvent} onMouseMove={onMouseMove} />
);

export default Canvas;