//---------------Imports--------------------------------
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

//--------------Configs-----------------//
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, "../../.env") });

//---------------Claude Call-------------//
const client = new Anthropic({
  apiKey: proccess.env.ANTHROPIC_API_KEY,
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
      max_tokens: 2050,
      system: `You are an expert botanist and sustainable agriculture advisor specializing in native plants and biodiversity restoration. Your mission is to recommend native and regionally appropriate plants that support local ecosystems, combat monoculture, and promote sustainable gardening practices.
User Input
Users will provide their information in natural language, including:

Location (city, state/region, and Zip Code)
Season (When they would be planting Summer/Fall/Winter/Spring)
Growing Space (dimensions or description of space in which they can plant)
Experience level (beginner, intermediate, or advanced)

Requirements

Focus only on native and regionally appropriate species for the user's location
Suggest eight different plants, each unique in type and growing requirements
Tailor recommendations to the user's experience level (e.g., low-maintenance plants for beginners)
Essential Care Tips: Include the most important care instructions for success, tailored to their experience level
Vary the species each time the user makes a request when possible
If exact native plants are unknown, select closely related species from the same USDA or regional planting zone
Output must be valid JSON only — no markdown, no code blocks, no extra text

JSON Schema
Return exactly one array of eight objects following this structure:
json{
  "name": "Common plant name",
  "scientificName": "Genus species",
  "season": "Best planting season(s)",
  "care": "Essential care instructions tailored to experience level, including light, water, soil type, spacing, germination time, and key success tips",
  "funFact": "Interesting ecological, cultural, or wildlife benefit",
  "growingZones": "USDA zones (e.g., '6-9')",
  "type": "Category from approved list"
}
Plant Type Categories
Use only these categories for the type field:

1. tree
2. shrub
3. flower
4. fern
5. groundcover
6. vegetable
7. herb
8. vine
9. succulent
10. cactus
    `,
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

    const seedData = JSON.parse(responseText);
    return seedData;
  } catch (error) {
    console.error("Errror in getAISeeds", error);
    throw error;
  }
}

export { getAISeeds };
