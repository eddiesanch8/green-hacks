import React from "react";
import "../styles/ResultCard.css";
import FavoriteButton from "./favoriteBtn";

function ResultCard({plant}) {
    let plantIcon;

    if (plant.type == "tree") {
        plantIcon = <i className="material-icons green-text text-darken-3">park</i>;
    } else if (plant.type === "shrub") {
        plantIcon = <i className="material-icons green-text text-darken-1">nature</i>;
    } else if (plant.type === "flower") {
        plantIcon = <i className="material-icons yellow-text text-darken-4">local_florist</i>;
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
        <div className="cardParent  lighten-3">
            <div className="topSection">
                <div>                        
                    <p><b>Zone: {plant.growingZones}</b></p>
                </div>
                <div className="bookmark__div">                    
                  <FavoriteButton plant={plant} /> 
                </div> 
                </div>
            <div className="midSection">
                <div className="IMG">
                    {plantIcon}
                </div>
                <div className="infoList">
                    <ul>
                        <li><b>Plant Name:</b> {plant.name} ({plant.scientificName})</li>
                        <li><b>Plant Type:</b> {plant.type}</li>
                        <li><b>Season to Plant:</b> {plant.season}</li>
                    </ul>
                </div>
            </div>
            <div className="description"><b>Description:</b>{plant.description}</div>
            <div className="description"><b>Plant Care:</b> {plant.care}</div>
            <div className="description"><b>Fun Fact:</b> {plant.funFact}</div>
        </div>
      </div>
      <div className="description">
        Description: Full sun to partial shade; highly drought-tolerant once
        established. Plant in average to poor soil—rich soil encourages
        excessive foliage over flowers. Space 12-18 inches apart. Deadhead
        regularly to extend blooming. Minimal water needed except during extreme
        drought. Divide every 3-4 years.
      </div>
      <div className="description">Plant Care: {plant.care}</div>
      <div className="description">Fun Fact: {plant.funFact}</div>
    </div>
  );
}

export default ResultCard;
