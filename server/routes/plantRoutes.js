import express from 'express';
import { getAISeeds } from '../llm/llm.js'; //AI Prompt Response

const router = express.Router();


router.get("/native-seeds", async (req, res) => {

    try {
        const data = await getAISeeds(); //Getting the promises object back which is Claude AI's response
        console.log(res.json(data));
        res.json(data); //Turns the Claude AI's response into a JSON
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: "Failed to generate joke"})
    }


})







export default router;

