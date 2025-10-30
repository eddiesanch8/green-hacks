import express from "express";
import cors from "cors";
import plantRoutes from "./routes/plantRoutes.js";
import authRoutes from "./routes/auth.js";
// authenticateToken will be used to make an api call
import authenticateToken from "./routes/authToken.js";
// router for adding user preferences
import libraryRouter from "./routes/library.js";

// --------------------------------------- setting up server settings ----------------------------------\\
const app = express();
app.use(express.json());
app.use(cors());


//---------------------------------------Plant Routes --------------------------------------------------\\

app.use("/api", plantRoutes);
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
const PORT = 3000;
app.use("/library", libraryRouter);

// --------------------------------------- setting up server endpoints ----------------------------------\\

app.get("/api/dummy", authenticateToken, async (req, res) => {
  try {
    res.send("this is my fake api call");
  } catch (err) {
    res.send("wrong you dummy!");
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
