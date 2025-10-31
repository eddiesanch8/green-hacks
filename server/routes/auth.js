import express from "express";
import { register, login } from "./authControllers.js";
const router = express.Router();

// setting up our to expose our endpoints on server.js
router.post("/signup", register);
router.post("/login", login);

export default router;
