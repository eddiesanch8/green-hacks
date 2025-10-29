import express from "express";
import cors from "cors";
import plantRoutes from "./routes/plantRoutes.js";
// --------------------------------------- setting up server settings ----------------------------------\\
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

//---------------------------------------Plant Routes --------------------------------------------------\\

app.use("/api", plantRoutes);

// --------------------------------------- setting up server endpoints ----------------------------------\\

app.get("/", (res, req) => {
  req.send("hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
