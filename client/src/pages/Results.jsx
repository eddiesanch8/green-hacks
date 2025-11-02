import "../styles/Results.css";
import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Results() {
  const location = useLocation();
  const plants = location.state?.results || [];

  if (!plants.length) {
    return <p>No results found. Please try again.</p>;
  }

  return (
    <main>
      <h2>The Plants for You!</h2>
      {plants.map((p, i) => (
        <div key={i}>
          <ResultCard plant={p} />
        </div>
      ))}
    </main>
  );
}

export default Results;
