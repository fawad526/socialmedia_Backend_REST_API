import express from "express";
import { getAllUser, signup }from "../controllers/user-controller";
const router = express.Router();

router.use(express.json());

router.get('/',getAllUser);
router.post('/signup',signup);

export default router;

