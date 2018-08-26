import React, { Component } from "react";

export class StoryContainer extends Component {
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
                "url(https://jsbrawl.blob.core.windows.net/srk/jeder_zweite_syrier_ist_auf_der_flucht.jpg)",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "0 30%"
            }}
          >
            <div className="category-opacity">
              <div className="category-title font-bold">
                Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der
                Betroffenen sind Kinder.
              </div>
            </div>
          </div>
        </div>

        <div className="stories-date">25.05.2018</div>
        <div className="category-text font-light">
          Seit dem Zweiten Weltkrieg waren weltweit nie mehr so viele Menschen
          auf der Flucht. Der Krieg in Syrien hat fast 12 Millionen Menschen
          vertrieben. Jede zweite Einwohnerin oder jeder zweite Einwohner
          Syriens ist auf der Flucht, etwa die Hälfte der Betroffenen sind
          Kinder. Auch nach Europa strömen immer mehr Schutzsuchende. Das Rote
          Kreuz unterstützt die Flüchtlinge – sowohl in den Ursprungsländern als
          auch entlang der Transitrouten und in der Schweiz.
        </div>

        <div className="stories-images">
          <img
            src={"https://jsbrawl.blob.core.windows.net/srk/stories_images.png"}
            width="90%"
          />
        </div>
      </div>
    );
  }
}
