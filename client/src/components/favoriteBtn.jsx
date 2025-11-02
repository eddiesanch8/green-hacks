import { useState, useEffect } from "react";
import { AuthFetch } from "../utils/api";

export default function FavoriteButton({ plant }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize favorite state
  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const favorites = await AuthFetch("/library");
        setIsFavorite(favorites.some((fav) => fav.plant_name === plant.name));
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };
    checkFavorite();
  }, [plant]);

  const toggleFavorite = async () => {
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
    <button
      className="favorite-btn"
      onClick={toggleFavorite}
      disabled={loading}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <i
        className="material-icons"
        style={{ color: isFavorite ? "#2A9D8F" : "#888" }}
      >
        {isFavorite ? "bookmark" : "bookmark_border"}
      </i>
    </button>
  );
}
