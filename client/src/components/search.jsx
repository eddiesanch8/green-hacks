import "../styles/search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_city: "",
    user_state: "",
    user_zip: "",
    userSeason: "",
    userPlotSize: "",
    userExperience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userLocation =
      `${formData.user_city}, ${formData.user_state} ${formData.user_zip}`.trim();

    const payload = {
      userLocation,
      userSeason: formData.userSeason,
      userPlotSize: formData.userPlotSize,
      userExperience: formData.userExperience,
    };

    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch("http://localhost:3000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      navigate("/results", { state: { results: data } });
    } catch (err) {
      console.error("Error fetching plants:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="search">
      <section className="form-container">
        <form className="almanac-form" onSubmit={handleSubmit}>
          <label className="almanac__label" htmlFor="user_city">
            What city do you live in?
          </label>
          <input
            id="user_city"
            name="user_city"
            className="almanac__input"
            onChange={handleChange}
          />

          <label className="almanac__label" htmlFor="user_state">
            What state do you live in?
          </label>
          <input
            id="user_state"
            name="user_state"
            className="almanac__input"
            onChange={handleChange}
          />

          <label className="almanac__label" htmlFor="user_zip">
            Zip Code
          </label>
          <input
            id="user_zip"
            name="user_zip"
            className="almanac__input"
            onChange={handleChange}
          />

          <label className="almanac__label" htmlFor="userPlotSize">
            How much space do you have to grow?
          </label>
          <select id="userPlotSize" name="userPlotSize" onChange={handleChange}>
            <option value="">--Choose Amount of Space--</option>
            <option value="Balcony">Balcony</option>
            <option value="Small Garden">Small Backyard</option>
            <option value="Large Farm">Large Backyard</option>
          </select>

          <label className="almanac__label" htmlFor="userExperience">
            How skilled are you at gardening?
          </label>
          <select
            id="userExperience"
            name="userExperience"
            onChange={handleChange}
          >
            <option value="">--Choose Gardening Level--</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Advanced</option>
          </select>

          <label className="almanac__label" htmlFor="userSeason">
            What season are you planning to grow in?
          </label>
          <select id="userSeason" name="userSeason" onChange={handleChange}>
            <option value="">--Choose Your Season--</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>

          <button type="submit" className="form__btn">
            Submit
          </button>
        </form>
      </section>

      {/* Loading Modal */}
      {loading && (
        <div className="modal-overlay--mine">
          <div className="spinner"> </div>
        </div>
      )}
    </main>
  );
}
