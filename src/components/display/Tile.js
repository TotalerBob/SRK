import React from "react";
import { Link } from 'react-router-dom';

export const Tile = data => {
  if(data.data.link){
    return (
    <Link to={data.data.link}>
  <div
    onClick={() => {
      if(data.data.setActive){
        data.data.setActive(data.data.id);
      }
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
  </Link>
  )
  }
    else {
    return (
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
  )
    }
  }


