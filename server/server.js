import express from "express";
import cors from "cors";

// --------------------------------------- setting up server settings ----------------------------------\\
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;

// --------------------------------------- setting up server endpoints ----------------------------------\\

app.get("/", (res, req) => {
  req.send("hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
