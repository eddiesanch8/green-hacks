import dotenv from "dotenv";
dotenv.config();
import Anthropic from "@anthropic-ai/sdk";

//---------------Claude Call-------------//
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

//--------------User Prompt Variables----------

async function getAISeeds(
  userLocation,
  userSeason,
  userPlotSize,
  userExperience
) {
  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1500,
      system: `You are an expert botanist and sustainable agriculture advisor specializing in native plants and biodiversity restoration.

Requirements:
- Focus only on native and regionally appropriate species for the user's location
- Suggest 5 different plants, each unique in type and growing requirements
- Tailor recommendations to the user's experience level (e.g., low-maintenance plants for beginners)
- Care instructions should be 2 concise sentences
- If exact native plants are unknown, select closely related species from the same USDA or regional planting zone

CRITICAL JSON RULES:
- All text must be on a single line with no line breaks
- Do not use apostrophes or quotes inside text fields
- Keep all descriptions concise
- Output must be valid JSON only — no markdown, no code blocks, no extra text

Return exactly one array of 5 objects following this structure:
[
  {
    "name": "Common plant name",
    "scientificName": "Genus species",
    "season": "Best planting season",
    "care": "Brief care instructions for light, water, and soil",
    "funFact": "Interesting ecological or wildlife benefit",
    "description": "brief 2-3 sentence description",
    "growingZones": "USDA zones like 6-9",
    "type": "one of: Tree, Shrub, Flower, Fern, Groundcover, Vegetable, Herb, Vine, Succulent, Cactus"
  }
]

Return ONLY the JSON array with no additional text before or after.`,
      messages: [
        {
          role: "user",
          content: `I'm in ${userLocation} and want to plant a garden in the ${userSeason}. I have a ${userPlotSize} for growing space and I'm a ${userExperience} gardener.`,
        },
      ],
    });

    let responseText = message.content[0].text;

    // Strip markdown code blocks if present
    responseText = responseText.replace(/```(?:json)?\n?/g, "").trim();

    // Log for debugging

    const seedData = JSON.parse(responseText);
    return seedData;
  } catch (error) {
    console.error("Error in getAISeeds:", error.message);
    throw error;
  }
}

export { getAISeeds };
