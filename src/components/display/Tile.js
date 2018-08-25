import React from "react";

export const Tile = ( data ) => (
                  <div className="tile" style={{ backgroundImage : "url("+data.data.image+")"}}>
                  { data.data.heart &&
                    <div className="tile-heart"></div>
                  }
                    <div className="tile-text font-light">
                      { data.data.text }
                    </div>
                  </div>

);
