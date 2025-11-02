import React, { useState, useEffect } from "react";
import { AuthFetch } from "../utils/api";

export default function FavoriteButton({ plant }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  // check if this plant is already favorited
  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const favorites = await AuthFetch("/library");
        const exists = favorites.some((fav) => fav.plant_name === plant.name);
        setIsFavorite(exists);
      } catch (err) {
        console.error(err);
      }
    };
    checkFavorite();
  }, [plant]);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (isFavorite) {
        const favorites = await AuthFetch("/library");
        const fav = favorites.find((f) => f.plant_name === plant.name);
        if (fav) await AuthFetch(`/library/${fav.id}`, { method: "DELETE" });
        setIsFavorite(false);
      } else {
        await AuthFetch("/library", {
          method: "POST",
          body: JSON.stringify({
            plant_name: plant.name,
            plant_details: plant,
          }),
        });
        setIsFavorite(true);
      }
    } catch (err) {
      console.error("Error updating favorites:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="favorite-btn" onClick={handleClick} disabled={loading}>
      <i
        className="material-icons"
        style={{ color: isFavorite ? "#2A9D8F" : "#888" }}
      >
        {isFavorite ? "bookmark" : "bookmark_border"}
      </i>
    </button>
  );
}
