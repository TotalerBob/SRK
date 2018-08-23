import React, { Component } from "react";
import ReactDOM from "react-dom";
import Canvas from "../presentational/Canvas";

class CanvasContainer extends Component {
    constructor(){
        super();

        this.state = {
            isPainting: false,
            prevPos: { offsetX: 0, offsetY: 0 },
            line: [],
            ctx: null,
            canvas: null
        };

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.endPaintEvent = this.endPaintEvent.bind(this);
        this.updateCanvas = this.updateCanvas.bind(this);
    }

    updateCanvas(ref) {
        this.canvas = ref;
    }

    onMouseDown({ nativeEvent }){
        const { offsetX, offsetY } = nativeEvent;
        this.isPainting = true;
        this.prevPos = { offsetX, offsetY }
    }

    onMouseMove({ nativeEvent }) {
        if(this.isPainting){
            const { offsetX, offsetY } = nativeEvent;
            const offsetData = { offsetX, offsetY };
            const positionData = {
                start: this.prevPos ,
                stop: offsetData,
              };

            this.state.line = this.state.line.concat(positionData);
            this.paint(this.prevPos, offsetData, '#EE92C2')
        }
    }

    endPaintEvent() {
        if(this.isPainting){
            this.isPainting = false;
        }
    }

    paint(prevPos, currPos, color) {
        const { offsetX, offsetY } = currPos;
        const { offsetX: x, offsetY: y } = prevPos;

        this.ctx.beginPath();
        this.ctx.strokeStyle = color;

        this.ctx.moveTo(x, y);
        this.ctx.lineTo(offsetX, offsetY);
        this.ctx.stroke();
        this.prevPos = { offsetX, offsetY };
    }

    componentDidMount(){
        this.canvas.width = 1500;
        this.canvas.height = 900;
        this.ctx = this.canvas.getContext('2d')
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 5;
    }

    render(){
        return (
            <Canvas onMouseDown={this.onMouseDown} endPaintEvent={this.endPaintEvent}
                onMouseMove={this.onMouseMove} updateCanvas={this.updateCanvas} />
        );
    }
}

const wrapper = document.getElementById("canvas");
wrapper ? ReactDOM.render(<CanvasContainer />, wrapper) : false;

export default CanvasContainer;