import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../../.env") });

const token = process.env.TREFLE_TOKEN;

async function getPlantPhoto(plantName) {
  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants/search?token=${token}&q=${encodeURIComponent(plantName)}`
    );
    const json = await response.json();

    // Loop through results to find the first one with a image_url
    if (json.data && json.data.length > 0) {
      for (const plant of json.data) {
        if (plant.image_url) {
          return {
            imageUrl: plant.image_url
          };
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error fetching photo for ${plantName}:`, error.message);
    return null;
  }
}
//Test name params
// (async () => {
//   const photo = await getPlantPhoto("Encelia farinosa");
//   console.log(photo);
// })();

export { getPlantPhoto };