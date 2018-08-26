import React from "react";

export const Tile = data => (
  <div
    onClick={() => {
      data.data.setActive(data.data.id);
    }}
    className={
      data.data.small ? "tile-small" : data.data.wide ? "tile-wide" : "tile"
    }
    style={{ backgroundImage: "url(" + data.data.image + ")" }}
  >
    {data.data.heart && <div className="tile-heart" />}
    {(data.data.small || data.data.wide) && (
      <div
        className={data.data.checked ? "round-checkbox on" : "round-checkbox"}
      />
    )}
    <div className="tile-text font-light">{data.data.text}</div>
  </div>
);
