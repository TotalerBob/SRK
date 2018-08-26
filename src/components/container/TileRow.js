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
                    link : val.link
                  }}
                />
              );
            })}
            <br style={{ clear: "left" }} />
          </div>
        </div>
      </div>
    );
  }
}
