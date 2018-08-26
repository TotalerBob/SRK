import React, { Component } from "react";
import { Tile } from "../display/Tile";

export class TileRow extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="row-title font-bold">{this.props.title}</div>
        <div className="row-wrapper">
          <div
            className="row-scroller"
            style={{ width: this.props.size + "px" }}
          >
            {this.props.json.map((val, key) => {
              return (
                <Tile
                  data={{
                    text: val.title,
                    image: val.image,
                    heart: val.heart,
                    link: val.link
                  }}
                />
              );
            })}

            <div
              className="tile"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#e2001e",
                boxShadow: "none",
                margin: "20px"
              }}
            >
              <div
                className="tile-text font-light font-bold"
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "14pt",
                  bottom: "25%",
                  left: "0",
                  color: "white",
                  textShadow: "none"
                }}
              >
                Mehr anzeigen
              </div>
            </div>

            <br style={{ clear: "left" }} />
          </div>
        </div>
      </div>
    );
  }
}
