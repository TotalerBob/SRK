import React, { Component } from "react";
import {TileLarge} from "../display/TileLarge";

export class TileRowLarge extends Component {
  constructor() {
    super();
  }

  render() {
    return (
            <div className="row">
              <div className="row-title font-bold">{this.props.title}</div>
              <div className="row-wrapper">
                <div className="row-scroller" style={{ width : this.props.size+"px" }}>
                {
                	this.props.json.map((val, key) => {
                		return (
                			<TileLarge
                			data={{
                				tag : val.tag,
                				live : val.live,
                				text : val.title,
                				image : val.image
                			}}
                			/>
                		)
                	})
                }
                  <br style={{clear:'left'}} />
                
                
                </div>
              </div>
            </div>
    );
  }
}
