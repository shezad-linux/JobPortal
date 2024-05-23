import { defaultMessage } from "../controllers/defaultController.js";

import express from "express";
const router = express.Router();

router.get("/",defaultMessage);
export default router;