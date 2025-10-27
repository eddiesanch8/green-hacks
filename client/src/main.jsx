import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "materialize-css/dist/css/materialize.min.css";
import { Hello } from "./app";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hello />
  </StrictMode>
);
