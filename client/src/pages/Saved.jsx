import React, { useEffect, useState } from "react";
import "../styles/Saved.css";
import SeedPack from "../components/SeedPack";
import M from "materialize-css";

function Saved() {
  const [plants, setPlants] = useState([]);
  const [plantFilter, setPlantFilter] = useState("");
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await fetch("https://green-hacks-production.up.railway.app/library", {
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

  useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }, [plantFilter]);

  const filteredPlants = plants.filter((plant) =>
    plantFilter ? plant.type == plantFilter : true
  );

  return (
    <main>
      <h2>Your Saved Seeds!</h2>
      <label className="filter-label" htmlFor="plantFiltering">
        Plant Type:
        <select
          id="plantFiltering"
          value={plantFilter}
          onChange={(e) => setPlantFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Tree">Trees</option>
          <option value="Shrub">Shrubs</option>
          <option value="Flower">Flowers</option>
          <option value="Fern">Ferns</option>
          <option value="Groundcover">Groundcover</option>
          <option value="Vegetable">Vegetables</option>
          <option value="Herb">Herbs</option>
          <option value="Vine">Vines</option>
          <option value="Succulent">Succulents</option>
          <option value="Cactus">Cacti</option>
        </select>
      </label>

      {filteredPlants.map((p, i) => (
        <SeedPack key={i} plant={p.plant_details} />
      ))}
    </main>
  );
}

export default Saved;
