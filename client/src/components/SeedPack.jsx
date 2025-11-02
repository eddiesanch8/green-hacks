import React from "react";
import "../styles/seedpack.css";
import FavoriteButton from "./favoriteBtn";

function SeedPack({ plant }) {
  return (
    <div className="seed-pack">
      <div className="plantIcon__div">
        <img className="fav-img" src={plant.photo} alt={plant.name} />
        <div className="plantDesc__div">
          <ul>
            <li>
              <b>Name:</b> {plant.name} ({plant.scientificName})
            </li>
            <li>
              <b>Season for growth:</b> {plant.season}
            </li>
            <li>
              <b>Details:</b> {plant.description}
            </li>
            <li>
              <b>Care:</b> {plant.care}
            </li>
          </ul>
        </div>
        <div className="favorite__div">
          <FavoriteButton plant={plant} />
        </div>
      </div>
    </div>
  );
}

export default SeedPack;
