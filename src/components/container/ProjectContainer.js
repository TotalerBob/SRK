import React, { Component } from "react";

export class ProjectContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <div className="category-header">
          <div
            style={{
              backgroundImage:
                "url(https://jsbrawl.blob.core.windows.net/srk/8_DSC0427312171_Redcross_Original.jpg)",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "0 30%"
            }}
          >
            <div className="category-opacity">
              <div className="category-title font-bold">
                Projekt Schutz vor Epidemien Ghana
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="project-left">Mein Einfluss:</div>
          <div className="project-right">
            Mit meiner Spende von <font color="#ff0000">50.- CHF</font>
            <br />
            konnten 4 Familien in Ghana mit Impfgütern versorgt werden.
          </div>

          <hr size="1" />

          <div className="project-left">
            Anzahl Spender:
            <br />
            Total gespendet:
          </div>
          <div className="project-right">
            42232
            <br />
            CHF 498000
          </div>
        </div>

        <div className="stories-images">
          <img
            src={"https://jsbrawl.blob.core.windows.net/srk/progress.png"}
            width="90%"
          />
        </div>
        <div className="stories-images">
          <img
            src={"https://jsbrawl.blob.core.windows.net/srk/world_ghana.PNG"}
            width="90%"
          />
        </div>
        <br />
        <br />
      </div>
    );
  }
}
