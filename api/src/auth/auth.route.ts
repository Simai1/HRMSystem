import { Router } from "express";
import authController from "./auth.controller";

const router = Router();

router.route('/register').post(authController.registerViaEmail);

export default router;
