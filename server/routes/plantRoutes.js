import express from "express";
import { getAISeeds } from "./llm.js";
import authenticateToken from "../routes/authToken.js";

const router = express.Router();

// Protect route with JWT middleware
router.post("/search", authenticateToken, async (req, res) => {
  const { userLocation, userSeason, userPlotSize, userExperience } = req.body;

  try {
    const data = await getAISeeds(
      userLocation,
      userSeason,
      userPlotSize,
      userExperience
    );
    res.json(data);
  } catch (error) {
    console.error("Error generating seeds:", error);
    res.status(500).json({ error: "Failed to generate seeds" });
  }
});

// Optional: custom error handling for JWT middleware
router.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Invalid or missing token" });
  }
  next(err);
});

export default router;
