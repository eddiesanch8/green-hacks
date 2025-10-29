import express from "express";
import { register, login } from "./authControllers.js";
const router = express.Router();

console.log("Auth routes file loaded");
console.log("Register function:", typeof register);
console.log("Login function:", typeof login);

// setting up our to expose our endpoints on server.js
router.post("/signup", register);
router.post("/login", login);

export default router;
