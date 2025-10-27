import connectToDatabase from "./db.js";
const pool = await connectToDatabase();

export const initQuestionsTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS questions (
   id INT AUTO_INCREMENT PRIMARY KEY,
   topic VARCHAR(100) NOT NULL,
   difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
   question_text TEXT NOT NULL, 
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  pool.query(query, (err) => {
    if (err) console.error("Error creating question table:", err);
    else console.log("Question table initiated");
  });
};
