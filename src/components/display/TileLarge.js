import React from "react";

export const TileLarge = ( data ) => (
                  <div className="tile-lg" style={{ backgroundImage : "url("+data.data.image+")"}}>
                  { data.data.tag &&
                    <div className="tile-tag">{data.data.tag}</div>
                  }
                  { data.data.live &&
                    <div className="tile-tag-live">
                      <div className="dot"></div>
                      LIVE
                    </div>
                  }
                    <div className="tile-text font-light">
                      { data.data.text }
                    </div>
                  </div>

);