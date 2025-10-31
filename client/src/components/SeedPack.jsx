import React from "react";
import "../styles/seedpack.css";
import FavoriteButton from "./favoriteBtn";

function SeedPack() {
  return (
    <div className="green darken-2">
      <div className="plantIcon__div large">
        <div>
          <i className="material-icons yellow-text text-darken-2">
            local_florist
          </i>
        </div>
        <div>
          <i className="material-icons yellow-text text-darken-2">
            local_florist
          </i>
        </div>
      </div>
      <div className="plantDesc__div">
        <ul>
          <li>Schweinitz's sunflower</li>
          <li>Helianthus schweinitzii</li>
          <li>Zone: ____</li>
          <li>Details: ____</li>
        </ul>
      </div>
      <div className="favorite__div">
        <i className="material-icons red-text text-darken-3">favorite</i>
      </div>
    </div>
  );
}

export default SeedPack;
