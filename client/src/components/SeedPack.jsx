import React from "react";
import "../styles/seedpack.css";
import FavoriteButton from "./favoriteBtn";

function SeedPack({ plant }) {
  let plantIcon;

  if (plant.type == "tree") {
    plantIcon = <i className="material-icons green-text text-darken-3">park</i>;
  } else if (plant.type === "shrub") {
    plantIcon = (
      <i className="material-icons green-text text-darken-1">nature</i>
    );
  } else if (plant.type === "flower") {
    plantIcon = (
      <i className="material-icons yellow-text text-darken-4">local_florist</i>
    );
  } else if (plant.type === "fern" || plant.type === "succulent") {
    plantIcon = <i className="material-icons green-text">spa</i>;
  } else if (plant.type === "groundcover") {
    plantIcon = <i className="material-icons green-text">grass</i>;
  } else if (plant.type === "vegetable") {
    plantIcon = <i className="material-icons green-text">nutrition</i>;
  } else if (plant.type === "herb" || plant.type === "vine") {
    plantIcon = <i className="material-icons green-text">eco</i>;
  } else {
    plantIcon = <i className="material-icons green-text">potted_plant</i>;
  }

  return (
    <div className="green darken-2">
      <div className="plantIcon__div">
        <div>{plantIcon}</div>
      </div>
      <div className="plantDesc__div">
        <ul>
          <li>
            {plant.name} {plant.scientificName}
          </li>
          <li>Zone: {plant.growingZones}</li>
          <li>Season for growth: {plant.season}</li>
          <li>Details: {plant.description}</li>
        </ul>
      </div>
      <div className="favorite__div">
        <FavoriteButton />{" "}
      </div>
    </div>
  );
}

export default SeedPack;
