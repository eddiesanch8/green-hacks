import React, { useEffect, useState } from "react";
import "../styles/Saved.css";
import SeedPack from "../components/SeedPack";

function Saved() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await fetch("http://localhost:3000/library", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setPlants(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <main>
      <h2>Your Saved Seeds!</h2>
      {plants.map((p) => (
        <div key={p.id}>
          <SeedPack plant={p.plant_details} />
        </div>
      ))}
    </main>
  );
}

export default Saved;
