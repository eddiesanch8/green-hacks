import express from "express";
import { getAISeeds } from "../llm/llm.js"; //AI Prompt Response

const router = express.Router();

router.post("/search", async (req, res) => {
  const { userLocation, userSeason, userPlotSize, userExperience } = req.body;

  try {
    const data = await getAISeeds(
      userLocation,
      userSeason,
      userPlotSize,
      userExperience
    );
    res.json(data); //Turns the Claude AI's response into a JSON
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Failed to generate joke" });
  }
});

export default router;
