import express from "express";
import cors from "cors";
import plantRoutes from "./routes/plantRoutes.js";
import authRoutes from "./routes/auth.js";
import { createTable } from "./config/sqlUtils.js";
import { userSchema } from "./schema/userSchema.js";
import { librarySchema } from "./schema/librarySchema.js";
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

const initializeTables = async () => {
  try {
    // Create users table FIRST
    await createTable(userSchema);

    // Then create tables that reference users
    await createTable(librarySchema);
  } catch (error) {}
};

// Call this before starting the server
initializeTables();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
