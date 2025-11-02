import React from "react";
import "../styles/ResultCard.css";
import FavoriteButton from "./favoriteBtn";

function ResultCard({ plant }) {
  let plantIcon;

  switch (plant.type) {
    case "Tree":
      plantIcon = (
        <i className="material-icons green-text text-darken-3">park</i>
      );
      break;
    case "Shrub":
      plantIcon = (
        <i className="material-icons green-text text-darken-1">nature</i>
      );
      break;
    case "Flower":
      plantIcon = (
        <i className="material-icons yellow-text text-darken-4">
          local_florist
        </i>
      );
      break;
    case "Fern":
    case "Succulent":
      plantIcon = <i className="material-icons green-text">spa</i>;
      break;
    case "Groundcover":
      plantIcon = <i className="material-icons green-text">grass</i>;
      break;
    case "Vegetable":
      plantIcon = <i className="material-icons red-text darken-1">nutrition</i>;
      break;
    case "Herb":
    case "Vine":
      plantIcon = <i className="material-icons green-text">eco</i>;
      break;
    default:
      plantIcon = <i className="material-icons green-text">potted_plant</i>;
  }

  return (
    <div className="cardParent  lighten-3">
      <div className="topSection">
        <div>
          <p>
            <b>Zone: {plant.growingZones}</b>
          </p>
        </div>
        <div className="bookmark__div">
          <FavoriteButton plant={plant} />
        </div>
      </div>
      <div className="midSection">
        <div className="IMG">{plantIcon}</div>
        <div className="infoList">
          <ul>
            <li>
              <b>Plant Name:</b> {plant.name} ({plant.scientificName})
            </li>
            <li>
              <b>Plant Type:</b> {plant.type}
            </li>
            <li>
              <b>Season to Plant:</b> {plant.season}
            </li>
          </ul>
        </div>
      </div>
      <div className="description">
        <b>Description:</b> {plant.description}
      </div>
      <div className="description">
        <b>Plant Care:</b> {plant.care}
      </div>
      <div className="description">
        <b>Fun Fact:</b> {plant.funFact}
      </div>
    </div>
  );
}

export default ResultCard;
