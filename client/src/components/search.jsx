import "../styles/search.css";
// import { useState } from "react";

export function SearchForm() {
  //   const [growArea, setGrowArea] = useState("");

  return (
    <main className="search">
      <section className="form-container">
        <form className="almanac-form">
          <label className="almanac__label" htmlfor="user_city">
            What city do you live in?
          </label>
          <input
            id="user_city"
            name="user_city"
            className="almanac__input"
            placeholder="City eg: Charlotte "
          />
          <label className="almanac__label" htmlfor="user_city">
            What state do you live in?
          </label>
          <input
            id="user_state"
            name="user_state"
            className="almanac__input"
            placeholder="eg: NC"
          />
          <label className="almanac__label" htmlfor="user_city">
            Zip Code
          </label>
          <input
            id="user_zip"
            name="user_zip"
            className="almanac__input"
            placeholder="eg: 00000"
          />
          <label className="almanac__label" htmlfor="growingArea">
            How much space do you have to grow?
          </label>
          <select id="growingArea" name="growingArea">
            <option value="">--Choose Amount of Space--</option>
            <option value="balcony">Balcony</option>
            <option value="small_backyard">Small Backyard</option>
            <option value="large_backyard">Large Backyard</option>
            <option value="farm">Farm</option>
          </select>

          <label className="almanac__label" htmlfor="garden_level">
            How skilled are you at gardening?
          </label>
          <select id="garden_level" name="garden_level">
            <option value="">--Choose Gardening Level--</option>
            <option value="novice">Novice</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>

          <label className="almanac__label" htmlfor="growing_season">
            What season are you planning to grow in?
          </label>
          <select id="growing_season" name="growing_season">
            <option value="">--Choose Your Season--</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
