import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { TileLarge } from "../display/TileLarge";

export class TileRowLarge extends Component {
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
                <TileLarge
                  data={{
                    tag: val.tag,
                    live: val.live,
                    text: val.title,
                    image: val.image,
                    link : val.link
                  }}
                />
              );
            })}

            <div
              className="tile-lg"
              style={{
                width: "25vmin",
                height: "25vmin",
                backgroundColor: "#e2001e",
                boxShadow: "none",
                margin: "12vmin"
              }}
            >
              <div
                className="tile-text font-light font-bold"
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "4.5vmin",
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
