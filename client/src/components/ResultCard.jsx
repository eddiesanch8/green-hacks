import "../styles/ResultCard.css";
import FavoriteButton from "./favoriteBtn";

function ResultCard({ plant }) {
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
        <img className="IMG" src={plant.photo} alt={plant.name} />
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
