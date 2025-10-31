import React from "react";
import "../styles/seedpack.css";
import FavoriteButton from "./favoriteBtn";

function SeedPack({ plant }) {
  let plantIcon;

    switch (plant.type) {
        case "Tree":
            plantIcon = <i className="material-icons green-text text-darken-3">park</i>;
            break;
        case "Shrub":
            plantIcon = <i className="material-icons green-text text-darken-1">nature</i>;
            break;
        case "Flower":
            plantIcon = <i className="material-icons yellow-text text-darken-4">local_florist</i>;
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
        <div className="green lighten-2">
            <div className="plantIcon__div">
                <div>{plantIcon}</div>
            </div>
            <div className="plantDesc__div">
                <ul>
                    <li><b>Name:</b> {plant.name} ({plant.scientificName})</li>
                    <li><b>Season for growth:</b> {plant.season}</li>
                    <li><b>Details:</b> {plant.description}</li>
                    <li><b>Care:</b> {plant.care}</li>
                </ul>
                </div>
            <div className="favorite__div"><FavoriteButton plant={plant} /></div>
        </div>
    )
}

export default SeedPack;
