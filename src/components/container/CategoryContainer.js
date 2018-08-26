import React, { Component } from "react";

export class CategoryContainer extends Component {
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
                "url(./src/img/kategorien/hilfe_fuer_familien_in_der_schweiz.jpg)",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "0 30%"
            }}
          >
            <div className="category-opacity">
              <div className="category-title font-bold">
                Hilfe für Familien in der Schweiz
              </div>
            </div>
          </div>
        </div>

        <div className="category-subtitle font-light">
          Gemeinsam Unterstützen wir Familien in der Schweiz.
        </div>

        <img
          class="category-spende-button"
          src="src/img/spende_btn.PNG"
          alt=""
          width="354"
          height="99"
        />

        <div className="category-text font-light">
          Wir sind in der ganzen Schweiz für Eltern in schwierigen Lagen da Es
          reicht, den Fuss vor die Tür zu setzen, um auf schlimme Schicksale zu
          stossen. In der Schweiz wohnen Menschen, die dringend auf Hilfe
          angewiesen sind. Eine Million Menschen in unserem Land leben in Armut
          – oder knapp über der Armutsgrenze.
          <br />
          <br />
          Armut und soziale Not sind in der Schweiz häufig weniger augenfällig
          als in den Ländern des Südens. Für die Betroffenen, oftmals Familien,
          sind die Auswirkungen jedoch nicht minder schwer zu ertragen. Diese
          Menschen brauchen Ihre Hilfe.
        </div>
      </div>
    );
  }
}
