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
app.use(express.urlencoded({ extended: true }));

//---------------------------------------Plant Routes --------------------------------------------------\\

app.use("/api", plantRoutes);
app.use("/auth", authRoutes);
app.use("/library", libraryRouter);

// --------------------------------------- setting up server endpoints ----------------------------------\\
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
